// priority: 9

/**
 * 器官实体掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mrqxEntityLootStrategies = {

}

var assign_entity_loot = Object.assign(entityLootStrategies, mrqxEntityLootStrategies);

/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mrqxEntityLootOnlyStrategies = {
    // 冒险者证章
    'mrqx_extra_pack:adventurers_badge': function (event, organ) {
        let count = 1
        let diffStage = event.getPlayer().stages.getAll().toArray().find(ele => ele.startsWith('difficult_level_'))
        let diffLevelNum = 1
        if (diffStage) {
            diffLevelNum = diffStage.match('difficult_level_(\\d+)')[1]
        }
        while (diffLevelNum--) {
            if (Math.random() < 0.1) {
                count++
            }
        }
        event.loot.forEach(loot => {
            loot.setCount(loot.getCount() * count)
        })
    },

    // 死狱之魂
    'mrqx_extra_pack:prison_soul': function (event, organ) {
        let player = event.getPlayer()
        let count = player.persistentData.getInt('mrqx_kill_count') ?? 0
        count++
        player.persistentData.putInt('mrqx_kill_count', count)
    },

    // “镜花水月”肾
    'mrqx_extra_pack:kidney_moon_in_the_water': function (event, organ) {
        let player = event.getPlayer()
        player.setHealth(player.getHealth() + player.getMaxHealth() * 0.05)
    },

    // 国王的水晶
    'mrqx_extra_pack:kings_crystal': function (event, organ) {
        let player = event.getPlayer()
        if (Math.floor(player.getHealth()) <= 1) {
            event.addLoot('lightmanscurrency:coin_copper')
        }
    },
}

var assign_entity_loot_only = Object.assign(entityLootOnlyStrategies, mrqxEntityLootOnlyStrategies);

/**
 * 器官箱子掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mrqxChestLootStrategies = {

}

var assign_chest_loot = Object.assign(chestLootStrategies, mrqxChestLootStrategies);

/**
 * 器官箱子掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mrqxChestLootOnlyStrategies = {

}

var assign_chest_loot_only = Object.assign(chestLootOnlyStrategies, mrqxChestLootOnlyStrategies);

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(['#tetra:forged_ruins'], false)
        .addLoot(LootEntry.of('mrqx_extra_pack:cpu').when((c) => c.randomChance(0.06)))
        .addLoot(LootEntry.of('mrqx_extra_pack:magic_fast_charging_cpu').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('mrqx_extra_pack:magic_overload_cpu').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('mrqx_extra_pack:magic_glass_cannon_cpu').when((c) => c.randomChance(0.02)))
})