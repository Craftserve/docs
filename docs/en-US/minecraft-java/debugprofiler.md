Forge Debug Profiler and Its Interpretation
===============================================

Table of Contents
-----------
* [Basics](#basics)
* [How to Use the Debugger](#how-to-use-the-debugger)
* [Reading the Profiler](#reading)

## Basics
Minecraft Forge provides us with the `Debug Profiler`, which allows us to check the resource-heavy code.
This is especially useful for things like `TickEvent` or `Ticking TileEntities`.
It is particularly beneficial for modders, as well as server administrators, who want to identify the cause of lags.

<a name="how-to-use-the-debugger"><h2>How to Use the Profiler</h2></a>

The profiler is extremely easy to use:
- `/debug start` starts the profiler (from the console*, or directly in the game**)
- `/debug stop` stops the profiler and generates its report (from the console*, or directly in the game**)

**The longer the profiler is enabled, the more accurate the data will be. Since this is a modded server, it is recommended to run it for at least ten to fifteen minutes.**

It is important to continue doing what you normally do during profiling—walk around the world, etc. You can also teleport to a location where the lag occurs. **The profiler does not collect data for things that do not exist, such as `Entities` or `TileEntities`, so it is crucial to load the chunks where the lag happens.**

After profiling is completed, a file will be created in the `debug/` folder with a name following the pattern `profile-results-yyyy-mm-dd_hh.mi.ss.txt`, for example: `profile-results-2019-12-28_22.52.14.txt`.

<a name="reading"><h2>Reading the Profiler</h2></a>

The first lines of the report indicate the amount of time the profiler was running and how many ticks were completed during that time.

Below is an example report format. The more indented a field is (more tabs), the lower its position in the hierarchy.
```
[00] levels - 96.70%/96.70%
[01] |   <World Name> - 99.76%/96.47%
[02] |   |   tick - 99.31%/95.81%
[03] |   |   |   entities - 47.72%/45.72%
[04] |   |   |   |   regular - 98.32%/44.95%
[04] |   |   |   |   blockEntities - 0.90%/0.41%
[05] |   |   |   |   |   unspecified - 64.26%/0.26%
[05] |   |   |   |   |   minecraft:furnace - 33.35%/0.14%
[05] |   |   |   |   |   minecraft:chest - 2.39%/0.01%
```
A brief explanation:

| [02]                     | tick                  | 99.31%       | 95.81%       |
| :----------------------- | :---------------------- | :----------- | :----------- |
| Line number | Section name | Parent time percentage*** for the `event` | Total time percentage for the element. |


-------------------------
##### Based on: <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/"> this</a>
##### * commands in the console are entered without `/`
##### ** you must have operator permissions
##### *** parent is the element one level higher in the hierarchy (one tab less)
