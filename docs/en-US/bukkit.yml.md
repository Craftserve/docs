# bukkit.yml - Guide

The `bukkit.yml` file is one of the configuration files for the Bukkit, CraftBukkit, Spigot, and Paper engines. Many people overlook this file, but it contains several useful settings that can improve server performance or alter its behavior. The file consists of several sections, each containing specific settings for the engine. Unfortunately, depending on the version of the server and the engine, settings may appear in different orders, and some may need to be manually added if you want to change them.

## settings
This section handles general settings related to the server's operation.

### allow-end
This option controls whether the End is enabled on the server. If the End is disabled, players will not be able to enter the End dimension.

* Set to `false` to disable the End.
* Set to `true` to enable the End.
* The default value is **true**.

### warn-on-overload
This option controls whether a warning message appears in the server console, saying "_[WARNING] Can't keep up! Did the system time change, or is the server overloaded?_" when the server detects performance issues.

* Set to `false` to disable the overload warning.
* Set to `true` to enable the overload warning.
* The default value is **true**.

### permissions-file
This option specifies the filename used by the engine to handle permissions.

**This is not the file where you set permissions for players. You should not modify it, as it may break your server. To manage player ranks, use a plugin like [LuckPerms](https://www.spigotmc.org/resources/luckperms-an-advanced-permissions-plugin.28140/).**

* The default value is **permissions.yml**.

### update-folder
This option controls the folder name within the _plugins/_ directory from which the server will copy plugin files during a server restart.

You can place `.jar` plugin files in this folder if you want to install them without restarting the server. Just place them in this folder, and the server will load them when it is restarted or rebooted.

* The default value is **update**, which means the path for plugin uploads is _plugins/update/_.

### use-exact-login-location
This option controls how the server behaves when a player logs in. Normally, the game checks whether the location where the player logged out is safe for re-entry (e.g., it doesn't contain blocks that might trap or suffocate the player). If dangerous blocks are found, the player is moved higher to ensure they can safely re-enter.

* This option doesn't appear by default in the Spigot-generated _bukkit.yml_ file for version 1.14.4. If you want to change the default value, you'll need to manually add this option to the section. Be careful with the indentation!
* Set to `false` if you want the game to behave as usual.
* Set to `true` if you want the player to suffocate in blocks if their logout spot is obstructed.
* The default value is **false**.

### world-container
This option sets the directory where all world files are stored. If this option is absent, no special folder is used. If your server is hosted on Craftserve, you don't need to worry about this, as it's useful only in specific situations that would not occur on Craftserve. **If you change this value, the map preview on the Craftserve website may stop working, so it's better not to modify it.**

* This option doesn't appear by default in the Spigot-generated _bukkit.yml_ file for version 1.14.4. If you want to change the default value, you'll need to manually add this option to the section. Be careful with the indentation!

### plugin-profiling
This option controls whether the _/timings_ command should be available. Enabling it may cause a slight increase in server load but can provide useful information about plugins and their impact on server performance.

* Set to `false` to disable plugin profiling.
* Set to `true` to enable plugin profiling.
* The default value is **false**.

### connection-throttle
This option controls the number of milliseconds between a player's disconnection and their ability to reconnect. If a player attempts to reconnect before the required time has passed, they will be disconnected with the message _Connection throttled_.

* Setting very low values may be a bad idea because even a single player repeatedly connecting and disconnecting can significantly overload the server.
* The default value is **4000**.

### query-plugins
This option controls whether the server should display a list of plugins when queried (e.g., using the site https://dinnerbone.com/minecraft/tools/status/). If you want to hide the plugins on your server for any reason, disabling this option is a good idea.

* Set to `false` to disable showing plugins in the query.
* Set to `true` to enable showing plugins in the query.
* The default value is **true**.

### deprecated-verbose
This option controls whether the server should log warnings when a plugin attempts to use deprecated methods that should no longer be used. This is useful when developing plugins, but under normal circumstances, the default settings are sufficient. The deprecated method warning will alert you if the plugin you're using is outdated and might cause issues after updating the engine.

* Set to `false` to completely disable warnings.
* Set to `default` to enable warnings that the plugin developer hasn't muted.
* Set to `true` to enable all warnings.
* The default value is **default**.

### shutdown-message
This option controls the message that players will see when the server is shut down using the _/stop_ command.

* You can add colors to the message using the color code format as shown in this [example](https://static.planetminecraft.com/files/resource_media/screenshot/1807/example2-1518839184.png), but instead of the ampersand symbol `&`, use the section symbol `§`.
* The default value is **Server closed**.


## spawn-limits
This section controls the spawn limits for different types of creatures. These limits apply only to mobs spawning around players; mobs far away from players are not loaded and are not counted. Additionally, mobs spawned by mob spawners or commands are not subject to these limits and have their own independent limits. Lowering the limits can improve server performance.

### monsters
This option controls the spawn limit for monsters (skeletons, zombies, creepers, etc.) in the world.

* The default value is **70**.

### animals
This option controls the spawn limit for animals (cows, horses, cats, parrots, etc.) in the world.

* The default value is **15**.

### water-animals
This option controls the spawn limit for aquatic animals (squids, fish, etc.) in the world.

* The default value is **5**.

### ambient
This option controls the spawn limit for ambient creatures (bats, etc.) in the world.

* The default value is **15**.


## chunk-gc
This section controls settings related to the tool that cleans up server RAM from chunks that shouldn't be loaded but, for some reason, haven't been unloaded. While this issue is rare, enabling this option may help prevent memory wastage if your server consumes increasing amounts of memory for unknown reasons.

### period-in-ticks
This option controls the time the server will wait between checks for unused chunks in memory. The time is measured in ticks, with a well-performing server executing 20 ticks per second. This is a relatively heavy operation, so running it too frequently could unnecessarily load your server.

* Set to `0` to disable chunk garbage collection.
* The default value is **600**, meaning chunk garbage collection will run approximately every 30 seconds.

### load-threshold
This option controls the number of loaded chunks required to trigger chunk garbage collection. If the number of loaded chunks is lower than this value, chunk garbage collection will not start, even after the specified period has passed.

* This option doesn't appear by default in the Spigot-generated _bukkit.yml_ file for version 1.14.4. If you want to change the default value, you'll need to manually add this option to the section. Be careful with the indentation!
* Set to `0` to disable chunk garbage collection.
* The default value is **0**, meaning chunk garbage collection is disabled by default. Generally, there is no need to enable it.

## ticks-per
This section controls settings related to the frequency of various events in the game world. **A healthy server performs 20 ticks per second, so setting a time interval of 20 ticks means the event will occur every second!**

### animal-spawns
This option controls the number of ticks the server should wait between attempts to spawn animals (cows, horses, cats, parrots, etc.) in the world.

* Setting a value smaller than zero will use the default value of `400`.
* The default value is **400**.

### monster-spawns
This option controls the number of ticks the server should wait between attempts to spawn monsters (skeletons, zombies, creepers, etc.) in the world.

* Setting a value smaller than zero will use the default value of `1`.
* The default value is **1**.

### autosave
This option controls the number of ticks the server should wait between saving everything to disk.

**For servers on Craftserve, this setting won't change much because the panel will enforce disk saving at regular intervals. This setting will only control the frequency of saves!**

* Setting a value smaller than zero will use the default value of `0`.
* The default value is **6000**.

## aliases
This section is a remnant of an older way to define command aliases. These aliases are now stored in the `commands.yml` file.

## database
This section is used to configure database access details for plugins that need to use a database provided by the server engine. Unfortunately, very few plugins use this, so we won't cover it here.

## worlds
This section is used to configure the settings for worlds that are loaded by the engine by default. Since this can also be configured in the `server.properties` file, we will not discuss this section here.

###### Source: https://bukkit.gamepedia.com/Bukkit.yml
