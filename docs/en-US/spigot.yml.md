# spigot.yml - Guide

The `spigot.yml` file is one of the configuration files for Spigot and Paper engines. Many users overlook it, but it contains several useful settings that can improve server performance or slightly change its behavior. The file is divided into several sections, each containing specific engine settings. Unfortunately, depending on the server version and engine, settings may appear in different orders, and some must be manually added if we wish to change them.

## Commands
This section handles settings related to commands executed by players and the console.

### tab-complete
This option defines how many letters from the command name must be typed to autocomplete it using the _TAB_ key.

* Enter `-1` to disable command autocompletion with the TAB key.
* The default value is **0**.

### send-namespaced
This option controls whether the server should suggest commands from a "namespace," typically the plugin name from which the command originates, e.g., `/essentials:tpa` for the `/tpa` command.

* To learn exactly what a namespace is, see this [article](https://minecraft.gamepedia.com/Namespaced_ID) (in English).
* Enter `false` to disable suggestions for commands with a namespace.
* Enter `true` to enable suggestions for commands with a namespace.
* The default value is **true**.

### silent-commandblock-console
This option controls whether the server should log information about commands executed by command blocks to the console.

* Enter `false` to disable logging of command block commands in the console.
* Enter `true` to enable logging of command block commands in the console.
* The default value is **false**.

### log
This option controls whether the server should log information about commands executed by players to the console.

* Enter `false` to disable logging of player commands in the console.
* Enter `true` to enable logging of player commands in the console.
* The default value is **true**.

### replace-commands
Some of the game engine's commands have been changed in Bukkit and Spigot to improve performance, but sometimes this means a slight simplification, potentially losing some functionality. This option controls which commands should revert to their standard versions.

* Enter `[]` to prevent any commands from being replaced.
* Enter `[setblock, summon]` to restore the _setblock_ and _summon_ commands to their original versions.
* The default value is **[setblock, summon, testforblock]**.

## Messages
This section controls messages that players may see in certain situations. It extends the messages available in the `bukkit.yml` file.

### whitelist
This option controls the message a player will see when trying to log into the server but isn't on the whitelist when it's enabled.

* The default value is **You are not whitelisted on this server!**.

### unknown-command
This option controls the message a player will see when typing a command that is unavailable on the server.

* The default value is **Unknown command. Type "help" for help.**.

### server-full
This option controls the message a player will see when trying to log into the server while it's full.

* The default value is **The server is full!**.

### outdated-client
This option controls the message a player will see when attempting to join the server but has an older version of the game than the server supports.

* The `{0}` in the text will automatically be replaced with the version of the game supported by the server.
* The default value is **Outdated client! Please use {0}**.

### outdated-server
This option controls the message a player will see when attempting to join the server but has a newer version of the game than the server supports.

* The `{0}` in the text will automatically be replaced with the version of the game supported by the server.
* The default value is **Outdated server! I'm still on {0}**.

### restart
This option controls the message all online players will see when the server restarts via the `/restart` command.

* The default value is **Server is restarting**.

## Stats
This section controls settings related to player statistics and achievements (before Minecraft 1.12).

### disable-saving
This option controls whether the server should save player statistics and achievements (before Minecraft 1.12).

* Enter `false` to save statistics.
* Enter `true` to disable saving statistics.

### forced-stats
This option controls which statistics and achievements (before Minecraft 1.12) should be forced for players by the server.

* Enter `{}` to force no statistics.
* Enter 
    ```yml
    forced-stats:
    achievement.openInventory: 1
    ```
    to immediately complete the `open inventory` achievement for all players.
* The default value is **{}**.

## Advancements
This section controls settings related to player advancements and their storage by the server.

### disable-saving
This option controls whether the server should save player advancements.

* Enter `false` to prevent advancements from being saved.
* Enter `true` to save advancements.

### disabled
This option controls which advancements should be disabled on the server. Disabled advancements will not appear in the advancements menu. If you block an advancement that is required by another unblocked advancement, server console errors will appear, and advancements may not work correctly. Make sure to block all dependent advancements.

* Enter `[]` to disable no advancements.
* Enter `- '*'` to block all standard advancements.
* The default value is **[]**.

## World Settings
This section controls settings for specific worlds loaded on the server. By default, it contains the `default` subsection, which stores default settings for worlds that do not have additional settings defined in this section.

* To create settings for a specific world, copy and paste the content from the spoiler below and replace `WORLDNAME` with the name of the folder where the world files are located for the world you want to change settings for.

    <details>
    <summary>Click here to expand the list</summary>

    ```yml
  WORLDNAME:
    arrow-despawn-rate: 1200
    dragon-death-sound-radius: 0
    enable-zombie-pigmen-portal-spawns: true
    entity-activation-range:
      animals: 32
      misc: 16
      monsters: 32
      raiders: 48
      tick-inactive-villagers: true
    entity-tracking-range:
      animals: 48
      misc: 32
      monsters: 48
      other: 64
      players: 48
    growth:
      bamboo-modifier: 100
      beetroot-modifier: 100
      cactus-modifier: 100
      cane-modifier: 100
      carrot-modifier: 100
      cocoa-modifier: 100
      kelp-modifier: 100
      melon-modifier: 100
      mushroom-modifier: 100
      netherwart-modifier: 100
      potato-modifier: 100
      pumpkin-modifier: 100
      sapling-modifier: 100
      sweetberry-modifier: 100
      vine-modifier: 100
      wheat-modifier: 100
    hanging-tick-frequency: 100
    hopper-amount: 1
    hunger:
      combat-exhaustion: 0.1
      jump-sprint-exhaustion: 0.2
      jump-walk-exhaustion: 0.05
      other-multiplier: 0.0
      regen-exhaustion: 6.0
      sprint-multiplier: 0.1
      swim-multiplier: 0.01
    item-despawn-rate: 6000
    max-tick-time:
      entity: 50
      tile: 50
    max-tnt-per-tick: 100
    merge-radius:
      exp: 3.0
      item: 2.5
    mob-spawn-range: 6
    nerf-spawner-mobs: false
    seed-desert: 14357617
    seed-igloo: 14357618
    seed-jungle: 14357619
    seed-monument: 10387313
    seed-ocean: 14357621
    seed-outpost: 165745296
    seed-shipwreck: 165745295
    seed-slime: 987234911
    seed-swamp: 14357620
    seed-village: 10387312
    squid-spawn-range:
      min: 45.0
    ticks-per:
      hopper-check: 1
      hopper-transfer: 8
    verbose: true
    view-distance: default
    wither-spawn-sound-radius: 0
    zombie-aggressive-towards-villager: true

    ```
    </details>

### verbose
This option controls whether the server should log information about loaded world settings to the console and logs when starting.

* Enter `false` to disable logging world information.
* Enter `true` to enable logging world information.
* The default value is **true**.

### view-distance
This option controls the distance, in chunks (16x16 block areas), from the player that the world will be sent to the player by the server. The larger the value, the more a player can see without needing to explore the map to load it.

* The minimum allowed value is `1`.
* The maximum allowed value is `15`.
* Entering `default` will use the value from the _server.properties_ file for the world.
* The default value is **10** for Minecraft versions before _1.14.4_ and **default** for versions 1.14.4 or newer.
* **View distance significantly impacts server performance. If you're experiencing low server performance or lag, try lowering this value.**

### merge-radius
This option contains two sub-options for the distance, in blocks, between two stacks of items or experience orbs that must be less than the specified distance for them to merge into one larger stack, thus saving server resources.

##### exp
This option controls the distance in blocks required for two experience orbs to merge.

* The default value is **3.0**.

##### item
This option controls the distance in blocks required for two item stacks to merge.

* The default value is **2.5**.

### chunks-per-tick
This option controls the maximum number of chunks checked for growing plants per tick (1/20 second). If the number of chunks loaded by players and the area around them exceeds this limit, some chunks will be skipped in the check.

* _This feature was removed and is no longer present in Spigot engines for version 1.10 and above._
* The default value is **650**.
* **Reducing this value on large servers (with many players spread across the map) may slow down crop growth but help save server resources if the server is experiencing lag or slow performance.**

### item-despawn-rate
This option controls the number of _ticks_ (_1/20 second_) that must pass before an item thrown on the ground permanently disappears. The timer is not counted if there are no other players nearby, meaning the _chunk_ containing the item is not loaded.

* The default value is **6000** (5 minutes).
* **Reducing this value, by speeding up item despawn, can help save resources if the server is experiencing lag or slow performance.**

### mob-spawn-range
This option controls the distance in _chunks_ from the player where mobs will begin to spawn. Increasing the distance may make the number of aggressive mobs around the player in open spaces seem strangely lower, while decreasing this distance can make exploring caves safer.

* The default value is **4**.

### growth
This option contains seven sub-options that control the growth rate of specific plants. They are as follows: cactus, melon, pumpkin, sapling, cane (sugar cane), mushroom, wheat (crops, vegetables, etc.).

* The value is expressed as a percentage.
* Set the value to `100` for plants to grow at the standard Minecraft rate.
* Set the value to `200` for plants to grow twice as fast.
* Set the value to `50` for plants to grow twice as slow.
* The default value is **100**.

### entity-activation-range
This option contains five sub-options that control the maximum distance in blocks at which creatures can be "activated," meaning they will be _ticked_ every time. Mobs that are farther than this distance will appear to be "frozen" as the server will process them less frequently compared to those near the player.

##### animals
This option controls the distance from animals (cows, horses, cats, parrots, etc.) at which they will be considered activated.

* The default value is **32**.

##### misc
This option controls the distance from ambient animals, which set the mood (bats, etc.), at which they will be considered activated.

* The default value is **16**.

##### monsters
This option controls the distance from monsters (skeletons, zombies, creepers, etc.) at which they will be considered activated.

* The default value is **32**.

#### raiders
This option controls the distance from pillagers involved in a raid at which they will be considered activated.

* The default value is **48**.

##### tick-inactive-villagers
This option controls whether villagers should remain active at all times, regardless of distance from the player.

* Set to `true` to activate all villagers.
* Set to `false` to activate only villagers close to players.
* Disabling this option will require you to stay next to the villager for their trade offers to refresh!
* The default value is **true**.

### entity-tracking-range
This option contains five sub-options that control the maximum distance in blocks at which a creature can be from the player and still be visible. If a creature is farther than this distance, the server will not send information about it to the player.

##### players
This option controls the number of blocks between the player and another player for them to be visible.

* The default value is **48**.

##### animals
This option controls the number of blocks between the player and animals (cows, horses, cats, parrots, etc.) for them to be visible.

* The default value is **48**.

##### monsters
This option controls the number of blocks between the player and monsters (skeletons, zombies, creepers, etc.) for them to be visible.

* The default value is **48**.

##### misc
This option controls the number of blocks between the player and ambient creatures (bats, etc.) and objects treated as stationary creatures (paintings, armor stands, item frames, etc.) for them to be visible.

* The default value is **32**.

##### other
This option controls the number of blocks between the player and all other creatures, at which the player can see them.

* Additionally, it acts as the maximum visibility distance for objects from other groups.
* The default value is **64**.

### save-structure-info
This option controls whether the server should save information about structures, such as strongholds, Nether fortresses, witch huts, etc., along with the world map.

* Disabling this option may cause mobs to spawn incorrectly in these structures, e.g., wither skeletons will not spawn in Nether fortresses.
* Set to `false` to disable saving structure information.
* Set to `true` to enable saving structure information.
* The default value is **true**.

### random-light-updates
This option controls whether the server should randomly check chunks for lighting errors (e.g., dark patches under mountains where it shouldn’t be that dark) and fix them.

* Set to `false` to disable random lighting checks.
* Set to `true` to enable random lighting checks.
* The default value is **false**.

### nerf-spawner-mobs
This option controls whether the server should disable AI for mobs spawned by mob spawners.

* If this option is enabled, mobs spawned by mob spawners will not move or attack at all.
* Set to `false` to leave AI for mobs spawned by mob spawners enabled.
* Set to `true` to disable AI for mobs spawned by mob spawners.
* The default value is **false**.
* **Enabling this option can help save resources if the server is experiencing lag or slow performance.**

### zombie-aggressive-towards-villager
This option controls whether zombies in the world should be aggressive towards villagers.

* Set to `false` to disable zombie aggression towards villagers.
* Set to `true` to enable zombie aggression towards villagers.
* The default value is `true`.
* **Disabling this option can help save resources if the server is experiencing lag or slow performance.**

### enable-zombie-pigmen-portal-spawns
This option controls whether zombie pigmen should randomly spawn from Nether portals.

* Set to `false` to disable zombie pigman spawns from portals.
* Set to `true` to enable zombie pigman spawns from portals.
* The default value is **true**.

### max-entity-collisions
This option controls the limit on the number of collisions (_situations where one mob pushes another_) that can occur for a single creature in one tick.

* The default value is **8**.

### dragon-death-sound-radius
This option controls the distance in blocks at which a player must be to hear the dragon’s death sound.

* Set to `0` to have every player on the server hear it.
* The default value is **0**.

### wither-spawn-sound-radius
This option controls the distance in blocks at which a player must be to hear the wither spawn sound.

* Set to `0` to have every player on the server hear it.
* The default value is **0**.

### max-tick-time
This option contains two sub-options that control the maximum amount of time in milliseconds that specific things can take within a single tick.

##### tile
This option controls the maximum time allocated for map analysis.

* **Decreasing this value can improve server performance, but it may cause certain things to work more slowly, such as redstone clocks or hoppers.**
* The default value is **50**.

##### entity
This option controls the maximum time allocated for mob environment analysis.

* **Decreasing this value can improve server performance, but it may cause certain things to work more slowly, such as monsters reacting to players later.**
* The default value is **50**.

### clear-tick-list
This option controls whether the server should clear the lists of ticked creatures and items. Over time, these lists can grow significantly, but clearing them may break many things, such as plant growth times. Enabling this option is not recommended unless you are familiar with what is happening internally within the engine.

* Set to `false` to disable clearing the tick list.
* Set to `true` to enable clearing the tick list.
* The default value is **false**.

### hopper-amount
This option controls the maximum number of items a hopper can process within a single tick.

* The default value is **1**.

### seed-village
This option is used to determine the seed for the village generator.

* If you change the default value, villages will spawn differently even if you use the same world seed in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **10387312**.

### seed-desert
This option is used to determine the seed for desert structures.

* If you change the default value, desert structures will spawn differently even if you use the same world seed in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **14357617**.

### seed-monument
This option is used to set the generator seed for monuments.

* If you change the default value, monuments will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **10387313**.

### seed-slime
This option is used to set the generator seed for slime chunks.

* If you change the default value, slime chunks will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **987234911**.

### seed-igloo
This option is used to set the generator seed for igloos.

* If you change the default value, villages will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **14357618**.

### seed-jungle
This option is used to set the generator seed for jungle structures.

* If you change the default value, jungle structures will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **14357619**.

### seed-ocean
This option is used to set the generator seed for underwater structures.

* If you change the default value, underwater structures will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **14357621**.

### seed-outpost
This option is used to set the generator seed for pillager outposts.

* If you change the default value, pillager outposts will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **165745296**.

### seed-shipwreck
This option is used to set the generator seed for shipwrecks.

* If you change the default value, shipwrecks will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **165745295**.

### seed-swamp
This option is used to set the generator seed for swamp structures.

* If you change the default value, swamp structures will appear differently, even if the same world seed is used in the `server.properties` file or the seed input when generating a new world in single-player mode.
* The default value is **14357620**.

### hunger
This option contains seven sub-options that control the amount of hunger points a player loses when performing specific actions during a single tick.

* 1 hunger point corresponds to half a meat icon on the status bar.

##### jump-walk-exhaustion
This option controls the number of hunger points a player loses if they walked or jumped while walking during the last tick.

* The default value is **0.05**.

##### jump-sprint-exhaustion
This option controls the number of hunger points a player loses if they sprinted or jumped while sprinting during the last tick.

* The default value is **0.2**.

##### combat-exhaustion
This option controls the number of hunger points a player loses if they fought during the last tick.

* The default value is **0.1**.

##### regen-exhaustion
This option controls the number of hunger points a player loses if they regenerated health during the last tick.

* The default value is **6.0**.

##### swim-multiplier
This option controls the additional multiplier for the number of hunger points a player loses if they swam during the last tick.

* The default value is **0.01**.

##### sprint-multiplier
This option controls the additional multiplier for the number of hunger points a player loses if they sprinted during the last tick.

* The default value is **0.1**.

##### other-multiplier
This option controls the additional multiplier for the number of hunger points a player loses if they did something not covered by the previous multipliers during the last tick.

* The default value is **0.0**.

### hanging-tick-frequency
This option controls how often the server will check if all hanging objects (e.g., paintings, item frames, etc.) still have something to hang from, i.e., if the block they are attached to still exists.

* The default value is **100**.

### ticks-per
This option contains two sub-options that control the number of server ticks that must pass for a specific action to occur.

##### hopper-transfer
This option controls the number of ticks that must pass between each item transfer from a hopper.

* The default value is **8**.

##### hopper-check
This option controls the number of ticks that must pass between each check to see if a hopper has any items it can pick up and if there is space to place them.

* The default value is **1**.

## Ungrouped Options
Apart from the options grouped in sections, there are some options that are not divided into sections. These will be described in this "section" of the article.

### netty-threads
This option is used to set the number of netty threads for internet communication. Do not change this value if you do not know how it works.

* The default value is **4**.

### bungeecord
This option controls whether the server should load solutions for communication with BungeeCord.

* Enter `false` to disable BungeeCord support.
* Enter `true` to enable BungeeCord support.
* The default value is **false**.

### timeout-time
This option controls how many seconds the server should wait for a tick to complete before deciding that something is going wrong and crashing the server.

* The default value is **60**.

### restart-on-crash
This option controls whether the server should attempt to restart after a crash.

* Enter `false` to disable automatic restart attempts.
* Enter `true` to enable automatic restart attempts.
* **For Craftserve servers, this option has no effect. Even if you disable automatic restarts in the configuration, the server will be restarted by Craftserve's standard method.**
* The default value is **true**.

### restart-script
This option controls the location of the script used to restart the server.

* **For Craftserve servers, this option has no effect. Regardless of this setting, the server will be restarted using the standard Craftserve method.**
* The default value is **./start.sh**.

### late-bind
This option controls whether the server should open to the internet only after loading all necessary elements for allowing players to join.

* Enter `false` to open the server to the internet as soon as possible.
* Enter `true` to open the server to the internet as late as possible.
* Opening the server as late as possible may cause problems with plugins, and it's better not to do this unless there's a good reason.
* The default value is **false**.

### sample-count
This option controls how many random server players the server should send to the player when browsing the server list in the multiplayer game window.

* The default value is **12**.

### player-shuffle
This option controls the number of ticks that must pass before the server shuffles the order of players. The server processes player data in a specific order. If two players hit the same mob simultaneously, only the player who appears earlier in the processing queue will have their hit counted. Shuffling the order randomly prevents exploiting this mechanic for an advantage.

* Enter `0` to disable shuffling the order.
* The default value is **0**.

### filter-creative-items
This option controls whether the server should monitor creative mode players to prevent them from using cheats to add items that are not available in the game.

* Enter `false` to disable player monitoring (which makes it very easy for creative mode players to crash the server).
* Enter `true` to enable player monitoring.
* The default value is **true**.

### user-cache-size
This option controls the limit on the number of players stored in the _usercache.json_ file. This file allows the server to work faster, but if it becomes too large, it may no longer be beneficial.

* The default value is **1000**.

### save-user-cache-on-stop-only
This option controls whether the server should save the _usercache.json_ file only when the server is stopped or at regular intervals.

* Enter `false` for the server to automatically save the _usercache.json_ file periodically.
* Enter `true` for the server to save the _usercache.json_ file only when the server is shut down.
* The default value is **false**.

### moved-wrongly-threshold
This option controls how strictly the server should monitor whether players are moving correctly.

* The higher the value, the less frequently the "player moved wrongly" message will appear in the server console, but skilled cheaters will be able to exploit it.
* The default value is **0.0625**.

### moved-too-quickly-multiplier
This option controls how strictly the server should monitor whether players are moving too quickly for any reason.

* The higher the value, the less frequently the "player moved too quickly" message will appear in the server console, but skilled cheaters will be able to exploit it.
* The default value is **10**.

### item-dirty-ticks
This option controls how many ticks must pass between two full checks to see if items on the ground have changed. This is not a very frequent situation.

* Spigot checks items roughly every tick, and this option allows you to set how many ticks should pass before performing a full, in-depth check.
* The default value is **20**.

###### Source: https://www.spigotmc.org/wiki/spigot-configuration/
