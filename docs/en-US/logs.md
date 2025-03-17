Crash Logs and Reports
=====================

Table of Contents
-----------------

* [Basics](#basics)
* [How to Interpret Logs](#interpretation)
* [Common Errors](#errors)

<a name="basics"><h2>Basics</h2></a>

Is your server failing to start, or is a newly uploaded plugin or mod not working? The first place you should check is the **/logs/** and **/crash-reports/** folders on your server:

![Logs and crash reports](./img/logi/logi.png)

Each file in the **/logs/** folder contains a full log of a single server session. The most important file is **latest.log** (**fml-server-latest.log** in some Forge versions) – it contains information from the latest server session. **Every time the server is started, this file is overwritten**, and the old log is archived into a **tar.gz** file named after the server's start date.

Crash reports can be found in the **crash-reports** folder – their names are timestamped with the date and time of the crash. The crash report contains a shortened version of the log along with details about the circumstances of the crash.

# REMEMBER!
**Send the *latest.log* file** before asking any questions about a crashed server or non-working plugin on our Discord.

<a name="interpretation"><h2>How to Interpret Logs</h2></a>

<h3>What are Logs?</h3>

A log is a chronologically ordered list of the most important events during a single server run. Each log entry is timestamped, making it easy to locate relevant events.
In the log file, you’ll find information such as the server's startup parameters, loading of each module or plugin, world loading, and even the population of mobs in each world.

The main feature of logs is their readability – well-constructed logs are meant to be understandable for an average server administrator, not a developer. Therefore, basic knowledge of English, combined with Google, is usually enough.

<h5>Example 1. Starting a Forge Server</h5>

Let’s assume we have a Forge server. Looking at the **latest.log** file, we will notice many lines written in simple English:

    [17:31:30] [Server thread/INFO] [FML]: MinecraftForge v14.23.5.2847 Initialized
    [17:31:30] [Server thread/INFO] [FML]: Starts to replace vanilla recipe ingredients with ore ingredients.
    [17:31:31] [Server thread/INFO] [FML]: Invalid recipe found with multiple oredict ingredients in the same ingredient...
    [17:31:31] [Server thread/INFO] [FML]: Replaced 1227 ore ingredients
    [17:31:31] [Server thread/INFO] [FML]: Config directory created successfully
    [17:31:31] [Server thread/INFO] [FML]: Searching /home/servers/684256/./mods for mods
    [17:31:32] [Server thread/INFO] [FML]: Forge Mod Loader has identified 4 mods to load
    [17:31:32] [Server thread/WARN] [FML]: Missing English translation for FML: assets/fml/lang/en_us.lang
    [17:31:33] [Server thread/INFO] [FML]: Attempting connection with missing mods [minecraft, mcp, FML, forge] at CLIENT
    [17:31:33] [Server thread/INFO] [FML]: Attempting connection with missing mods [minecraft, mcp, FML, forge] at SERVER
    [17:31:33] [Server thread/INFO] [FML]: Processing ObjectHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Found 1169 ObjectHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Identifying ItemStackHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Found 0 ItemStackHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Configured a dormant chunk cache size of 0

<h3>Keywords</h3>

When searching for the cause of issues, **keywords** preceding **each log entry** are very helpful. As shown in **Example 1**, each entry is preceded by tags like: `[17:31:33] [Server thread/INFO] [FML]`.

* `[17:31:33]` – the time the event occurred. Sometimes, the date is also included.
* `[FML]` – appears only in Forge server logs and represents the Forge Mod Loader.
* `[Server thread/INFO]` – the most important tag, where `Server thread` indicates the process, and `INFO` represents **the type of log entry**.

**Knowing the types of entries makes it easy to identify the problem!**
* `INFO` – an informational entry, usually indicating that an action completed successfully. In most cases, we can skip **INFO** lines while troubleshooting.
* `WARN` – a warning. Typically appears when the server encounters an exception but can continue to run (see **Example 2** – AuthMe - protectInventory).
* `ERROR` – an error. The server encountered an issue preventing it (or a plugin) from continuing to function (see **Examples 4 and 5**).

If the server isn't working as expected, the first thing you should do is open the **latest.log** file (without starting the server – **every restart overwrites latest.log**) and search (**CTRL + F**) for entries with `WARN` or `ERROR`.

<a name="errors"><h2>Common Errors and How to Recognize Them in Logs</h2></a>

<h5>Example 2. WARN – AuthMeReloaded and the Non-Working protectInventory</h5>

Let’s assume we’ve installed AuthMe, and the plugin works fine for registration, but one feature – protectInventory – isn’t functioning. As a result, characters' inventories aren't protected before logging in. If such a character dies, they lose their belongings (which shouldn’t happen).

Looking for entries with `WARN`, we find:

    [17:23:17] [Server thread/INFO]: [AuthMe] Enabling AuthMe v5.6.0-SNAPSHOT-b2325
    [17:23:18] [Server thread/INFO]: [AuthMe] SQLite Setup finished
    [17:23:18] [Server thread/INFO]: [AuthMe] No supported permissions system found! Permissions are disabled!
    [17:23:19] [Server thread/INFO]: [AuthMe] [LICENSE] This product includes GeoLite2 data created by MaxMind, available at https://www.maxmind.com
    [17:23:19] [Server thread/INFO]: [AuthMe] Essentials spawn file not found: '/home/servers/683508/plugins/Essentials/spawn.yml'
    [17:23:19] [Server thread/WARN]: [AuthMe] WARNING! The protectInventory feature requires ProtocolLib! Disabling it...

In the last line, marked with the `WARN` tag, we see that the protectInventory feature requires the ProtocolLib plugin to work. Simply installing ProtocolLib will keep the inventories of characters safe before logging in!

<h5>Example 3. WARN – AuthMe and the Server Failing to Start</h5>

We uploaded AuthMeReloaded to our server, but it won’t start. Searching for `WARN` we find:

    [10:52:08] [Server thread/INFO]: [AuthMe] Enabling AuthMe v5.6.0-beta1-b2226
    [10:52:09] [Server thread/INFO]: [AuthMe] SQLite Setup finished
    [10:52:09] [Server thread/INFO]: [AuthMe] Hooked into LuckPerms!
    [10:52:09] [Server thread/INFO]: [AuthMe] Hooked successfully into Essentials  
    [10:52:09] [Server thread/WARN]: [AuthMe] Aborting initialization of AuthMe: [InjectorReflectionException]: Could not invoke constructor of class 'class fr.xephi.authme.command.CommandHandler'
    [10:52:09] [Server thread/WARN]: [AuthMe] THE SERVER IS GOING TO SHUT DOWN AS DEFINED IN THE CONFIGURATION!

The second-to-last line roughly explains the problem. AuthMe couldn’t invoke the constructor (initializing method) of the object handling commands, so further plugin loading was impossible (or pointless).

The last line tells us that in order to protect the server from griefers, AuthMe simply shut itself down as it couldn’t handle registration and login.

Since this was a developer’s mistake, simply installing a newer version of AuthMeReloaded will resolve the issue.

<h5>Example 4. ERROR – Unconfigured Plugin</h5>

We installed the LogBlock plugin on our server to better protect our square world from malicious players. Unfortunately, the plugin isn’t loading, and the `/plugins` command shows it in red.

Searching for `ERROR`, we find:

    [22:50:03] [Server thread/INFO]: [LogBlock] Enabling LogBlock v1.14.1-SNAPSHOT (build #65)
    [22:50:03] [Server thread/INFO]: [LogBlock] Connecting to username@jdbc:mysql://localhost:3306/minecraft...
    [22:50:03] [Server thread/INFO]: LogBlock-Connection-Pool - Starting...
    [22:50:04] [Server thread/WARN]: **LogBlock could not load because no valid database configuration found!**
    [22:50:04] [Server thread/INFO]: [LogBlock] Disabling LogBlock v1.14.1-SNAPSHOT (build #65)

In the log, there’s a `WARN` entry indicating that LogBlock didn’t load because it couldn’t find a database configuration file (perhaps **mysql.properties** was missing from the **/plugins/LogBlock/** directory).
This can be fixed by editing the plugin's configuration file or reading the documentation.

<h5>Example 5. ERROR – Mod Incompatibility</h5>

We were playing on version 1.14.4 for a while, but due to heavy lag, we switched to version 1.12.2, but now the server won't start. In the logs, we find:

    [17:31:36] [Server thread/INFO] [net.minecraft.server.MinecraftServer]: Preparing start region for level 0
    [17:31:36] [Server thread/WARN] [net.minecraft.world.chunk.Chunk]: Could not set level chunk heightmap, array length is 0 instead of 256
    [17:31:36] [Server thread/ERROR] [net.minecraft.server.MinecraftServer]: Encountered an unexpected exception
    java.lang.IllegalArgumentException: ChunkNibbleArrays should be 2048 bytes not: 0
    	at net.minecraft.world.chunk.NibbleArray.<init>(SourceFile:16) ~[axs.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.func_75823_a(AnvilChunkLoader.java:450) ~[aye.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.checkedReadChunkFromNBT__Async(AnvilChunkLoader.java:129) ~[aye.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.loadChunk__Async(AnvilChunkLoader.java:93) ~[aye.class:?]
    	at net.minecraftforge.common.chunkio.ChunkIOProvider.run(ChunkIOProvider.java:70) ~[ChunkIOProvider.class:?]
    	at net.minecraftforge.common.chunkio.ChunkIOExecutor.syncChunkLoad(ChunkIOExecutor.java:92) ~[ChunkIOExecutor.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.loadChunk(ChunkProviderServer.java:118) ~[on.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.func_186028_c(ChunkProviderServer.java:89) ~[on.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.func_186025_d(ChunkProviderServer.java:135) ~[on.class:?]
    	at net.minecraft.server.MinecraftServer.func_71222_d(MinecraftServer.java:344) ~[MinecraftServer.class:?]
    	at net.minecraft.server.MinecraftServer.func_71247_a(MinecraftServer.java:314) ~[MinecraftServer.class:?]
    	at net.minecraft.server.dedicated.DedicatedServer.func_71197_b(DedicatedServer.java:270) ~[nz.class:?]
    	at net.minecraft.server.MinecraftServer.run(MinecraftServer.java:486) [MinecraftServer.class:?]
    	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_201]

This time, the entry includes a fragment of a Java stacktrace. We can see that expressions like `world.chunk`, `AnvilChunkLoader`, `ChunkProviderServer`, etc., are repeated, which suggests that our world map is corrupted.

In our case, however, we forgot to remove the map from version 1.14.4. It contains blocks that do not exist in 1.12.2, causing the server to treat it as corrupted. Simply removing the old world will allow the server to start without any issues.

<h5>Example 6. ERROR - Unsatisfied Dependencies</h5>

We uploaded a plugin to the server, but it doesn't want to load. In the logs, we find:

    [19:23:19] [Server thread/ERROR]: Could not load 'plugins/Modifyworld.jar' in folder 'plugins'
    org.bukkit.plugin.UnknownDependencyException: PermissionsEx

`UnknownDependencyException` means that our Modifyworld plugin requires PermissionsEx to work properly. After installing it, the plugin loads without errors.

<h3>Conclusion</h3>

As we saw in the examples, troubleshooting issues with logs is not difficult. All you need is a basic knowledge of English, and if we have a problem, it is almost certain that someone else has already faced it, and **by copying the error line into Google**, we can find the solution. If you encounter difficulties, feel free to share the **latest.log** file on the **Craftserve** Discord.
