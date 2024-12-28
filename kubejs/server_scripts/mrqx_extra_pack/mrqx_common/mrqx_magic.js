// priority: 499

/**
 * @param {Internal.CustomSpell$CastContext} ctx 
 * @returns 
 */
global.mrqxEarthWithoutEarth = (ctx) => {
    /** @type {Internal.ServerPlayer} */
    let player = ctx.entity
    let level = ctx.level
    let data = $OreDataCapability.getData(level.getChunkAt(player.blockPosition()))
    data.setRecipe(new ResourceLocation(randomGet(coeVeinList)))
    data.setLoaded(true)
    data.setRandomMul(new $Float(0.8))
    data.setExtractedAmount(0)
}