# wilechaote-ported-mineability
A quick KubeJS fix for [Waffle919185](https://www.curseforge.com/members/waffle919185/projects)'s 1.20.1 port of [wilechaote](https://www.curseforge.com/members/wilechaote/projects)'s [Gauges and Switches](https://www.curseforge.com/minecraft/mc-mods/gauges-and-switches-ported) & [Engineer's Decor](https://www.curseforge.com/minecraft/mc-mods/engineers-decor-ported) mods.
## Why is this fix needed?
As of rsgauges-1.2.21 and engineersdecor-1.3.30, there is a bug where the blocks are not 'mineable'. Upon breaking, items are not dropped despite already having loot tables. This script attempts to fix that by adding all blocks to the `minecraft:mineable/pickaxe` tag.

## Installation
1. Make sure you have [KubeJS](https://modrinth.com/mod/kubejs) installed for your respective Minecraft version.
2. Simply download the script for [Gauges & Switches](https://github.com/aethaerya/wilechaote-ported-mineability/blob/00b9ba003f388936aad900e00f79c39226329c1f/kubejs/server_scripts/tags_rsgauges.js) or [Engineer's Decor](https://github.com/aethaerya/wilechaote-ported-mineability/blob/00b9ba003f388936aad900e00f79c39226329c1f/kubejs/server_scripts/tags_engineersdecor.js) and drop it into `.minecraft/kubejs/server_scripts` on your instance.
