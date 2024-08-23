# rsgauges-ported-mineability
A quick KubeJS fix for Waffle919185's 1.20.1 port of wilechaote's Gauges and Switches mod.
# Why is this fix needed?
As of rsgauges-1.2.21 (and possibly earlier versions), there is a bug where the blocks are not 'mineable'. Upon breaking, items are not dropped despite already having loot tables. This script attempts to fix that by adding all rsgauges blocks to the `mineacraft:mineable/pickaxe` tag.
