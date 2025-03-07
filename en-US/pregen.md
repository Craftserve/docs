World Pregeneration
=====================

Table of Contents
-----------

* [Basics](#basics)
* [Before We Start!](#before)
* [Bukkit, Spigot, and Paper](#bukkit)
* [Forge](#forge)
* [Sponge](#sponge)
* [Fabric](#fabric)

<a name="basics"><h2>Basics</h2></a>

Minecraft is a game with a randomly generated massive world - its boundaries reach up to ±30,000,000 in both length and width, and 0-255 in height. Generating such a large world would take hours (possibly days), even on the fastest home computers. This is why Mojang decided on **chunk generation** (clusters of 16x16x256 blocks) as players get closer to them.

While this has little impact in single-player, on a server with several players exploring the world, the chunk generator significantly **loads the CPU**, and consequently, **lowers the TPS**. To prevent this, it is enough to **pregenerate a world area that matches our needs** before starting the gameplay.

**A world size of 8,000x8,000 blocks should be more than enough for Survival with 20+ players.** With these parameters, assuming 20 players, each player has an average map segment consisting of 1,780x1,780 blocks - 12,500 chunks. Additionally, this area can be easily expanded in the future.

<a name="before"><h2>Before We Start!</h2></a>

1. The world generation process causes lag during its execution and takes a long time - up to 3 hours. Therefore, it’s a good idea to do this before opening the server.
2. The world can also be generated **on your home computer** and then uploaded to the server **via FTP**. This takes much less time. Simply follow the instructions for **[Forge](#forge)** or the tutorial from **[this video](https://www.youtube.com/watch?v=5yRnGpcIoS8)** (for version 1.13+). However, from experience, we know that for many people uploading the world to the server can be problematic, so this option is not recommended.
3. **Warning! Empty (without players) Craftserve servers go to sleep. During the world generation process, make sure to keep the server console open in the Craftserve panel - this will prevent it from sleeping.**

<a name="bukkit"><h2>Bukkit, Spigot, and Paper</h2></a>
### 1.14 and above
To generate the world, simply download and install the **[ChunkMaster](https://www.spigotmc.org/resources/chunkmaster.71351/)** plugin. Its usage is very simple (parameters in `<>` are mandatory, in `[]` optional):

* `/chm generate <world> <radius>` - sets the world border **centered on your character**, where `<world>` is the name of the world (usually `world`), and `<radius>` is the number of blocks generated in each direction.
* `/chm resume` - starts the world generation process (by default, the world doesn’t generate when players are on the server).

### Older versions
To generate the world, simply download and install the **[WorldBorder](https://www.spigotmc.org/resources/worldborder.60905/)** plugin. Its usage is very simple (parameters in `<>` are mandatory, in `[]` optional):

* `/wb set <radiusX> [radiusZ]` - sets the world border **centered on your character**, where `<radiusX>` is the radius in the X-axis, and `<radiusZ>` in the Z-axis - both **expressed in blocks**. If `radiusZ` is not provided, the value of `radiusX` will be used.
* `/wb shape <elliptic|rectangular>` - allows you to choose the border shape. `elliptic` is elliptical/round, `rectangular` is rectangular.
* `/wb fill [frequency]` - starts generating chunks with the default frequency of 20 attempts per second. For Grass servers, it should be reduced to 5. On Diamond servers, you can try a value of 100. **The lower the value, the less lag during world generation, but it will take longer.**
* `/wb fill confirm` - this command is needed to confirm the start of `/wb fill`.

### Ready-to-enter command sets:


| Grass              | Diamond             |
|--------------------|---------------------|
|`/wb set 1500`      |`/wb set 2500`       |
|`/wb fill 5`        |`/wb fill 40`        |
|`/wb fill confirm`  |`/wb fill confirm`   |

<a name="forge"><h2>Forge</h2></a>

Pregenerating a world on **Forge** servers is slightly more complicated because world-altering mods may not be compatible with each other.

### Versions 1.10 to 1.12.2

**If you already have [OpenTerrainGenerator](https://www.curseforge.com/minecraft/mc-mods/open-terrain-generator) installed on your server**, simply run the generation command:

`/otg pregen 150` - this will generate an area with a radius of 150 chunks, which translates to approximately 4800x4800 blocks.


**If you don’t have OTG installed**, a safer option is [**Chunk-Pregenerator**](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator):

`/pregen gen startradius circle 0 0 150` - generates a circular area with a radius of 150 chunks. If you prefer a square shape, replace `circle` with `square`.

*Both plugins installed on a Forge Minecraft client will add a graphical interface for easier usage.*

### Versions 1.6 to 1.7.10

These older versions only offer the **[Admin Command Toolbox](https://www.curseforge.com/minecraft/mc-mods/admin-commands-toolbox)** plugin, which lacks a graphical interface. You will also need to install **[Mobius Core](https://www.curseforge.com/minecraft/mc-mods/mobiuscore)** for proper operation.

To generate the world, use:

`/pregenspawn 150` - this will generate a square area of 300x300 chunks - 150 on each of the 4 sides from the spawn.

<a name="sponge"><h2>Sponge</h2></a>

On Sponge, you can use the equivalent of the Essentials plugin - **[Nucleus Plugin](https://ore.spongepowered.org/Nucleus/Nucleus)**, with detailed documentation available **[here](https://nucleuspowered.org/)**.

To generate the world, first set its border (which can be removed after generation) and start the process:

* `/world border set <world> <x> <z> <diameter>` - where `<world>` is the name of the world, and `<x>` and `<z>` are the coordinates of the border's center.

* `world border gen -r <world>` - starts generating new chunks.

<a name="fabric"><h2>Fabric</h2></a>

For Fabric, you can find this mod called Chunky: 
https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator

To generate a world at a distance of 1000 blocks from the center, use:
`chunky radius 1000` - sets the generator to 1000 blocks from 0x 0z.
`chunky start` - starts the generation.
You can obviously change the number to generate a larger area.

To change the center of generation, use `chunky center X Z` where you replace **X** and **Z** with coordinates in the world.
You can also specify which world to generate using `chunky world the_nether` (or `the_end` for The End, sometimes called The End dimension).

Finally, if you want to generate everything within the world border area, enter:
`worldborder center 0 0` - sets the world border center to x0 and z0.
`worldborder set 20000` - sets the world border size to 20,000x20,000, meaning 10,000 blocks from the center.
`chunky worldborder` - sets the generator to world border mode.
`chunky start` - starts the generation.

Be cautious with the number of blocks!
