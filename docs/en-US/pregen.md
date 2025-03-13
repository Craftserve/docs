World Pregeneration
=====================

Table of Contents
-----------------

* [Basics](#basics)
* [Before We Begin!](#before)
* [Bukkit, Spigot, and Paper](#bukkit)
* [Forge](#forge)
* [Sponge](#sponge)
* [Fabric](#fabric)

<a name="basics"><h2>Basics</h2></a>

Minecraft is a game with a procedurally generated, massive world - its boundaries extend up to ±30,000,000 in length and width, and from 0 to 255 in height. Generating such a large world would take many hours (possibly days), even on the fastest home computers. That's why Mojang decided on **generating chunks** (clusters of 16x16x256 blocks) as players approach them.

While this has little impact in single-player mode, on a server with several players exploring the world, the chunk generator can heavily **load the CPU**, resulting in a **TPS drop**. To prevent this, simply **pregenerate the world area to match your needs before starting the gameplay**.

**A map size of 8,000x8,000 blocks should be more than enough for Survival with 20+ players.** With these parameters, assuming 20 players, each player gets an average section of the map consisting of 1,780x1,780 blocks - 12,500 chunks. Additionally, this area can easily be expanded in the future.

<a name="before"><h2>Before We Begin!</h2></a>

1. The map generation process causes lag during its execution and takes a very long time - up to 3 hours. Therefore, it is best to do this before opening the server.
2. You can also **generate the map on your local computer** and then upload it to the server **via FTP**. This is much faster. Just follow the instructions for **[Forge](#forge)** or the tutorial from **[this video](https://www.youtube.com/watch?v=5yRnGpcIoS8)** (for versions 1.13+). However, from experience, we know that uploading the map to the server can be problematic for many people, so this option is not recommended.
3. **Warning! Empty (without players) Craftserve servers are put to sleep. To prevent this, keep the server console open in the Craftserve panel during the entire map generation process - this will prevent it from going idle.**

<a name="bukkit"><h2>Bukkit, Spigot, and Paper</h2></a>
### 1.14 and above
To perform the world generation process, simply download and install the **[ChunkMaster plugin](https://www.spigotmc.org/resources/chunkmaster.71351/)**. It is very easy to use (parameters in `<>` are mandatory, in `[]` optional):

* `/chm generate <world> <radius>` - sets the world boundary **centered on your character**, where `<world>` is the world name (usually `world`), and `<radius>` is the number of blocks generated in each direction.
* `/chm resume` - Starts the world generation process (by default, the world doesn't generate when players are on the server).

### Older versions
To perform the world generation process, simply download and install the **[WorldBorder plugin](https://www.spigotmc.org/resources/worldborder.60905/)**. It is very easy to use (parameters in `<>` are mandatory, in `[]` optional):

* `/wb set <radiusX> [radiusZ]` - sets the world boundary **centered on your character**, where `<radiusX>` is the radius on the X axis, and `<radiusZ>` on the Z axis - both **in blocks**. If `radiusZ` is not provided, the value of `radiusX` will be used.
* `/wb shape <elliptic|rectangular>` - allows you to choose the shape of the boundary. `elliptic` is elliptical/round, `rectangular` is rectangular.
* `/wb fill [frequency]` - starts generating chunks at the default frequency of 20 attempts per second. For Grass servers, it should be reduced to 5. On Diamond servers, you can try a value of 100. **The smaller the value, the less lag during world generation, but it will take longer.**
* `/wb fill confirm` - this command is required to confirm the start of `/wb fill`.

### Ready-to-use command sets:


| Grass              | Diamond             |
|--------------------|---------------------|
|`/wb set 1500`      |`/wb set 2500`       |
|`/wb fill 5 `       |`/wb fill 40`       |
|`/wb fill confirm`  |`/wb fill confirm`   |

<a name="forge"><h2>Forge</h2></a>

Pregenerating a map on **Forge** servers is a bit more complicated because world-altering mods may not be compatible with each other.

### Versions 1.10 to 1.12.2

**If your server already has [OpenTerrainGenerator](https://www.curseforge.com/minecraft/mc-mods/open-terrain-generator) installed**, simply run the generation with the command:

`/otg pregen 150` - this will generate an area with a radius of 150 chunks, which equals about 4800x4800 blocks.


**If you don't have OTG installed**, a safer option would be to use [**Chunk-Pregenerator**](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator):

`/pregen gen startradius circle 0 0 150` - this will generate a circular area with a radius of 150 chunks. If you prefer a square shape, replace `circle` with `square`.

*Both plugins installed on the Forge Minecraft client will add a graphical interface to help with their usage.*

### Versions 1.6 to 1.7.10

These older versions only offer the **[Admin Command Toolbox](https://www.curseforge.com/minecraft/mc-mods/admin-commands-toolbox)** plugin, which does not have a graphical interface. You must also install **[Mobius Core](https://www.curseforge.com/minecraft/mc-mods/mobiuscore)** for it to work properly.

To generate the world, use:

`/pregenspawn 150` - this will generate a square with dimensions of 300x300 chunks - 150 on each of the 4 sides from the spawn.

<a name="sponge"><h2>Sponge</h2></a>

On Sponge, you can use the equivalent of the Essentials plugin - **[Plugin Nucleus](https://ore.spongepowered.org/Nucleus/Nucleus)**, whose detailed documentation is available **[here](https://nucleuspowered.org/)**.

To generate the world, you must first set its boundary (which can be removed after generation) and start the process:

* `/world border set <world> <x> <z> <diameter>` - where `<world>` is the name of your world, and `<x>` and `<z>` are the coordinates of the center of the boundary.

* `world border gen -r <world>` - starts generating new chunks.

<a name="fabric"><h2>Fabric</h2></a>

For Fabric, you can use a mod called Chunky:  
https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator

To generate the world within a 1000-block radius from the center, use:
`chunky radius 1000` - sets the generator to 1000 blocks from 0x 0z.  
`chunky start` - starts the generation.
You can, of course, change the number to generate more area.

To change the center of generation, use `chunky center X Z`, replacing **X** and **Z** with the coordinates in the world.  
You can also set the world to generate by using `chunky world the_nether` (or `the_end` for The End, sometimes called The End dimension).

Finally, if you want to generate everything within the boundaries set by the world border, use:
`worldborder center 0 0` - sets the center of the world border to x0 and z0  
`worldborder set 20000` - sets the world border size to 20,000x20,000, which is 10,000 blocks from the center  
`chunky worldborder` - sets the generator to world border mode  
`chunky start` - starts the generation

Be cautious with the number of blocks!
