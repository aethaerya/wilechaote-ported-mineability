ServerEvents.tags('block', event => {
    // rsgauges
    const items = {
        'arrow': [
            'target',
        ],
        'door': [
            'sensor_switch'
        ],
        'elevator': [
            'button'
        ],
        'glass': [
            'button',
            'contact_mat',
            'day_timer',
            'door_contact_mat',
            'entity_detector',
            'interval_timer',
            'linear_entity_detector',
            'rotary_switch',
            'small_button',
            'touch_button',
            'touch_switch',
            'vertical_bar_gauge',
        ],
        'industrial': [
            'alarm_lamp',
            'alarm_siren',
            'analog_angular_gauge',
            'analog_horizontal_gauge',
            'block_detector',
            'button',
            'comparator_switch',
            'contact_mat',
            'day_timer',
            'dimmer',
            'door_contact_mat',
            'double_pole_button',
            'entity_detector',
            'estop_switch',
            'fallthrough_detector',
            'fenced_button',
            'foot_button',
            'green_blinking_led',
            'green_led',
            'high_sensitive_trapdoor',
            'hopper_switch',
            'interval_timer',
            'knock_button',
            'knock_switch',
            'lever',
            'light_sensor',
            'lightning_sensor',
            'linear_entity_detector',
            'machine_switch',
            'pull_handle',
            'rain_sensor',
            'red_blinking_led',
            'red_led',
            'rotary_lever',
            'rotary_machine_switch',
            'shock_sensitive_contact_mat',
            'shock_sensitive_trapdoor',
            'small_digital_gauge',
            'small_lever',
            'switchlink_cased_pulse_receiver',
            'switchlink_cased_receiver',
            'switchlink_pulse_receiver',
            'switchlink_pulse_relay',
            'switchlink_receiver',
            'switchlink_receiver_analog',
            'switchlink_relay',
            'switchlink_relay_analog',
            'tube_gauge',
            'vertical_bar_gauge',
            'white_blinking_led',
            'white_led',
            'yellow_blinking_led',
            'yellow_led',
        ],
        'light': [
            'switch'
        ],
        'oldfancy': [
            'bistableswitch1',
            'bistableswitch2',
            'button',
            'small_button',
            'spring_reset_chain',
        ],
        'red': [
            'power_plant'
        ],
        'rustic': [
            'angular_lever',
            'button',
            'contact_plate',
            'door_contact_plate',
            'fallthrough_detector',
            'high_sensitive_trapdoor',
            'lever',
            'nail_button',
            'nail_lever',
            'semaphore',
            'shock_sensitive_plate',
            'shock_sensitive_trapdoor',
            'small_button',
            'spring_reset_chain',
            'two_hinge_lever'
        ],
        'sensitive': [
            'glass_block'
        ],
        'stained': [
            'sensitiveglass'
        ],
        // This is not a block
        // 'switchlink': [
            //     'pearl'
            // ],
        'valve': [
            'wheel_switch'
        ],
        'yellow': [
            'power_plant'
        ]
    }
    
    for (let p in items) {
        for (let i of items[p]) {
            console.info(`Attempting to add pickaxe mineability for item rsgauges:${p}_${i}`)
            event.add('minecraft:mineable/pickaxe', `rsgauges:${p}_${i}`)
        }
    }
})
