ServerEvents.tags('block', event => {
    // Ported from CraftTweaker
    // Script link provided by MikeZilla95 via curseforge comment: https://pastebin.com/kVdww21F
    const items = [ 
        'engineersdecor:clinker_brick_block',
        'engineersdecor:clinker_brick_slab',
        'engineersdecor:clinker_brick_stairs',
        'engineersdecor:clinker_brick_stained_block',
        'engineersdecor:clinker_brick_stained_slab',
        'engineersdecor:clinker_brick_stained_stairs',
        'engineersdecor:clinker_brick_sastor_corner_block',
        'engineersdecor:clinker_brick_recessed',
        'engineersdecor:clinker_brick_vertically_slit',
        'engineersdecor:clinker_brick_vertical_slab_structured',
        'engineersdecor:slag_brick_block',
        'engineersdecor:slag_brick_slab',
        'engineersdecor:slag_brick_stairs',
        'engineersdecor:rebar_concrete',
        'engineersdecor:rebar_concrete_slab',
        'engineersdecor:rebar_concrete_stairs',
        'engineersdecor:halfslab_rebar_concrete',
        'engineersdecor:rebar_concrete_tile',
        'engineersdecor:rebar_concrete_tile_slab',
        'engineersdecor:rebar_concrete_tile_stairs',
        'engineersdecor:panzerglass_slab',
        'engineersdecor:dark_shingle_roof',
        'engineersdecor:dark_shingle_roof_metallized',
        'engineersdecor:dark_shingle_roof_skylight',
        'engineersdecor:dark_shingle_roof_chimneytrunk',
        'engineersdecor:dark_shingle_roof_wireconduit',
        'engineersdecor:dark_shingle_roof_chimney',
        'engineersdecor:dark_shingle_roof_block',
        'engineersdecor:dark_shingle_roof_slab',
        'engineersdecor:dark_shingle_roof_slabslice',
        'engineersdecor:metal_rung_ladder',
        'engineersdecor:metal_rung_steps',
        'engineersdecor:iron_hatch',
        'engineersdecor:iron_inset_light',
        'engineersdecor:iron_floor_edge_light',
        'engineersdecor:iron_ceiling_edge_light',
        'engineersdecor:iron_bulb_light',
        'engineersdecor:steel_table',
        'engineersdecor:steel_floor_grating',
        'engineersdecor:steel_framed_window',
        'engineersdecor:thin_steel_pole',
        'engineersdecor:thin_steel_pole_head',
        'engineersdecor:thick_steel_pole',
        'engineersdecor:thick_steel_pole_head',
        'engineersdecor:steel_double_t_support',
        'engineersdecor:steel_mesh_fence',
        'engineersdecor:steel_mesh_fence_gate',
        'engineersdecor:steel_railing',
        'engineersdecor:steel_catwalk',
        'engineersdecor:steel_catwalk_ta',
        'engineersdecor:steel_catwalk_stairs',
        'engineersdecor:small_lab_furnace',
        'engineersdecor:small_electrical_furnace',
        'engineersdecor:factory_dropper',
        'engineersdecor:factory_placer',
        'engineersdecor:small_block_breaker',
        'engineersdecor:factory_hopper',
        'engineersdecor:small_waste_incinerator',
        'engineersdecor:small_mineral_smelter',
        'engineersdecor:small_freezer',
        'engineersdecor:small_solar_panel',
        'engineersdecor:small_milking_machine',
        'engineersdecor:small_tree_cutter',
        'engineersdecor:straight_pipe_valve',
        'engineersdecor:straight_pipe_valve_redstone',
        'engineersdecor:straight_pipe_valve_redstone_analog',
        'engineersdecor:fluid_barrel',
        'engineersdecor:small_fluid_funnel'
    ]

    for (let i in items) {
        console.info(`Attempting to tag ${items[i]} with minecraft:mineable/pickaxe.`)
        event.add('minecraft:mineable/pickaxe', items[i])
    }
})