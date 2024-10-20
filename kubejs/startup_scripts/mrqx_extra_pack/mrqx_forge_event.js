// priority: -1
// 最终还是选择了自己造轮子（趴
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent', event => {
    if (event.getOriginalTarget() && !event.getOriginalTarget().getLevel().isClientSide() && event.getOriginalTarget().isPlayer()) {
        global.mrqxLivingChangeTargetEvent(event)
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', event => {
    if (event.getEntity() && event.getEntity().getLevel() && !event.getEntity().getLevel().isClientSide() && event.getEntity().isPlayer()) {
        global.mrqxEffectAddedEvent(event)
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
    if (event.getSource() && event.getSource().getPlayer() && !event.getSource().getPlayer().getLevel().isClientSide()) {
        global.mrqxLivingHurtByPlayer(event)
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {
    if (event.getEntity() && event.getEntity().isPlayer() && !event.getEntity().getLevel().isClientSide()) {
        global.mrqxLivingDamageByOthers(event)
    }
})