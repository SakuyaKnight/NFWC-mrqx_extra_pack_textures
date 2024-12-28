// priority: 1000
/**
 * 获取某个半径内的生物
 * @param {Internal.Level} level
 * @param {Vec3} pos
 * @param {Number} radius
 * @returns {Array<Internal.LivingEntity>}
 */
function getLivingWithinRadius(level, pos, radius) {
    let area = new AABB.of(pos.x() - radius, pos.y() - radius, pos.z() - radius, pos.x() + radius, pos.y() + radius, pos.z() + radius)
    let entityAABBList = level.getEntitiesWithin(area)
    let entityList = []
    entityAABBList.forEach(entity => {
        if (entity.position() && entity.isLiving() && entity.position().distanceTo(pos) <= radius) {
            entityList.push(entity)
        }
    })
    return entityList
}

/**
 * 检测玩家是否在火中
 * @param {Internal.ServerPlayer} player
 * @returns {Boolean}
 */
function isPlayerOnFire(player) {
    let typeMap = getPlayerChestCavityTypeMap(player)
    return typeMap.has('kubejs:on_fire_check') || player.isOnFire()
}



/**
 * 革命蒸汽机效果
 * @param {Internal.ServerPlayer} player
 */
function revolSteamEngine(player) {
    let count = player.persistentData.getInt(resourceCount)
    if (player.hasEffect('kubejs:burning_heart')) {
        let effect = player.getEffect('kubejs:burning_heart')
        player.removeEffect('kubejs:burning_heart')
        player.potionEffects.add('kubejs:flaring_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else if (player.hasEffect('kubejs:flaring_heart')) {
        let effect = player.getEffect('kubejs:flaring_heart')
        player.removeEffect('kubejs:flaring_heart')
        player.potionEffects.add('kubejs:burning_heart', effect.getDuration() + 20 * 5, effect.getAmplifier(), false, false)
        updateResourceCount(player, count + (effect.getAmplifier() + 1) * 50)
    } else {
        updateResourceCount(player, count + 25)
    }
}


/**
 * 获取与基准方向相对的旋转
 * @param {Internal.Direction} direction
 * @returns {String}
 */
function getRelativeRotation(direction) {
    switch (direction) {
        case Direction.DOWN || Direction.UP || Direction.EAST:
            return 'none'
        case Direction.NORTH:
            return 'counterclockwise_90'
        case Direction.WEST:
            return 'clockwise_180'
        case Direction.SOUTH:
            return 'clockwise_90'
    }
    return 'none'
}