Forge Debug Profiler and its Interpretation
===============================================

Table of Contents
-----------------
* [Basics](#basics)
* [How to Use the Debugger](#how-to-use-the-debugger)
* [Reading the Profiler](#reading)

## Basics
Minecraft Forge provides us with the `Debug Profiler`, which allows us to check performance-intensive code.
This is particularly useful for things like `TickEvent` or `Ticking TileEntities`,
and it is especially helpful for modders as well as server administrators who want to identify the causes of lag.

<a name="how-to-use-the-debugger"><h2>How to Use the Profiler</h2></a>

The profiler is incredibly easy to use:
- `/debug start` enables the Profiler (from the console*, or directly in the game**)
- `/debug stop` stops the Profiler and generates its report (from the console*, or directly in the game**)

**The longer the Profiler is enabled, the more accurate the data it provides. Since this is a modded server, it is recommended to run it for at least ten to fifteen minutes.**

It is important to perform normal activities during profiling, such as walking around the world, etc. You can also teleport to a location where lag is occurring. **The Profiler does not collect data for entities or tile entities that are not present, so it is important to load the chunks where the lag occurs.**

After profiling, a file will be created in the `debug/` folder with a name following the pattern `profile-results-yyyy-mm-dd_hh.mi.ss.txt`, for example: `profile-results-2019-12-28_22.52.14.txt`.

<a name="reading"><h2>Reading the Profiler</h2></a>

The first lines of the report show the duration for which the profiler was running and how many ticks were executed during that time.

Below is an example of a report. The more indented a field (more tabs), the lower its level in the hierarchy.
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
Small explanation:

| [02]                     | tick                  | 99.31%       | 95.81%       |
| :----------------------- | :---------------------- | :----------- | :----------- |
| Line | Section Name | Parent's time percentage*** the `event` took | Total time taken by the element. |


-------------------------
##### Based on: <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/">this</a>
##### * commands are entered in the console without the `/`
##### ** you must have operator privileges
##### *** parent is the element one level up in the hierarchy (one less tab)
