# rsgauges-ported-mineability
A quick KubeJS fix for Waffle919185's 1.20.1 port of wilechaote's Gauges and Switches mod.
## Why is this fix needed?
As of rsgauges-1.2.21 (and possibly earlier versions), there is a bug where the blocks are not 'mineable'. Upon breaking, items are not dropped despite already having loot tables. This script attempts to fix that by adding all rsgauges blocks to the `minecraft:mineable/pickaxe` tag.

## Installation
1. Make sure you have [KubeJS](https://modrinth.com/mod/kubejs) installed for your respective Minecraft version.
2. Simply download [tags_mineable.js](https://github.com/aethaerya/rsgauges-ported-mineability/blob/main/kubejs/server_scripts/tags_mineable.js) and drop it into `.minecraft/kubejs/server_scripts` on your instance.
