// priority: -1

StartupEvents.registry('item', event => {
    /**
     * 
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.mrqxextrapack")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
    }

    {// 纸器官
        // 纸器官
        registerOrgan(new Organ('mrqx_extra_pack:lung_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_paper.1" })]).addScore('breath_recovery', 0.5).addScore('breath_capacity', 0.5).addScore('endurance', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/lung_paper').tag('itemborders:iron').tag('kubejs:lung').tag('kubejs:evolution').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:muscle_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_paper.1" })]).addScore('strength', 0.5).addScore('speed', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/muscle_paper').tag('itemborders:iron').tag('kubejs:muscle').tag('kubejs:evolution').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:heart_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_paper.1" })]).addScore('health', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/heart_paper').tag('kubejs:evolution').tag('itemborders:iron').tag('kubejs:heart').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:intestine_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.intestine_paper.1" })]).addScore('nutrition', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/intestine_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:intestine').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:rib_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_paper.1" })]).addScore('defense', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/rib_paper').tag('itemborders:iron').tag('kubejs:rib').tag('kubejs:evolution').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:spine_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spine_paper.1" })]).addScore('defense', 0.25).addScore('nerves', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/spine_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spine').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:spleen_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spleen_paper.1" })]).addScore('metabolism', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/spleen_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:spleen').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:stomach_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.stomach_paper.1" })]).addScore('digestion', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/stomach_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:stomach').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:kidney_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_paper.1" })]).addScore('filtration', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/kidney_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:kidney').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:liver_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.liver_paper.1" })]).addScore('detoxification', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/liver_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:liver').tag('kubejs:mrqx_paper')
        registerOrgan(new Organ('mrqx_extra_pack:appendix_paper').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_paper.1" })]).addScore('luck', 0.5).addScore('hydroallergenic', 3).addScore('fire_resistant', -1).build()).texture('mrqx_extra_pack:item/organs/paper/appendix_paper').tag('itemborders:iron').tag('kubejs:evolution').tag('kubejs:appendix').tag('kubejs:mrqx_paper')

        // 书写过的纸器官
        registerOrgan(new Organ('mrqx_extra_pack:lung_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/lung_paper_written').tag('itemborders:gold').tag('kubejs:lung').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:muscle_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/muscle_paper_written').tag('itemborders:gold').tag('kubejs:muscle').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:heart_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/heart_paper_written').tag('itemborders:gold').tag('kubejs:heart').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:intestine_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.intestine_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/intestine_paper_written').tag('itemborders:gold').tag('kubejs:intestine').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:rib_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/rib_paper_written').tag('itemborders:gold').tag('kubejs:rib').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:spine_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spine_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/spine_paper_written').tag('itemborders:gold').tag('kubejs:spine').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:spleen_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spleen_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/spleen_paper_written').tag('itemborders:gold').tag('kubejs:spleen').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:stomach_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.stomach_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/stomach_paper_written').tag('itemborders:gold').tag('kubejs:stomach').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:kidney_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/kidney_paper_written').tag('itemborders:gold').tag('kubejs:kidney').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:liver_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.liver_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/liver_paper_written').tag('itemborders:gold').tag('kubejs:liver').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')
        registerOrgan(new Organ('mrqx_extra_pack:appendix_paper_written').addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_paper_written.1" })]).addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.paper_written.1" })]).build()).texture('mrqx_extra_pack:item/organs/paper_written/appendix_paper_written').tag('itemborders:gold').tag('kubejs:appendix').tag('kubejs:mrqx_paper').tag('kubejs:player_tick')

        // 神之笔
        registerOrgan(new Organ('mrqx_extra_pack:divine_pen')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.divine_pen.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.divine_pen.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.divine_pen.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.divine_pen.4" })])
            .addScore('hydrophobia', 1)
            .addScore('hydroallergenic', 5)
            .build())
            .texture('mrqx_extra_pack:item/organs/divine_pen')
            .tag('itemborders:diamond')
            .tag('kubejs:legends')
            .tag('kubejs:rclick_only')
    }

    {// 核能套
        // 裂变反应堆
        registerOrgan(new Organ('mrqx_extra_pack:fission_reactor')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.4" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.5" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.6" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fission_reactor.7" })])
            .addScore('health', -3)
            .addScore('filtration', -1)
            .addScore('detoxification', -1)
            .build())
            .texture('mrqx_extra_pack:item/organs/nuclear/fission_reactor')
            .tag('itemborders:diamond')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_nuclear')
            .tag('kubejs:rclick_only')
            .tag('kubejs:active_only')

        // 反应散热器
        registerOrgan(new Organ('mrqx_extra_pack:heat_vent')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.heat_vent.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heat_vent.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heat_vent.3" })])
            .addScore('defense', 0.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/nuclear/heat_vent')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_nuclear')

        // 反应热隔层
        registerOrgan(new Organ('mrqx_extra_pack:thermal_barrier')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_barrier.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_barrier.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_barrier.3" })])
            .addScore('defense', 0.5)
            .addScore('fire_resistant', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/nuclear/thermal_barrier')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_nuclear')

        // 反应热喷口
        registerOrgan(new Organ('mrqx_extra_pack:thermal_injector')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_injector.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_injector.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_injector.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.thermal_injector.4" })])
            .addScore('strength', 1)
            .addScore('breath_recovery', -3)
            .build())
            .texture('mrqx_extra_pack:item/organs/nuclear/thermal_injector')
            .tag('itemborders:gold')
            .tag('kubejs:damage')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_nuclear')

        // 反应舱室
        registerOrgan(new Organ('mrqx_extra_pack:reactor_chamber')
            .addScore('defense', 1)
            .addScore('nerves', -0.25)
            .addScore('filtration', 0.25)
            .addScore('detoxification', 0.25)
            .build())
            .texture('mrqx_extra_pack:item/organs/nuclear/reactor_chamber')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_nuclear')
    }

    {// 四魂
        // 荣耀之魂
        registerOrgan(new Organ('mrqx_extra_pack:proud_soul')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.proud_soul.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.proud_soul.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.proud_soul.3" })])
            .addScore('defense', -1)
            .addScore('nerves', 1)
            .addScore('speed', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/soul/proud_soul')
            .tag('itemborders:gold')
            .tag('kubejs:damage_only')
            .tag('kubejs:legends')
            .tag('kubejs:active_only')

        // 死狱之魂
        registerOrgan(new Organ('mrqx_extra_pack:prison_soul')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.prison_soul.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.prison_soul.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.prison_soul.3" })])
            .addScore('strength', 2)
            .addScore('nerves', -1)
            .addScore('defense', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/soul/prison_soul')
            .tag('itemborders:gold')
            .tag('kubejs:damage_only')
            .tag('kubejs:legends')
            .tag('kubejs:loot_entity_only')
            .tag('kubejs:active_only')

        // 灵狐之魂
        registerOrgan(new Organ('mrqx_extra_pack:fox_soul')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.fox_soul.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fox_soul.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.fox_soul.3" })])
            .addScore('defense', 1)
            .addScore('strength', -1)
            .addScore('speed', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/soul/fox_soul')
            .tag('itemborders:gold')
            .tag('kubejs:damage_only')
            .tag('kubejs:legends')
            .tag('kubejs:active_only')

        // 山月之魂
        registerOrgan(new Organ('mrqx_extra_pack:moon_soul')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_soul.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_soul.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_soul.3" })])
            .addScore('strength', 1)
            .addScore('nerves', 2)
            .addScore('speed', -1)
            .build())
            .texture('mrqx_extra_pack:item/organs/soul/moon_soul')
            .tag('itemborders:gold')
            .tag('kubejs:damage_only')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:legends')
            .tag('kubejs:active_only')
    }

    {// 天体器官
        // 耀阳种子
        registerOrgan(new Organ('mrqx_extra_pack:sun_seed')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sun_seed.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sun_seed.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sun_seed.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sun_seed.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sun_seed.5" })])
            .addScore('hydroallergenic', -3)
            .addScore('fire_resistant', 7.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/sun_seed')
            .tag('itemborders:diamond')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:legends')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:active_only')

        // 暗日种子
        registerOrgan(new Organ('mrqx_extra_pack:dark_sun_seed')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.dark_sun_seed.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.dark_sun_seed.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.dark_sun_seed.3" })])
            .addScore('filtration', -2)
            .addScore('fire_resistant', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/dark_sun_seed')
            .tag('itemborders:diamond')
            .tag('kubejs:key_pressed')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:legends')

        // 残阳
        registerOrgan(new Organ('mrqx_extra_pack:broken_sun')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.2" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.3" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.4" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.5" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.6" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.broken_sun.7" })])
            .addScore('defense', -2)
            .addScore('fire_resistant', 3.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/broken_sun')
            .tag('itemborders:diamond')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:legends')

        // ‌月岩
        registerOrgan(new Organ('mrqx_extra_pack:moon_rock')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_rock.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_rock.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.moon_rock.3" })])
            .addScore('defense', 1)
            .addScore('impact_resistant', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/moon_rock')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:active')

        // 日晷
        registerOrgan(new Organ('mrqx_extra_pack:sundial')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sundial.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sundial.2" })])
            .addScore('nerves', 1)
            .addScore('photosynthesis', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/sundial')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:player_tick_only')

        // ‌星空棱镜
        registerOrgan(new Organ('mrqx_extra_pack:starry_sky_prism')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.starry_sky_prism.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.starry_sky_prism.2" })])
            .addScore('endurance', 1)
            .addScore('crystalsynthesis', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/starry_sky_prism')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:player_tick_only')

        // 黑洞
        registerOrgan(new Organ('mrqx_extra_pack:black_hole')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.black_hole.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.black_hole.2" })])
            .addScore('breath_recovery', 5)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/black_hole')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:key_pressed')

        // 白洞
        registerOrgan(new Organ('mrqx_extra_pack:white_hole')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.white_hole.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.white_hole.2" })])
            .addScore('pyromancy', 1)
            .addScore('ghastly', 1)
            .addScore('dragon_bombs', 1)
            .addScore('forceful_spit', 1)
            .addScore('dragon_breath', 1)
            .addScore('shulker_bullets', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/white_hole')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:key_pressed')

        // ‌太阳光镜
        registerOrgan(new Organ('mrqx_extra_pack:solar_mirror')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.solar_mirror.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.solar_mirror.2" })])
            .addScore('defense', -1)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/solar_mirror')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:damage')

        // ‌流星雨引导仪
        registerOrgan(new Organ('mrqx_extra_pack:meteor_shower_director')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.meteor_shower_director.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.meteor_shower_director.2" })])
            .addScore('nerves', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/celestial_body/meteor_shower_director')
            .tag('itemborders:gold')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:key_pressed')
    }

    {// 处理器
        // 处理器
        registerOrgan(new Organ('mrqx_extra_pack:cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.cpu.1" })])
            .addScore('nerves', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')

        // 魔能速充处理器
        registerOrgan(new Organ('mrqx_extra_pack:magic_fast_charging_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_fast_charging_cpu.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_fast_charging_cpu.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/magic_fast_charging_cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:magic')
            .tag('kubejs:active_only')

        // 魔能过载处理器
        registerOrgan(new Organ('mrqx_extra_pack:magic_overload_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_overload_cpu.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_overload_cpu.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/magic_overload_cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:magic')
            .tag('kubejs:active_only')

        // 魔能“玻璃大炮”处理器
        registerOrgan(new Organ('mrqx_extra_pack:magic_glass_cannon_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_glass_cannon_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_glass_cannon_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_glass_cannon_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.magic_glass_cannon_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/magic_glass_cannon_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:magic')
            .tag('kubejs:active_only')

        // 玫瑰“再度绽放”处理器
        registerOrgan(new Organ('mrqx_extra_pack:rose_second_bloom_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_second_bloom_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_second_bloom_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_second_bloom_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_second_bloom_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/rose_second_bloom_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:rose')
            .tag('kubejs:active_only')

        // ‌机械储能处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_storage_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_storage_cpu.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_storage_cpu.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_storage_cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:resource')
            .tag('kubejs:active_only')

        // ‌机械“午夜狂飙”处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_midnight_race_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_midnight_race_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_midnight_race_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_midnight_race_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_midnight_race_cpu.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_midnight_race_cpu.5" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_midnight_race_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:active_only')
            .tag('kubejs:player_tick_only')

        // ‌机械“熔核之心”处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_burn_flare_heart_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_burn_flare_heart_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_burn_flare_heart_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_burn_flare_heart_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_burn_flare_heart_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_burn_flare_heart_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:active_only')

        // ‌机械“核能之心”处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_nuclear_heart_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_nuclear_heart_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_nuclear_heart_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_nuclear_heart_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_nuclear_heart_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_nuclear_heart_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:mrqx_nuclear')
            .tag('kubejs:active_only')

        // ‌机械闪避处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_dodge_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_dodge_cpu.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_dodge_cpu.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_dodge_cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:active_only')

        // ‌机械格挡处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_parry_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_parry_cpu.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_parry_cpu.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_parry_cpu')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:active_only')

        // ‌机械“会心一击”处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_critical_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_critical_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_critical_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_critical_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_critical_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_critical_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:active_only')

        // ‌机械“挖矿”处理器
        registerOrgan(new Organ('mrqx_extra_pack:machine_mine_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_mine_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_mine_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_mine_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.machine_mine_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/machine_mine_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:break_only')
            .tag('kubejs:resource')
            .tag('kubejs:active_only')

        // 玫瑰“花语”处理器
        registerOrgan(new Organ('mrqx_extra_pack:rose_language_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_language_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_language_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_language_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rose_language_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/rose_language_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:rose')
            .tag('kubejs:active_only')

        // ‌深海“灯塔”处理器
        registerOrgan(new Organ('mrqx_extra_pack:seaborn_beacon_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.seaborn_beacon_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.seaborn_beacon_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.seaborn_beacon_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.seaborn_beacon_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/seaborn_beacon_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active_only')

        // 天体“占星”处理器
        registerOrgan(new Organ('mrqx_extra_pack:celestial_body_astrology_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.celestial_body_astrology_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.celestial_body_astrology_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.celestial_body_astrology_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.celestial_body_astrology_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/celestial_body_astrology_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:mrqx_celestial_body')
            .tag('kubejs:active_only')

        // 蒸汽“动力”处理器
        registerOrgan(new Organ('mrqx_extra_pack:steam_power_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_cpu.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_cpu.4" })])
            .addScore('nerves', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/steam_power_cpu')
            .tag('itemborders:gold')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:active_only')

        // “降神”处理器
        registerOrgan(new Organ('mrqx_extra_pack:seance_cpu')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.seance_cpu.1" })])
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.seance_cpu.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.seance_cpu.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.seance_cpu.4" })])
            .addScore('nerves', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/cpu/seance_cpu')
            .tag('itemborders:diamond')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_cpu')
            .tag('kubejs:legends')
            .tag('kubejs:key_pressed')
    }

    {// 反物质器官
        registerOrgan(new Organ('mrqx_extra_pack:lung_antimatter').addScore('breath_recovery', -6).addScore('breath_capacity', -6).addScore('endurance', -6).addScore('endurance', -6).addScore('water_breath', -1).addScore('forceful_spit', -1).addScore('dragon_breath', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/lung_antimatter').tag('itemborders:iron').tag('kubejs:lung').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:muscle_antimatter').addScore('strength', -6).addScore('speed', -6).addScore('swim_speed', -1).addScore('leaping', -1).addScore('launching', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/muscle_antimatter').tag('itemborders:iron').tag('kubejs:muscle').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:intestine_antimatter').addScore('nutrition', -6).addScore('rotgut', -1).addScore('herbivorous_nutrition', -1).addScore('carnivorous_nutrition', -1).addScore('crystalsynthesis', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/intestine_antimatter').tag('itemborders:iron').tag('kubejs:intestine').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:rib_antimatter').addScore('defense', -6).addScore('impact_resistant', -1).addScore('furnace_powered', -1).addScore('iron_repair', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/rib_antimatter').tag('itemborders:iron').tag('kubejs:rib').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:spine_antimatter').addScore('defense', -3).addScore('nerves', -6).addScore('withered', -1).addScore('ghastly', -1).addScore('pyromancy', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/spine_antimatter').tag('itemborders:iron').tag('kubejs:spine').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:spleen_antimatter').addScore('metabolism', -6).addScore('venomous', -1).addScore('silk', -1).addScore('buoyant', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/spleen_antimatter').tag('itemborders:iron').tag('kubejs:spleen').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:stomach_antimatter').addScore('digestion', -6).addScore('herbivorous_digestion', -1).addScore('carnivorous_digestion', -1).addScore('rot_digestion', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/stomach_antimatter').tag('itemborders:iron').tag('kubejs:stomach').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:kidney_antimatter').addScore('filtration', -6).addScore('buff_purging', -1).addScore('glowing', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/kidney_antimatter').tag('itemborders:iron').tag('kubejs:kidney').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:liver_antimatter').addScore('detoxification', -6).addScore('fire_resistant', -1).addScore('shulker_bullets', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/liver_antimatter').tag('itemborders:iron').tag('kubejs:liver').tag('kubejs:mrqx_antimatter')
        registerOrgan(new Organ('mrqx_extra_pack:appendix_antimatter').addScore('luck', -6).addScore('arrow_dodging', -1).addScore('dragon_bombs', -1).addScore('creepy', -1).addScore('explosive', -1).build()).texture('mrqx_extra_pack:item/organs/antimatter/appendix_antimatter').tag('itemborders:iron').tag('kubejs:appendix').tag('kubejs:mrqx_antimatter')

        // 反物质心脏
        registerOrgan(new Organ('mrqx_extra_pack:heart_antimatter')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_antimatter.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_antimatter.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_antimatter.3" })])
            .addScore('health', -6)
            .addScore('photosynthesis', -1)
            .addScore('knockback_resistant', -1)
            .addScore('ease_of_access', -1)
            .build())
            .texture('mrqx_extra_pack:item/organs/antimatter/heart_antimatter')
            .tag('itemborders:iron')
            .tag('kubejs:heart')
            .tag('kubejs:mrqx_antimatter')
            .tag('kubejs:active')
    }

    {// 深海器官
        // “涌潮悲歌”心脏
        registerOrgan(new Organ('mrqx_extra_pack:heart_tidal_elegy')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_tidal_elegy.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_tidal_elegy.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.heart_tidal_elegy.3" })])
            .addScore('health', 3)
            .addScore('strength', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/heart_tidal_elegy')
            .tag('itemborders:diamond')
            .tag('kubejs:heart')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active_only')

        // “潮涌，潮枯”肺脏
        registerOrgan(new Organ('mrqx_extra_pack:lung_the_tide_surges_the_tide_recedes')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_the_tide_surges_the_tide_recedes.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_the_tide_surges_the_tide_recedes.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_the_tide_surges_the_tide_recedes.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_the_tide_surges_the_tide_recedes.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.lung_the_tide_surges_the_tide_recedes.5" })])
            .addScore('breath_recovery', 1.5)
            .addScore('breath_capacity', 3)
            .addScore('endurance', 3)
            .addScore('water_breath', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/lung_the_tide_surges_the_tide_recedes')
            .tag('itemborders:diamond')
            .tag('kubejs:lung')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:damage_only')

        // “镜花水月”肾
        registerOrgan(new Organ('mrqx_extra_pack:kidney_moon_in_the_water')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.5" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.6" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kidney_moon_in_the_water.7" })])
            .addScore('filtration', 3)
            .addScore('endurance', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/kidney_moon_in_the_water')
            .tag('itemborders:diamond')
            .tag('kubejs:kidney')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:damage_only')
            .tag('kubejs:loot_entity_only')

        // “潮汐守望”肝
        registerOrgan(new Organ('mrqx_extra_pack:liver_tide_observation')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.liver_tide_observation.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.liver_tide_observation.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.liver_tide_observation.3" })])
            .addScore('detoxification', 3)
            .addScore('buff_purging', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/liver_tide_observation')
            .tag('itemborders:diamond')
            .tag('kubejs:liver')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active_only')

        // “集群狩猎”胰
        registerOrgan(new Organ('mrqx_extra_pack:pancreas_group_hunting')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.pancreas_group_hunting.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.pancreas_group_hunting.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.pancreas_group_hunting.3" })])
            .addScore('endurance', 3)
            .addScore('strength', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/pancreas_group_hunting')
            .tag('itemborders:diamond')
            .tag('kubejs:pancreas')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active_only')

        // “肉斩骨断”肌肉
        registerOrgan(new Organ('mrqx_extra_pack:muscle_bone_fracture')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.5" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.6" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.7" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.muscle_bone_fracture.8" })])
            .addScore('strength', 3)
            .addScore('speed', 3)
            .addScore('swim_speed', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/muscle_bone_fracture')
            .tag('itemborders:diamond')
            .tag('kubejs:muscle')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active')
            .tag('kubejs:player_tick')
            .tag('kubejs:bear_only')

        // “生存的重压”肋骨
        registerOrgan(new Organ('mrqx_extra_pack:rib_the_pressure_to_survive')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.5" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.6" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.rib_the_pressure_to_survive.7" })])
            .addScore('defense', 3)
            .addScore('impact_resistant', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/rib_the_pressure_to_survive')
            .tag('itemborders:diamond')
            .tag('kubejs:rib')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active')
            .tag('kubejs:damage_only')

        // “本性的坚守”脾
        registerOrgan(new Organ('mrqx_extra_pack:spleen_adhering_to_nature')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spleen_adhering_to_nature.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.spleen_adhering_to_nature.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.spleen_adhering_to_nature.3" })])
            .addScore('metabolism', 3)
            .addScore('health', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/spleen_adhering_to_nature')
            .tag('itemborders:diamond')
            .tag('kubejs:spleen')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:bear_only')

        // “深海掠食者”胃
        registerOrgan(new Organ('mrqx_extra_pack:stomach_abyssal_predator')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.stomach_abyssal_predator.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.stomach_abyssal_predator.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.stomach_abyssal_predator.3" })])
            .addScore('digestion', 3)
            .addScore('carnivorous_digestion', 1.5)
            .addScore('strength', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/stomach_abyssal_predator')
            .tag('itemborders:diamond')
            .tag('kubejs:stomach')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:damage_only')

        // “深海直觉”脊柱
        registerOrgan(new Organ('mrqx_extra_pack:spine_abyssal_intuition')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.spine_abyssal_intuition.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.spine_abyssal_intuition.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.spine_abyssal_intuition.3" })])
            .addScore('nerves', 3)
            .addScore('defense', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/spine_abyssal_intuition')
            .tag('itemborders:diamond')
            .tag('kubejs:spine')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:active_only')

        // “弱肉强食”肠
        registerOrgan(new Organ('mrqx_extra_pack:intestine_survival_of_the_fittest')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.intestine_survival_of_the_fittest.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.intestine_survival_of_the_fittest.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.intestine_survival_of_the_fittest.3" })])
            .addScore('nutrition', 3)
            .addScore('herbivorous_nutrition', 3)
            .addScore('strength', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/intestine_survival_of_the_fittest')
            .tag('itemborders:diamond')
            .tag('kubejs:intestine')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:damage_only')

        // “变异”阑尾
        registerOrgan(new Organ('mrqx_extra_pack:appendix_assimilation_mutation')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.4" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.5" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.6" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.7" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.appendix_assimilation_mutation.8" })])
            .addScore('luck', 3)
            .addScore('hydrophobia', -5)
            .build())
            .texture('mrqx_extra_pack:item/organs/seaborn/appendix_assimilation_mutation')
            .tag('itemborders:diamond')
            .tag('kubejs:appendix')
            .tag('kubejs:mrqx_seaborn')
            .tag('kubejs:damage_only')
            .tag('kubejs:active_only')
    }

    {// 传奇三件套
        // “道士十五狗”
        registerOrgan(new Organ('mrqx_extra_pack:taoist_fifteen_dogs')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.taoist_fifteen_dogs.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.taoist_fifteen_dogs.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.taoist_fifteen_dogs.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.taoist_fifteen_dogs.4" })])
            .addScore('health', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/taoist_fifteen_dogs')
            .tag('itemborders:gold')
            .tag('kubejs:legends')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:damage_only')

        // “法师控制强”
        registerOrgan(new Organ('mrqx_extra_pack:mage_control_strong')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mage_control_strong.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mage_control_strong.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mage_control_strong.3" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/mage_control_strong')
            .tag('itemborders:gold')
            .tag('kubejs:legends')
            .tag('kubejs:damage_only')
            .tag('kubejs:active_only')

        // “战士输出高”
        registerOrgan(new Organ('mrqx_extra_pack:warrior_output_high')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.warrior_output_high.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.warrior_output_high.2" })])
            .addScore('strength', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/warrior_output_high')
            .tag('itemborders:gold')
            .tag('kubejs:legends')
            .tag('kubejs:damage_only')
    }

    {// 幽匿套
        // 幽匿引痕体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_brandguider')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_brandguider.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_brandguider.2" })])
            .addScore('speed', 2.5)
            .addScore('nerves', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_brandguider')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:player_tick_only')

        // 幽匿之心
        registerOrgan(new Organ('mrqx_extra_pack:sculk_heart')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_heart.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_heart.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_heart.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_heart.4" })])
            .addScore('health', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_heart')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:player_tick_only')

        // 幽匿裂岩体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_rock_breaker')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_rock_breaker.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_rock_breaker.2" })])
            .addScore('strength', 2)
            .addScore('speed', 0.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_rock_breaker')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:muscle')
            .tag('kubejs:damage')

        // 幽匿沉积体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_depositer')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_depositer.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_depositer.2" })])
            .addScore('defense', 1.5)
            .addScore('impact_resistant', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_depositer')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:rib')
            .tag('kubejs:bear')

        // 幽匿寄染体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_infester')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_infester.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_infester.2" })])
            .addScore('strength', 0.5)
            .addScore('venomous', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_infester')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:damage')

        // 幽匿集养体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_collectors')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_collectors.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_collectors.2" })])
            .addScore('digestion', 1)
            .addScore('nutrition', 1)
            .addScore('metabolism', 1)
            .addScore('filtration', 1)
            .addScore('detoxification', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_collectors')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:player_tick_only')

        // 幽匿咆哮体
        registerOrgan(new Organ('mrqx_extra_pack:sculk_growler')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_growler.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_growler.2" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sculk_growler.3" })])
            .addScore('strength', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/sculk/sculk_growler')
            .tag('kubejs:mrqx_sculk')
            .tag('kubejs:key_pressed')
    }

    {// 国王套
        // 诸王的冠冕
        registerOrgan(new Organ('mrqx_extra_pack:kings_crown')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crown.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crown.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crown.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crown.4" })])
            .addScore('health', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_crown')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:active_only')

        // 国王的新枪
        registerOrgan(new Organ('mrqx_extra_pack:kings_new_lance')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_new_lance.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_new_lance.2" })])
            .addScore('strength', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_new_lance')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:player_tick_only')

        // 国王的护戒
        registerOrgan(new Organ('mrqx_extra_pack:kings_fellowship')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_fellowship.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_fellowship.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_fellowship.3" })])
            .addScore('defense', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_fellowship')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:active_only')

        // 国王的铠甲
        registerOrgan(new Organ('mrqx_extra_pack:kings_armor')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_armor.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_armor.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_armor.3" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_armor.4" })])
            .addScore('defense', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_armor')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:active_only')
            .tag('kubejs:damage_only')

        // 国王的圆饼
        registerOrgan(new Organ('mrqx_extra_pack:kings_buckler')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_buckler.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_buckler.2" })])
            .addScore('defense', 1)
            .addScore('impact_resistant', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_buckler')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:player_tick_only')

        // 国王的枝条
        registerOrgan(new Organ('mrqx_extra_pack:kings_staff')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_staff.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_staff.2" })])
            .addScore('nerves', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_staff')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:player_tick_only')

        // 国王的延伸
        registerOrgan(new Organ('mrqx_extra_pack:kings_extension')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_extension.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_extension.2" })])
            .addScore('nerves', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_extension')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:player_tick_only')

        // 国王的水晶
        registerOrgan(new Organ('mrqx_extra_pack:kings_crystal')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crystal.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.kings_crystal.2" })])
            .addScore('detoxification', 1)
            .addScore('filtration', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/king/kings_crystal')
            .tag('kubejs:mrqx_king')
            .tag('kubejs:loot_entity_only')
    }

    {//‌ 七原罪
        // ‌原罪·暴怒「萨迈尔」
        registerOrgan(new Organ('mrqx_extra_pack:sin_ira_samael')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_ira_samael.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_ira_samael.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_ira_samael.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_ira_samael.4" })])
            .addScore('strength', 4)
            .addScore('nerves', -1)
            .addScore('defense', -3)
            .addScore('launching', 7)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_ira_samael')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:damage_only')
            .tag('kubejs:bear_only')
            .tag('kubejs:active_only')

        // ‌‌原罪·懒惰「贝尔芬格」
        registerOrgan(new Organ('mrqx_extra_pack:sin_acedia_belphegor')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_acedia_belphegor.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_acedia_belphegor.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_acedia_belphegor.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_acedia_belphegor.4" })])
            .addScore('health', 7)
            .addScore('speed', -4)
            .addScore('defense', 4)
            .addScore('metabolism', -3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_acedia_belphegor')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:active_only')

        // ‌‌原罪·嫉妒「利维坦」
        registerOrgan(new Organ('mrqx_extra_pack:sin_invidia_leviathan')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_invidia_leviathan.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_invidia_leviathan.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_invidia_leviathan.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_invidia_leviathan.4" })])
            .addScore('filtration', -3)
            .addScore('breath_recovery', 7)
            .addScore('endurance', -4)
            .addScore('speed', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_invidia_leviathan')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:damage_only')
            .tag('kubejs:active_only')

        // 原罪·贪食「别西卜」
        registerOrgan(new Organ('mrqx_extra_pack:sin_gula_beelzebub')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_gula_beelzebub.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_gula_beelzebub.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_gula_beelzebub.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_gula_beelzebub.4" })])
            .addScore('health', -3)
            .addScore('digestion', 7)
            .addScore('nutrition', 4)
            .addScore('speed', -3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_gula_beelzebub')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:damage_only')
            .tag('kubejs:active_only')

        // ‌原罪·贪婪「玛门」
        registerOrgan(new Organ('mrqx_extra_pack:sin_avaritia_mammon')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_avaritia_mammon.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_avaritia_mammon.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_avaritia_mammon.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_avaritia_mammon.4" })])
            .addScore('luck', 7)
            .addScore('knockback_resistant', -3)
            .addScore('impact_resistant', -3)
            .addScore('fire_resistant', -2)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_avaritia_mammon')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:loot_entity_only')
            .tag('kubejs:loot_chest_only')
            .tag('kubejs:active_only')

        // ‌原罪·色欲「阿斯莫德」
        registerOrgan(new Organ('mrqx_extra_pack:sin_luxuria_asmodeus')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_luxuria_asmodeus.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_luxuria_asmodeus.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_luxuria_asmodeus.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_luxuria_asmodeus.4" })])
            .addScore('nerves', 7)
            .addScore('buff_purging', 3)
            .addScore('endurance', -4)
            .addScore('health', -3)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_luxuria_asmodeus')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:active_only')

        // ‌原罪·傲慢「路西法」
        registerOrgan(new Organ('mrqx_extra_pack:sin_superbia_lucifer')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_superbia_lucifer.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_superbia_lucifer.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_superbia_lucifer.3" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_superbia_lucifer.4" })])
            .addScore('crystalsynthesis', 3)
            .addScore('dragon_breath', 4)
            .addScore('defense', -5)
            .addScore('detoxification', 7)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_superbia_lucifer')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:bear_only')
            .tag('kubejs:active_only')

        // ‌原罪·罪源
        registerOrgan(new Organ('mrqx_extra_pack:origin_sin')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.origin_sin.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.origin_sin.2" })])
            .addScore('launching', 7)
            .addScore('health', 7)
            .addScore('breath_recovery', 7)
            .addScore('digestion', 7)
            .addScore('luck', 7)
            .addScore('nerves', 7)
            .addScore('detoxification', 7)
            .addScore('strength', 4)
            .addScore('speed', -4)
            .addScore('defense', -4)
            .addScore('metabolism', -3)
            .addScore('filtration', -3)
            .addScore('endurance', -8)
            .addScore('nutrition', 4)
            .addScore('knockback_resistant', -3)
            .addScore('impact_resistant', -3)
            .addScore('fire_resistant', -2)
            .addScore('buff_purging', 3)
            .addScore('crystalsynthesis', 3)
            .addScore('dragon_breath', 4)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/origin_sin')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:damage_only')
            .tag('kubejs:bear_only')
            .tag('kubejs:loot_entity_only')
            .tag('kubejs:loot_chest_only')
            .tag('kubejs:active_only')

        // ‌“罪与罚”
        registerOrgan(new Organ('mrqx_extra_pack:sin_and_judgement')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_and_judgement.1" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_and_judgement.2" })])
            .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.sin_and_judgement.3" })])
            .addScore('launching', 7)
            .addScore('health', 7)
            .addScore('breath_recovery', 7)
            .addScore('digestion', 7)
            .addScore('luck', 7)
            .addScore('nerves', 7)
            .addScore('detoxification', 7)
            .addScore('strength', 7)
            .addScore('speed', 7)
            .addScore('defense', 7)
            .addScore('metabolism', 7)
            .addScore('filtration', 7)
            .addScore('endurance', 7)
            .addScore('nutrition', 7)
            .addScore('knockback_resistant', 7)
            .addScore('impact_resistant', 7)
            .addScore('fire_resistant', 7)
            .addScore('buff_purging', 7)
            .addScore('crystalsynthesis', 7)
            .addScore('dragon_breath', 7)
            .build())
            .texture('mrqx_extra_pack:item/organs/seven_sins/sin_and_judgement')
            .tag('kubejs:mrqx_seven_sins')
            .tag('kubejs:player_tick_only')
            .tag('kubejs:damage_only')
            .tag('kubejs:bear_only')
            .tag('kubejs:loot_entity_only')
            .tag('kubejs:loot_chest_only')
            .tag('kubejs:active_only')
    }

    {// 蒸汽系列
        // ‌蒸汽动力机
        registerOrgan(new Organ('mrqx_extra_pack:steam_power_engine')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_engine.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_engine.2" })])
            .addScore('strength', 1)
            .addScore('defense', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_power_engine')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:rclick_only')

        // ‌蒸汽动力涡轮
        registerOrgan(new Organ('mrqx_extra_pack:steam_power_turbine')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_turbine.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_power_turbine.2" })])
            .addScore('strength', 1.5)
            .addScore('defense', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_power_turbine')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:rclick_only')

        // 蒸汽汽轮机
        registerOrgan(new Organ('mrqx_extra_pack:steam_turbine')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_turbine.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_turbine.2" })])
            .addScore('defense', 2)
            .addScore('endurance', 1)
            .addScore('fire_resistant', 2)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_turbine')
            .tag('itemborders:iron')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:player_tick_only')

        // 蒸汽引擎
        registerOrgan(new Organ('mrqx_extra_pack:steam_engine')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_engine.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_engine.2" })])
            .addScore('strength', 1)
            .addScore('defense', 1)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_engine')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')

        // 蒸汽甲胄
        registerOrgan(new Organ('mrqx_extra_pack:steam_armor')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_armor.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_armor.2" })])
            .addScore('defense', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_armor')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:bear')

        // 蒸汽刺剑
        registerOrgan(new Organ('mrqx_extra_pack:steam_rapier')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_rapier.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_rapier.2" })])
            .addScore('strength', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_rapier')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:damage_only')

        // ‌蒸汽液压杆
        registerOrgan(new Organ('mrqx_extra_pack:steam_hydraulic_rod')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_hydraulic_rod.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_hydraulic_rod.2" })])
            .addScore('strength', 3)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_hydraulic_rod')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:player_tick')

        // ‌蒸汽增压引擎
        registerOrgan(new Organ('mrqx_extra_pack:steam_supercharge_engine')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_supercharge_engine.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.steam_supercharge_engine.2" })])
            .addScore('strength', 1.5)
            .addScore('defense', 1.5)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/steam_supercharge_engine')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:key_pressed')

        // ‌“怒守”
        registerOrgan(new Organ('mrqx_extra_pack:furious_defense')
            .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.furious_defense.1" })])
            .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.furious_defense.2" })])
            .addScore('strength', 5)
            .build())
            .texture('mrqx_extra_pack:item/organs/steam/furious_defense')
            .tag('kubejs:machine')
            .tag('kubejs:mrqx_steam')
            .tag('kubejs:damage_only')
    }

    // 迷你末地水晶
    registerOrgan(new Organ('mrqx_extra_pack:mini_end_crystal')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mini_end_crystal.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mini_end_crystal.2" })])
        .addScore('explosive', 5)
        .build())
        .texture('mrqx_extra_pack:item/organs/mini_end_crystal')
        .tag('itemborders:iron')
        .tag('kubejs:player_tick')

    // 黄金天秤
    registerOrgan(new Organ('mrqx_extra_pack:golden_libra')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_libra.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_libra.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_libra.3" })])
        .addScore('defense', 1)
        .addScore('nerves', -1)
        .addScore('speed', -0.5)
        .build())
        .texture('mrqx_extra_pack:item/organs/golden_libra')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')

    // 冒险者证章
    registerOrgan(new Organ('mrqx_extra_pack:adventurers_badge')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.1" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.3" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.4" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.5" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.6" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.7" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.8" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.adventurers_badge.9" })])
        .addScore('strength', 2)
        .addScore('defense', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/adventurers_badge')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')
        .tag('kubejs:loot_entity_only')

    // 噩梦醇
    registerOrgan(new Organ('mrqx_extra_pack:marenol')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.marenol.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.marenol.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.marenol.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.marenol.4" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.marenol.5" })])
        .addScore('health', -1)
        .build())
        .texture('mrqx_extra_pack:item/organs/marenol')
        .tag('itemborders:gold')
        .tag('kubejs:damage')
        .tag('kubejs:active')

    // 活化巨瘤
    registerOrgan(new Organ('mrqx_extra_pack:activated_giant_tumor')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.activated_giant_tumor.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.activated_giant_tumor.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.activated_giant_tumor.3" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.activated_giant_tumor.4" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.activated_giant_tumor.5" })])
        .addScore('health', -8)
        .build())
        .texture('mrqx_extra_pack:item/organs/activated_giant_tumor')
        .tag('itemborders:gold')
        .tag('kubejs:infected')
        .tag('kubejs:active')

    // 风暴重锤
    registerOrgan(new Organ('mrqx_extra_pack:storm_mace')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.storm_mace.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.storm_mace.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.storm_mace.3" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.storm_mace.4" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.storm_mace.5" })])
        .addScore('strength', 2)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', -3)
        .build())
        .texture('mrqx_extra_pack:item/organs/storm_mace')
        .tag('itemborders:gold')
        .tag('kubejs:damage')

    // 梦魇之触
    registerOrgan(new Organ('mrqx_extra_pack:nightmare_tentacles')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.nightmare_tentacles.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.nightmare_tentacles.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.nightmare_tentacles.3" })])
        .addScore('defense', -2)
        .addScore('nerves', -1.5)
        .build())
        .texture('mrqx_extra_pack:item/organs/nightmare_tentacles')
        .tag('itemborders:gold')
        .tag('kubejs:bear')

    // 激活·冰龙宝玉
    registerOrgan(new Organ('mrqx_extra_pack:active_ice_dragon_bead')
        .addScore('crystalsynthesis', 3)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_ice_dragon_bead.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_ice_dragon_bead.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/active_ice_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:dragon')
        .tag('kubejs:mrqx_element_damage')
        .tag('kubejs:damage_only')

    // 激活·火龙宝玉
    registerOrgan(new Organ('mrqx_extra_pack:active_fire_dragon_bead')
        .addScore('crystalsynthesis', 3)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_fire_dragon_bead.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_fire_dragon_bead.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/active_fire_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:dragon')
        .tag('kubejs:mrqx_element_damage')
        .tag('kubejs:damage_only')

    // 激活·电龙宝玉
    registerOrgan(new Organ('mrqx_extra_pack:active_lightning_dragon_bead')
        .addScore('crystalsynthesis', 3)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_lightning_dragon_bead.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_lightning_dragon_bead.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/active_lightning_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:dragon')
        .tag('kubejs:mrqx_element_damage')
        .tag('kubejs:damage_only')

    // 激活·末影龙宝玉
    registerOrgan(new Organ('mrqx_extra_pack:active_ender_dragon_bead')
        .addScore('crystalsynthesis', 3)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', 1)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_ender_dragon_bead.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.active_ender_dragon_bead.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/active_ender_dragon_bead')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:dragon')
        .tag('kubejs:mrqx_element_damage')
        .tag('kubejs:damage_only')

    // 风暴之星碎片
    registerOrgan(new Organ('mrqx_extra_pack:withered_nether_star_shard')
        .addScore('crystalsynthesis', 3)
        .addScore('knockback_resistant', 2)
        .addScore('endurance', 1)
        .addScore('withered', 5)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.withered_nether_star_shard.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.withered_nether_star_shard.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/withered_nether_star_shard')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:mrqx_element_damage')
        .tag('kubejs:damage_only')

    // 压缩饼干
    registerOrgan(new Organ('mrqx_extra_pack:compressed_biscuit')
        .addScore('defense', 3)
        .addScore('speed', -0.5)
        .addScore('hydroallergenic', 0.5)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.compressed_biscuit.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.compressed_biscuit.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/compressed_biscuit')
        .food(food => { food.hunger(20).saturation(1) })
        .tag('itemborders:iron')
        .tag('kubejs:food')
        .tag('kubejs:eat_effect')

    // 黄金压缩饼干
    registerOrgan(new Organ('mrqx_extra_pack:golden_compressed_biscuit')
        .addScore('defense', 5)
        .addScore('speed', -1)
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_compressed_biscuit.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_compressed_biscuit.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_compressed_biscuit.3" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/golden_compressed_biscuit')
        .food(food => { food.hunger(50).saturation(2.5) })
        .tag('itemborders:gold')
        .tag('kubejs:food')
        .tag('kubejs:eat_effect')
        .tag('kubejs:eat_effect_only')

    // 恶性肿瘤
    registerOrgan(new Organ('mrqx_extra_pack:malignant_tumor')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.malignant_tumor.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.malignant_tumor.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.malignant_tumor.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.malignant_tumor.4" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/malignant_tumor')
        .food(food => {
            food.hunger(1).saturation(0.5)
            food.effect('minecraft:poison', 20 * 30, 3, 1)
            food.effect('minecraft:hunger', 20 * 30, 3, 1)
            food.alwaysEdible()
        })
        .tag('itemborders:gold')
        .tag('kubejs:player_tick')
        .tag('kubejs:infected')

    // 充能刀刃
    registerOrgan(new Organ('mrqx_extra_pack:charged_blade')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.charged_blade.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.charged_blade.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.charged_blade.3" })])
        .addScore('strength', 3)
        .build())
        .texture('mrqx_extra_pack:item/organs/charged_blade')
        .tag('itemborders:diamond')
        .tag('kubejs:damage_only')
        .tag('kubejs:bear_only')

    // 灵魂之翼
    registerOrgan(new Organ('mrqx_extra_pack:wing_of_soul')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.wing_of_soul.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.wing_of_soul.2" })])
        .addScore('speed', 2)
        .addScore('defense', -0.5)
        .build())
        .texture('mrqx_extra_pack:item/organs/wing_of_soul')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')

    // 永恒灵魂之翼
    registerOrgan(new Organ('mrqx_extra_pack:eternal_wing_of_soul')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.eternal_wing_of_soul.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.eternal_wing_of_soul.2" })])
        .addScore('speed', 3)
        .addScore('defense', 1)
        .build())
        .texture('mrqx_extra_pack:item/organs/eternal_wing_of_soul')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')

    // 指令施法核心
    registerOrgan(new Organ('mrqx_extra_pack:command_spell_core')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.command_spell_core.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.command_spell_core.2" })])
        .addScore('defense', 3)
        .build())
        .texture('mrqx_extra_pack:item/organs/command_spell_core')
        .tag('itemborders:diamond')
        .tag('kubejs:active_only')

    // 金酒之杯
    registerOrgan(new Organ('mrqx_extra_pack:golden_chalice')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_chalice.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_chalice.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.golden_chalice.3" })])
        .addScore('nerves', 3)
        .build())
        .texture('mrqx_extra_pack:item/organs/golden_chalice')
        .tag('itemborders:gold')
        .tag('kubejs:active_only')

    // 复激活药丸
    registerOrgan(new Organ('mrqx_extra_pack:re_active_pill')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.re_active_pill.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.re_active_pill.2" })])
        .addScore('health', -5)
        .build())
        .texture('mrqx_extra_pack:item/organs/re_active_pill')
        .tag('itemborders:diamond')
        .tag('kubejs:active_only')

    // 天师仪
    registerOrgan(new Organ('mrqx_extra_pack:tianshi_yi')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.tianshi_yi.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.tianshi_yi.2" })])
        .addScore('photosynthesis', 2)
        .addScore('detoxification', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/tianshi_yi')
        .tag('itemborders:diamond')
        .tag('kubejs:machine')
        .tag('kubejs:player_tick_only')

    // 长伸缩活塞臂
    registerOrgan(new Organ('mrqx_extra_pack:long_telescopic_piston_arm')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.long_telescopic_piston_arm.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.long_telescopic_piston_arm.2" })])
        .addScore('strength', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/long_telescopic_piston_arm')
        .tag('itemborders:diamond')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')

    // 长伸缩攻击臂
    registerOrgan(new Organ('mrqx_extra_pack:long_telescopic_attack_arm')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.long_telescopic_attack_arm.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.long_telescopic_attack_arm.2" })])
        .addScore('strength', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/long_telescopic_attack_arm')
        .tag('itemborders:diamond')
        .tag('kubejs:machine')
        .tag('kubejs:active_only')

    // ‌巧克力铸币机
    registerOrgan(new Organ('mrqx_extra_pack:chocolate_coinage_machine')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.chocolate_coinage_machine.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.chocolate_coinage_machine.2" })])
        .addScore('defense', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/chocolate_coinage_machine')
        .tag('itemborders:iron')
        .tag('kubejs:machine')
        .tag('kubejs:key_pressed')

    // ‌“记录者”
    registerOrgan(new Organ('mrqx_extra_pack:recorder')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.recorder.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.recorder.2" })])
        .addScore('nerves', -5)
        .build())
        .texture('mrqx_extra_pack:item/organs/recorder')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:damage_only')
        .tag('kubejs:loot_entity_only')

    // ‌复激活药丸·温和化
    registerOrgan(new Organ('mrqx_extra_pack:re_active_pill_moderation')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.re_active_pill_moderation.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.re_active_pill_moderation.2" })])
        .addScore('health', -2)
        .build())
        .texture('mrqx_extra_pack:item/organs/re_active_pill_moderation')
        .tag('itemborders:diamond')
        .tag('kubejs:active_only')

    // 扭曲变电箱
    // 由于本体漏洞，本器官延后实现
    // registerOrgan(new Organ('mrqx_extra_pack:warp_electrical_box')
    //     .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.warp_electrical_box.1" })])
    //     .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.warp_electrical_box.2" })])
    //     .addScore('health', -1)
    //     .build())
    //     .texture('mrqx_extra_pack:item/organs/warp_electrical_box')
    //     .tag('itemborders:diamond')
    //     .tag('kubejs:resource')
    //     .tag('kubejs:warp')
    //     .tag('kubejs:active_only');

    // 自动蜡护仪
    registerOrgan(new Organ('mrqx_extra_pack:automatic_wax_protector')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.automatic_wax_protector.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.automatic_wax_protector.2" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.automatic_wax_protector.3" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/automatic_wax_protector')
        .tag('itemborders:diamond')
        .tag('kubejs:active_only')

    // 墨染
    registerOrgan(new Organ('mrqx_extra_pack:mrqx0195')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.1" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.2" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.3" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.4" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.5" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.6" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.7" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.8" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.mrqx0195.9" })])
        .addScore('nerves', 0)
        .addScore('luck', 1)
        .addScore('speed', 9)
        .addScore('health', 5)
        .build())
        .texture('mrqx_extra_pack:item/organs/mrqx0195')
        .tag('itemborders:diamond')
        .tag('kubejs:mrqx_change_target_only')
        .tag('kubejs:damage_only')
        .tag('kubejs:bear_only')
        .tag('kubejs:loot_entity_only')
        .tag('kubejs:loot_chest_only')
        .tag('kubejs:active_only')

    // 世界框架
    registerOrgan(new Organ('mrqx_extra_pack:framework_of_world')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.framework_of_world.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.framework_of_world.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/framework_of_world')
        .maxDamage(60 * 60 * 24)
        .tag('itemborders:diamond')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:bear_only')
        .tag('kubejs:active_only')

    // 能量核心
    registerOrgan(new Organ('mrqx_extra_pack:energy_core')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.energy_core.1" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.energy_core.2" })])
        .build())
        .texture('mrqx_extra_pack:item/organs/energy_core')
        .tag('itemborders:diamond')
        .tag('kubejs:legends')
        .tag('kubejs:resource')
        .tag('kubejs:active_only')

    // 远古巫妖之心
    registerOrgan(new Organ('mrqx_extra_pack:ancient_lich_heart')
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.1" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.2" })])
        .addTextLines('default', [Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.4" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.5" })])
        .addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "mrqx_extra_pack.tooltips.ancient_lich_heart.6" })])
        .addScore('health', 2)
        .addScore('nerves', 2)
        .build())
        .texture('mrqx_extra_pack:item/organs/ancient_lich_heart')
        .tag('kubejs:heart')
        .tag('kubejs:active_only')
        .tag('kubejs:damage_only')
        .tag('kubejs:player_tick_only')
        .tag('kubejs:mrqx_change_target_only')
        .tag('kubejs:mrqx_obtain_effect_only')

    {// 装备
        {// 奥秘
            // 觉知巨镰
            event.create('mrqx_extra_pack:sentient_greatscythe', 'sword')
                .texture('mrqx_extra_pack:item/sentient_greatscythe')
                .maxStackSize(1)
                .maxDamage(999)
                .tag('itemborders:diamond')
                .attackDamageBaseline(20)
                .attackDamageBonus(29)
                .speed(-2.5)
                .speedBaseline(-2.5)
                .modifyAttribute('minecraft:generic.attack_damage', 'Weapon modifier', 2, 'multiply_total')
                .modifyAttribute('minecraft:generic.attack_speed', 'Weapon modifier', 2, 'multiply_total')
                .modifyAttribute('forge:attack_range', 'Weapon modifier', 2, 'multiply_total')

            // 死魂灵的余息
            event.create('mrqx_extra_pack:residual_breath_of_dead_soul')
                .texture('mrqx_extra_pack:item/residual_breath_of_dead_soul')
                .maxStackSize(1)
                .maxDamage(5 * 20 + 1)
                .tag('curios:trinkets')
                .tag('itemborders:diamond')
                .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                    .canEquip(() => true)
                    .curioTick((item, ctx) => {
                        if (ctx.entity().level.isClientSide()) return
                        global.mrqxResidualBreathOfDeadSoulTick(item, ctx)
                    })
                )

            // 护盾发生器
            event.create('mrqx_extra_pack:shield_generator')
                .texture('mrqx_extra_pack:item/shield_generator')
                .maxStackSize(1)
                .maxDamage(100)
                .tag('curios:trinkets')
                .tag('itemborders:diamond')
                .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                    .canEquip(() => true)
                    .curioTick((item, ctx) => {
                        if (ctx.entity().level.isClientSide()) return
                        global.mrqxShieldGeneratorTick(item, ctx)
                    })
                )

            // 贤者宝典
            event.create('mrqx_extra_pack:sages_book', 'irons_spells_js:spellbook')
                .setMaxSpellSlots(15)
                .tag('itemborders:diamond')
                .addDefaultAttribute('irons_spellbooks:spell_power', 'sagesBookSpellPower', 1, 'addition')
                .addDefaultAttribute('irons_spellbooks:cast_time_reduction', 'sagesBookCastTimeReduction', 1, 'addition')
                .addDefaultAttribute('irons_spellbooks:cooldown_reduction', 'sagesBookCooldownReduction', 1, 'addition')
                .addDefaultAttribute('irons_spellbooks:mana_regen', 'sagesBookManaRegen', 1, 'addition')
                .addDefaultAttribute('irons_spellbooks:max_mana', 'sagesBookMaxMana', 1, 'multiply_base')
                .addDefaultAttribute('irons_spellbooks:spell_resist', 'sagesBookSpellResist', 0.5, 'addition')
        }

        // 先进单片镜
        event.create('mrqx_extra_pack:advanced_eyeglass')
            .texture('mrqx_extra_pack:item/advanced_eyeglass')
            .maxStackSize(1)
            .tag('curios:head')
            .tag('itemborders:diamond')
            .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .onEquip((itemFrom, ctx, itemTo) => {
                    if (ctx.entity().level.isClientSide()) return
                    global.mrqxAdvancedArchivistEyeGlassOnEquip(itemFrom, ctx, itemTo)
                })
                .onUnequip((itemFrom, ctx, itemTo) => {
                    if (ctx.entity().level.isClientSide()) return
                    global.mrqxAdvancedArchivistEyeGlassOnUnequip(itemFrom, ctx, itemTo)
                })
                .curioTick((item, ctx) => {
                    if (ctx.entity().level.isClientSide()) return
                    global.mrqxAdvancedArchivistEyeGlassTick(item, ctx)
                }))

        // ‌无尽之力容器
        event.create('mrqx_extra_pack:infinity_force_container')
            .texture('mrqx_extra_pack:item/infinity_force_container')
            .maxStackSize(1)
            .tag('curios:charm')
            .tag('itemborders:diamond')
            .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .curioTick((item, ctx) => {
                    if (ctx.entity().level.isClientSide()) return
                    global.mrqxInfinityForceContainerTick(item, ctx)
                })
            )

        // ‌（Luna's联动） 堕乐园容器
        event.create('mrqx_extra_pack:fallen_paradise_container')
            .texture('mrqx_extra_pack:item/fallen_paradise_container')
            .maxStackSize(1)
            .tag('curios:charm')
            .tag('itemborders:diamond')
            .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .curioTick((item, ctx) => {
                    if (ctx.entity().level.isClientSide()) return
                    global.mrqxInfinityForceContainerTick(item, ctx)
                })
            )
    }

    {// 其他物品
        // 核反应燃料
        event.create('mrqx_extra_pack:uranium').texture('mrqx_extra_pack:item/uranium')
        event.create('mrqx_extra_pack:raw_uranium').texture('mrqx_extra_pack:item/raw_uranium')
        event.create('mrqx_extra_pack:nuclear_fuel').texture('mrqx_extra_pack:item/nuclear_fuel').tag('kubejs:mrqx_nuclear')

        // 便携式体检仪
        event.create('mrqx_extra_pack:portable_medical_checkup_device').texture('mrqx_extra_pack:item/portable_medical_checkup_device')
            .maxStackSize(1)
            .useAnimation('bow')
            .use((level, player, hand) => {
                return true
            })
            .useDuration(itemStack => 20)
            .finishUsing((itemstack, level, entity) => {
                if (level.isClientSide()) return itemstack
                let ray = entity.rayTrace(4, true)
                let target = entity
                if (ray.entity && ray.entity.isLiving()) {
                    target = ray.entity
                }
                target.getChestCavityInstance().getOrganScores().forEach((key, value) => {
                    entity.tell([LEADING_SYMBOL, Text.yellow(global.SCORE_MAP[key]).hover(global.SCORE_HOVER_MAP[key]), Text.white(' : '), Text.white(value)])
                })
                entity.addItemCooldown(itemstack, 20 * 15)
                return itemstack
            })

        // 肿瘤诱变剂
        event.create('mrqx_extra_pack:tumor_mutagen').texture('mrqx_extra_pack:item/tumor_mutagen')
            .maxStackSize(64)
            .useAnimation('drink')
            .use((level, player, hand) => {
                return true
            })
            .useDuration(itemStack => 20)
            .food(food => {
                food.hunger(1).saturation(0.5)
                food.effect('minecraft:poison', 20 * 30, 3, 1)
                food.effect('minecraft:hunger', 20 * 30, 3, 1)
                food.alwaysEdible()
            })

        // 薄荷奶茶
        event.create('mrqx_extra_pack:mint_milk_tea').texture('mrqx_extra_pack:item/mint_milk_tea')
            .maxStackSize(64)
            .useAnimation('drink')
            .use((level, player, hand) => {
                return true
            })
            .useDuration(itemStack => 20)
            .food(food => {
                food.hunger(2).saturation(0.2)
                food.alwaysEdible()
            })
            .tag('kubejs:mrqx_element_damage')

        // 脆肚
        event.create('mrqx_extra_pack:crispy_belly').texture('mrqx_extra_pack:item/crispy_belly')
            .maxStackSize(64)
            .food(food => {
                food.hunger(20).saturation(1)
            })

        // 脆肚
        event.create('mrqx_extra_pack:pineapple_shrimp_fried_rice').texture('mrqx_extra_pack:item/pineapple_shrimp_fried_rice')
            .maxStackSize(64)
            .food(food => {
                food.hunger(20).saturation(2.4)
            })

        // 散发着光亮的种子
        event.create('mrqx_extra_pack:shining_seed').texture('mrqx_extra_pack:item/shining_seed')

        // 风暴金属锭
        event.create('mrqx_extra_pack:storm_metal_ingot').texture('mrqx_extra_pack:item/storm_metal_ingot')

        // ‌破旧蒸汽引擎
        event.create('mrqx_extra_pack:worn_out_steam_engine').texture('mrqx_extra_pack:item/worn_out_steam_engine').tag('mrqx_extra_pack:gain_in_forge_ruin')

        // 基础未编码处理器
        event.create('mrqx_extra_pack:basic_uncoded_cpu').texture('mrqx_extra_pack:item/basic_uncoded_cpu').tag('mrqx_extra_pack:gain_in_forge_ruin')

        // ‌高级未编码处理器
        event.create('mrqx_extra_pack:advanced_uncoded_cpu').texture('mrqx_extra_pack:item/advanced_uncoded_cpu').tag('mrqx_extra_pack:gain_in_forge_ruin')

        // 人造矿簇
        event.create('mrqx_extra_pack:artificial_mineral_cluster').texture('mrqx_extra_pack:item/artificial_mineral_cluster')

        // 魔化人造矿簇
        event.create('mrqx_extra_pack:magic_artificial_mineral_cluster').texture('mrqx_extra_pack:item/magic_artificial_mineral_cluster')

        // 生铁锭
        // event.create('mrqx_extra_pack:pig_iron_ingot').texture('mrqx_extra_pack:item/pig_iron_ingot')

        // 日金锭
        // event.create('mrqx_extra_pack:sun_metal_ingot').texture('mrqx_extra_pack:item/sun_metal_ingot')

        // 龙金锭
        // event.create('mrqx_extra_pack:dragon_metal_ingot').texture('mrqx_extra_pack:item/dragon_metal_ingot')

        // 灵魂合金锭
        // event.create('mrqx_extra_pack:soul_metal_ingot').texture('mrqx_extra_pack:item/soul_metal_ingot')

        {// 奥秘
            // 奥秘·血肉
            event.create('mrqx_extra_pack:mystery_flesh_and_blood').texture('mrqx_extra_pack:item/mystery/mystery_flesh_and_blood').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·灵魂
            event.create('mrqx_extra_pack:mystery_soul').texture('mrqx_extra_pack:item/mystery/mystery_soul').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·机械
            event.create('mrqx_extra_pack:mystery_machine').texture('mrqx_extra_pack:item/mystery/mystery_machine').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·魔法
            event.create('mrqx_extra_pack:mystery_magic').texture('mrqx_extra_pack:item/mystery/mystery_magic').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·工艺
            event.create('mrqx_extra_pack:mystery_craftsmanship').texture('mrqx_extra_pack:item/mystery/mystery_craftsmanship').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·学者
            event.create('mrqx_extra_pack:mystery_scholar').texture('mrqx_extra_pack:item/mystery/mystery_scholar').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·自然
            event.create('mrqx_extra_pack:mystery_nature').texture('mrqx_extra_pack:item/mystery/mystery_nature').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·星辰
            event.create('mrqx_extra_pack:mystery_stars').texture('mrqx_extra_pack:item/mystery/mystery_stars').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·资源
            event.create('mrqx_extra_pack:mystery_resources').texture('mrqx_extra_pack:item/mystery/mystery_resources').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·食物
            event.create('mrqx_extra_pack:mystery_food').texture('mrqx_extra_pack:item/mystery/mystery_food').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·罪者
            event.create('mrqx_extra_pack:mystery_sinners').texture('mrqx_extra_pack:item/mystery/mystery_sinners').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·灾难
            event.create('mrqx_extra_pack:mystery_disasters').texture('mrqx_extra_pack:item/mystery/mystery_disasters').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·领主
            event.create('mrqx_extra_pack:mystery_lords').texture('mrqx_extra_pack:item/mystery/mystery_lords').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·从者
            event.create('mrqx_extra_pack:mystery_followers').texture('mrqx_extra_pack:item/mystery/mystery_followers').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·回忆
            event.create('mrqx_extra_pack:mystery_memories').texture('mrqx_extra_pack:item/mystery/mystery_memories').parentModel('mrqx_extra_pack:item/mystery_item')

            // 奥秘·未来
            event.create('mrqx_extra_pack:mystery_future').texture('mrqx_extra_pack:item/mystery/mystery_future').parentModel('mrqx_extra_pack:item/mystery_item')
        }

        // 未完成的物品
        event.create('mrqx_extra_pack:incomplete_storm_metal_ingot').texture('mrqx_extra_pack:item/storm_metal_ingot')
        event.create('mrqx_extra_pack:incomplete_fission_reactor').texture('mrqx_extra_pack:item/organs/nuclear/fission_reactor')
        event.create('mrqx_extra_pack:incomplete_nuclear_fuel').texture('mrqx_extra_pack:item/nuclear_fuel')
        event.create('mrqx_extra_pack:incomplete_compressed_biscuit').texture('mrqx_extra_pack:item/organs/compressed_biscuit')
        event.create('mrqx_extra_pack:incomplete_golden_compressed_biscuit').texture('mrqx_extra_pack:item/organs/golden_compressed_biscuit')
        event.create('mrqx_extra_pack:incomplete_command_spell_core').texture('kubejs:item/spell_book_models/command_spell_book')
        event.create('mrqx_extra_pack:incomplete_meteor_shower_director').texture('mrqx_extra_pack:item/organs/celestial_body/meteor_shower_director')
        event.create('mrqx_extra_pack:incomplete_cpu').texture('mrqx_extra_pack:item/organs/cpu/cpu')
        event.create('mrqx_extra_pack:incomplete_worn_out_steam_engine').texture('mrqx_extra_pack:item/worn_out_steam_engine')
        event.create('mrqx_extra_pack:incomplete_steam_power_engine').texture('mrqx_extra_pack:item/organs/steam/steam_power_engine')
        event.create('mrqx_extra_pack:incomplete_shield_generator').texture('mrqx_extra_pack:item/shield_generator')
    }
})