# KM Pack - FAQ

### Where can I test KM Pack before purchasing?

You can use our test server with the IP `kmtesty.csrv.pl`, game version 1.15.2.

### Does KM Pack include the latest islands?

We add the latest islands as soon as they are released on Kwadratowa Masakra.

### How can I change the game version to a different one?

KM Pack is based on the Paper 1.15.2 engine, so it cannot be changed.

### Can I add my own plugins?

Yes, but we recommend doing this only if you know how to manage it.  
To do so, you need to turn off the server, go to the **Files** tab in the control panel, then open the `plugins` folder. Using the **Upload File** menu, upload the appropriate `.jar` plugin. Then, turn the server back on.

### How do I change the map to my own?

To change the map, you need to turn off the server, go to the **Files** tab in the control panel, then find the `world` folder. Delete it (note that the current world will be permanently lost, so make sure to download it if you want to keep it). Rename your own map to `world` and upload it to the server. Then, turn the server back on.  
*Note: Changing the map to something other than the default will prevent events from taking place!*

### How do I change the map to a [vanilla world](https://minecraft-pl.gamepedia.com/Powierzchnia)?

To change to a vanilla world, you need to turn off the server, go to the **Files** tab in the control panel, then find the `world` folder. Delete it (note that the current world will be permanently lost, so make sure to download it if you want to keep it). Then, turn the server back on, and a default world will be generated automatically.  
*Note: Changing the map to something other than the default will prevent events from taking place!*

### How do I reset the map to the Kwadratowa Masakra world and all other files?

To do this, you need to turn off the server, go to the **Settings** tab in the control panel, and select the **Format** tab. Choose **All Files** and click format (note that the current world and all progress will be lost, so make sure to download them if you want to keep them in the **Files** tab). After completing the process, turn the server back on.

### I uploaded my own world. What should I do to keep radiation working?

To do this, you need administrator rights.  
Use the command `/safefromradiation RADIUS`, where `RADIUS` is the radius of the area where **no** radiation should be present from where you are standing.  
For example, if you are at coordinates x:0 z:0 and use the command `/safefromradiation 100`, radiation will not affect the square starting at x:-100 z:-100 and ending at x:100 z:100.

### How do I give someone admin rights?

Go to the control panel, select the **Console** tab, and type the command `op NICK`, where `NICK` is the player's name you want to give admin rights to, e.g., `op jahumen`.  
**WARNING!** We advise against giving admin rights to people who want to play normally on the server. It causes issues such as not losing lives after death, being able to open other players' shops, and not being able to participate in arena battles. Admin rights should only be given to people who do not participate in the gameplay and supervise the server.  
Remember that the console always has all the rights, so no player needs to be an admin—you can execute commands from the console.

### How do I check another player's account balance?

The amount of money that all players have is visible when you press the TAB key, next to the player's name.

### How can I give money to someone?

##### How to create a banknote?
To create a banknote, use the command `/withdraw AMOUNT`, where `AMOUNT` is the amount of money you want to withdraw, e.g., `/withdraw 25`. You can then give it to someone else.

##### How to deposit a banknote?
To deposit a banknote, right-click while holding it.

### How do I manage money as an administrator?

For this, you will need administrator rights—you can enter commands from the console or from an admin account.  
Remember that when typing commands from the console, you omit the `/`, e.g., `eco` instead of `/eco`.

##### How to add money to someone?
`/eco give NICK AMOUNT`, where `NICK` is the player's name and `AMOUNT` is the amount of money, e.g., `/eco give jahumen 100`.

##### How to take money from someone?
`/eco take NICK AMOUNT`, where `NICK` is the player's name and `AMOUNT` is the amount of money, e.g., `/eco take jahumen 100`.

### How do the shops work?

##### How to create your own shop?
Place a chest, then while looking at it, use the command `/shop create QUANTITY SELL-PRICE BUY-PRICE` while holding the item you want to trade. Within 15 seconds of typing the command, right-click the chest.\
\  
`QUANTITY` is the number of items you want to trade, e.g., `64`.  
`SELL-PRICE` is the price others will pay for the item, e.g., `50`. If you do not want to sell anything but only buy, set this to 0.  
`BUY-PRICE` is the price at which others can sell you the item, e.g., `50`. If you do not want to buy anything but only sell, set this to 0.  
\
For example:  
If you want to make a shop that sells 64 cobblestones for $8, use the command `/shop create 64 8 0` while holding cobblestones.  
If you want to make a shop that buys 16 paper for $24, use the command `/shop create 16 0 24` while holding paper.  
If you want to make a shop that sells 32 wood for $6 or buys for $2, use the command `/shop create 32 6 2` while holding wood.  
Creating a shop costs $5.

##### How to remove a shop?
Use the command `/shop remove` and right-click the shop you want to remove. The contents of the chest will remain intact.\  
If you are an administrator, you can delete other players' shops.

##### How to create an admin shop?
For this, you need administrator rights.  
Create the shop the same way as a regular shop (place the chest, type the command while holding the appropriate item, and right-click the chest), but at the end of the command, add `admin`, e.g., `/shop create 32 6 2 admin`.

### How to turn radiation on or off in a specific region?
For this, you need administrator rights.  
First, create the region using the command `//wand` or by creating a wooden axe. Mark the first point by left-clicking, then mark the second point by right-clicking (the region will be created between these two points).  
\
Use the command `/rg define NAME`, where `NAME` is the name of the region.  
\
After creating the region, you need to add the `radiation` flag with the command `/rg flag NAME radiation STATE`, where `NAME` is the name of the region, and `STATE` is `yes` if radiation should be applied, or `no` if not.  
For example, `/rg flag house radiation no` will ensure that no radiation occurs in a house on the messy terrain.

### Where can players get Lugol's solution and the Elixir of Life?

They can be purchased in the auction house (upstairs after climbing the stairs), located at coordinates `X: 300 Z: 450`.  
An administrator can grant someone the Elixir of Life using the command `/potionoflife NICK LIVES-AMOUNT` (more info in the next section).

### What KM Pack-specific commands can I use as an administrator?

`/dajzycie NICK AMOUNT` - this command adds lives to a specific player (if you provide a negative value, it removes lives). Automatically unbans the player.  
`/res NICK` - this command unbans a player who died due to losing lives.  
`/uball` - this command unbans all players who died due to losing lives.  
`/potionoflife NICK LIVES-AMOUNT` - this command adds the Elixir of Life to a specific player's inventory, containing the specified amount of lives. For example, `/potionoflife jahumen 3` will add the elixir with 3 lives to the `jahumen` player's inventory.

### How to create paid commands?

Go to the control panel, select the **Files** tab. Open the `plugins` folder, then open the `Essentials` plugin. Open the `config.yml` file. Look for the line `command-costs:` (by default, it's line 623).  
To create a paid command, place the cursor at the end of this line and press enter. Press space twice and type the command name, for example, `msg`, followed by a colon and the price. For example:\
command-costs:\
  msg: 10\
This will make every use of the `/msg` command cost $10.

### How can I repeat previous events?

##### PVP Arena  
*Players from Kwadratowa Masakra fight for the title of PVP champion of the season.*\
\
The PVP Arena is located at coordinates `X: -700 Z: 100`. Players must go there to watch the battle.
Arena PVP is located at coordinates `X: -700 Z: 100`, players must go there to watch the battle. To join the fight, use the command `/pa pvp`. Combatants must hit the `Items` sign to receive items, and then hit the iron block when they are ready.\
You can leave the arena by using the command `/pa leave`.

##### Go out with a bang!
*PVP event where you shoot at the opposing team with a crossbow loaded with fireworks in a specially prepared arena.*\
\
The arena for this event is located at coordinates `X: -500 Z: -600`, players must go there to watch the battle. To join the fight, use the command `/pa fw`. Combatants must hit the `bluekit` or `redkit` sign, depending on the team, and then hit the iron block when they are ready.\
It is important that after the game starts or after death, you must place fireworks in your offhand to load them into the crossbow.\
You can leave the arena by using the command `/pa leave`.

##### Ice River Race!
*A boat race on ice in 3 teams, each racing 3 laps, followed by a round for those with the best time.*\
\
The arena for this event is located at coordinates `X: 850 Z: -150`, players must go there to watch the race.\
An administrator must use the command `/rc start IceRiverRace NUM-LAPS`, e.g., `/rc start IceRiverRace 3`.\
\
To join the race, players must click the `Click here to participate` message in the chat. When all participants have joined, the administrator must click `[Skip waiting]`.\
A 60-second countdown will begin, after which players can start.\
You can leave the race using the command `/rc leave`.\
An administrator can interrupt the race by clicking `[Stop race]`.

##### The Golden Truffle Race
\
The event takes place on a new mushroom-themed island. It features a racing track where players race on pigs.\
The starting point of the track is located at coordinates `X: -1450 Z: 750`. You can get there through a portal in the shape of a large mushroom located at spawn. An administrator must use the command `/kmevent start GoldenTruffleRace`, and for the duration of the event, radiation will be disabled, and players can join the race. The race will start automatically once all 14 spots are filled. If there aren't enough players, use the command `/rc skipwait GoldenTruffleRace`.\
\
The race consists of 3 laps on a track with pressure plates that give different effects. Golden pressure plates give positive effects, such as speed or shots with effects, while iron pressure plates give negative effects, such as freezing in place. The "resistance to effects" effect prevents any effects from being applied while it is active. The track also hides a shortcut that can be activated by a lever. The shortcut resets after the race is over. You can repeat the race as many times as you like by using the command `/rc start GoldenTruffleRace <number of laps>`. The prize for this event was a special crown that grants a speed bonus. To summon it, use the command `/givemodel crown` (in package version 1.5 `/givemodel Korona`) and give it to the winner. To wear the crown, you must type `/hat` while holding it in your hand.\
After the event ends, use the command `/kmevent stop` to restore radiation on the mushroom island.

##### Additional events
\
Newer events, such as `Gray-Mountain`, can be started using the command `/kmevent` (requires administrator permissions or console access).\
To check the list of available events, use the command `/kmevent list`.\
Once you've chosen a specific event, use the command `/kmevent start NAME`, for example, `/kmevent start Gray-Mountain`.\
After the event ends, use the command `/kmevent stop`.

### How to access the Nether?
\
By default, the Nether is disabled. It automatically turns on after starting the `Baron-Somedi` event. To do this, use the command `/kmevent start Baron-Somedi`, and a message will appear in the chat indicating that the Nether is enabled. Obsidian portals are completely disabled; to enter the Nether, you must jump into the void at any point (simply jump off the island). The teleport is located at `y = -64`.\
The same conversion as in vanilla is used here, `*8`. This means that if you enter the Nether in the overworld at coordinates `X: 800, Z: 400`, you will appear in the Nether at coordinates `X: 100, Z: 50`. The reverse works similarly, multiplying by 8.\
Keep in mind that gravity is reversed in the Nether! Therefore, you will "fall" upwards by default; if you want to go down, hold shift (this works like jumping in the overworld, but in the downward direction).

### How to enable zero-tick farms?
\
Since version 1.15, Mojang has fixed zero-tick farms, so they are not possible in newer packages. However, they still work in earlier versions, such as the `Kwadratowa Masakra 1.0` package from September 2019 (KM 2019.09 - 1.0).\
To install it, log in to the control panel, turn off the server, go to the `settings` tab, then `engines`, and select the package `KM 2019.09 - 1.0`, click save. Then go to the `format` tab, select `all files`, and confirm `format`. Afterward, turn the server back on.\
**WARNING** This will reset all existing files and install the `Kwadratowa Masakra` package from the first season.\
Once the package is installed, go to the `files` tab, open the file `paper.yml`. Find the line `fix-zero-tick-instant-grow-farms: true` (by default, number 93) and change `true` to `false`. Then click `Save` at the top of the page and reload the server by turning it off and on again.\
\
For fast item gathering from farms on the latest package version, it's possible to create a farm based on [observers](https://minecraft-pl.gamepedia.com/Detektor), but we do not recommend this due to disturbing the server's economy.


#### We wish you great gameplay and unforgettable adventures with your friends on the Kwadratowa Masakra pack!
