// priority: 500
/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.endlessDream = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    if (!player.hasEffect('kubejs:sweet_dream')) return
    let spellLevel = ctx.getSpellLevel()
    let dreamEffect = player.getEffect('kubejs:sweet_dream')
    player.potionEffects.add('kubejs:sweet_dream', spellLevel * 20 * 4 + dreamEffect.getDuration(), Math.ceil(spellLevel / 5) + dreamEffect.getAmplifier())
    for (let i = 0; i < 16; i++) {
        let theta = 2 * JavaMath.PI / 16 * i
        let dx = Math.cos(theta) * 1.25;
        let dz = Math.sin(theta) * 1.25;
        player.level.spawnParticles($ParticleTypes.HEART, false, player.x + dx, player.y + 1, player.z + dz, 0, 1, 0, 1, 0.5)
    }
}


/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.dreamOfNeedles = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    if (!player.hasEffect('kubejs:sweet_dream')) return
    let ray = player.rayTrace(32, false)
    let resultVec = ray.hit ? ray.hit : player.getPosition(1.0).add(player.getLookAngle().normalize().scale(32))

    let dreamEffect = player.getEffect('kubejs:sweet_dream')
    player.removeEffect('kubejs:sweet_dream')
    player.potionEffects.add('kubejs:sweet_dream', dreamEffect.getDuration(), Math.max(dreamEffect.getAmplifier() - 1, 0))
    let spellLevel = ctx.getSpellLevel()
    let powerModifier = player.getAttributeValue(global.attributes.CANDY_SPELL_POWER.get())
    let damage = 5 + dreamEffect.getDuration() / 100
    damage = damage * (1 + powerModifier)

    // 限制数量上限，避免性能问题
    let count = Math.min(30, 3 + dreamEffect.getAmplifier())
    let degreesPerNeedle = 360 / count
    // 根据法术等级，产生新的释放环，限制上下限
    let castTimes = Math.min(Math.max(Math.ceil(spellLevel / 5), 1), 5)
    for (let j = 1; j < castTimes + 1; j++) {
        for (let i = 0; i < count; i++) {
            let needle = new $BloodNeedle(player.level, player)
            let rotation = degreesPerNeedle * i - (degreesPerNeedle / 2)
            needle.setDamage(damage)
            needle.setZRot(rotation)
            let spawn = player.getEyePosition().add(new Vec3(0, j, 0).zRot(rotation * JavaMath.PI / 180).xRot(-player.xRot * JavaMath.PI / 180).yRot(-player.yRot * JavaMath.PI / 180))
            needle.moveTo(spawn)
            needle.shoot(resultVec.subtract(spawn).normalize())
            player.level.addFreshEntity(needle)
        }
    }
}


/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.dreamOfSinging = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    if (!player.hasEffect('kubejs:sweet_dream')) return
    let spellLevel = ctx.getSpellLevel()
    let dreamEffect = player.getEffect('kubejs:sweet_dream')
    player.removeEffect('kubejs:sweet_dream')
    player.modifyAttribute('minecraft:generic.attack_damage', 'sweetDreamAttackBoost', (dreamEffect.getAmplifier() + 1) * 10, 'addition')
    player.modifyAttribute('minecraft:generic.attack_damage', 'sweetDreamAttackBoostMulti', spellLevel * 0.1, 'multiply_base')
    let duration = Math.min(dreamEffect.getDuration(), 20 * 60)
    player.potionEffects.add('minecraft:glowing', duration)
    player.server.scheduleInTicks(duration, (callback) => {
        player.removeAttribute('minecraft:generic.attack_damage', 'sweetDreamAttackBoost')
        player.removeAttribute('minecraft:generic.attack_damage', 'sweetDreamAttackBoostMulti')
    })
}
