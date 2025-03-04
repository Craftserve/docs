# KM Pack - FAQ

### Where can I test the KM Pack before purchasing?

You can use our test server, its IP is kmtesty.csrv.pl, and the game version is 1.15.2.

### Does the KM Pack include the latest islands?

We add the latest islands as they are released on Kwadratowa Masakra.

### How do I change the game version to another one?

The KM Pack is based on the Paper 1.15.2 engine, so it cannot be changed.

### Can I add my own plugins?

Yes, but we recommend doing so only if you are experienced.  
To add plugins, you need to turn off the server, go to the **Files** tab in the panel, and then enter the `plugins` folder. Use the **Upload file** menu to upload the appropriate .jar plugin. Once done, start the server.

### How do I change the map to my own?

You need to turn off the server, go to the **Files** tab in the panel, and then find the `world` folder. Delete it (note, the current world will be permanently lost, so make sure to back it up if needed). Rename your custom map to `world` and upload it to the server. Start the server.  
*Note, changing the map to something other than the default will disable the ability to run events!*

### How do I change the map to a [vanilla world](https://minecraft-pl.gamepedia.com/Powierzchnia) (standard Minecraft world)?

To do this, you need to turn off the server, go to the **Files** tab in the panel, and then find the `world` folder. Delete it (note, the current world will be permanently lost, so make sure to back it up if needed). Start the server, and a default map will be generated automatically.  
*Note, changing the map to something other than the default will disable the ability to run events!*

### How do I reset the map to the Kwadratowa Masakra world and all other files?

You need to turn off the server, go to the **Settings** tab in the panel, and then select the **Format** tab. Choose **All files** and click format (note, the current world and all progress will be lost, so make sure to back them up in the **Files** tab). After completing the procedure, turn the server back on.

### I uploaded my own world, what should I do to keep radiation working?

You will need administrator rights for this.  
Use the command `/safefromradiation RADIUS`, where RADIUS is the radius of the area where **no** radiation will occur from the place you are standing.  
For example, if you are standing at coordinates x:0 z:0 and type the command `/safefromradiation 100`, radiation will not occur in the square starting from x:-100 z:-100 to x:100 z:100.

### How do I give someone admin rights?

To do this, go to the **Console** tab in the panel and type the command `op NICK`, where NICK is the player's name you want to give admin rights to, e.g., `op jahumen`.  

**WARNING!** We advise against giving admin rights to people who want to play normally on the server. This causes things like not losing lives after death, being able to open other people's shops, and not being able to participate in arena fights. Admin rights should only be given to people who are not playing and are overseeing the server.  
Remember, the console always has all permissions, so no player needs admin rights—commands can be run from the console.

### How do I check the balance of another player?
The money of all players is visible by pressing the TAB key next to the player's name.

### How do I transfer money to someone else?

##### How to create a banknote?
To do this, you need to create a banknote using the command `/withdraw AMOUNT`, where AMOUNT is the amount of money you want to withdraw, e.g., `/withdraw 25`. Then you can pass it to someone else.

##### How to deposit a banknote?
To deposit a banknote, right-click while holding it.

### How to manage money as an administrator?

You will need administrator rights for this. You can type commands from the console or an admin account.  
Remember, when typing commands from the console, you omit the `/`, e.g., `eco` instead of `/eco`.

##### How to add money to someone's account?
`/eco give NICK AMOUNT`, where NICK is the player's name and AMOUNT is the amount of money, e.g., `/eco give jahumen 100`.

##### How to take money from someone?
`/eco take NICK AMOUNT`, where NICK is the player's name and AMOUNT is the amount of money, e.g., `/eco take jahumen 100`.

### How do shops work?

##### How to create my own shop?
Place a chest, then look at it and use the command `/shop create QUANTITY PRICE-SELL PRICE-BUY` while holding the item you want to trade. Within 15 seconds of typing the command, right-click the chest.  

QUANTITY is the amount of the item you want to trade, e.g., 64  
PRICE-SELL is the price at which others can buy the item, e.g., 50. If you don't want to sell anything but only buy, type 0 here.  
PRICE-BUY is the price at which others can sell the item, e.g., 50. If you don't want to buy anything but only sell, type 0 here.  

For example:  
If you want to create a shop where you sell 64 cobblestone for 8$, use the command `/shop create 64 8 0` while holding cobblestone.  
If you want to create a shop where you buy 16 paper for 24$, use the command `/shop create 16 0 24` while holding paper.  
If you want to create a shop where you sell 32 wood for 6$ or buy for 2$, use the command `/shop create 32 6 2` while holding wood.  
The cost to create a shop is 5$.

##### How to remove a shop?
Use the command `/shop remove` and right-click the shop you want to remove. The chest's contents will remain intact.  
As an administrator, you can remove other players' shops.

##### How to create an admin shop?
For this, you will need administrator rights.  
You create an admin shop in the same way as a regular shop (place a chest, type the command while holding the item, and right-click the chest), but at the end of the command, add `admin`, e.g., `/shop create 32 6 2 admin`.

### How do I enable or disable radiation in a specific region?
For this, you will need administrator rights.  
You must start by creating a region. Use the command `//wand` or create a wooden axe. Select the first point by left-clicking and the second point by right-clicking (the region will be between these two points).  

Use the command `/rg define NAME`, where NAME is the name of the region. 

After creating the region, you need to add the radiation flag with the command `/rg flag NAME radiation STATE`, where NAME is the region's name and STATE is `yes` if radiation should be enabled or `no` if it should be disabled.  
For example, `/rg flag domek radiation no` will disable radiation in the "domek" region created in the messy area.

### Where can players get iodine solution and the life elixir?

They can be purchased at the auction house (upstairs, after climbing the stairs), located at coordinates X: 300 Z: 450.  
An administrator can give someone the life elixir using the command `/potionoflife NICK AMOUNT-LIVES` (more information in the next section).

### What KM Pack-specific commands can I use as an administrator?

/dajzycie NICK AMOUNT - Adds lives to a player (if a negative value is provided, it removes lives). Automatically unbans the player.  
/res NICK - Unbans a player who died due to life loss.  
/uball - Unbans all players who died due to life loss.  
/potionoflife NICK AMOUNT-LIVES - Adds the life elixir with the specified number of lives to a player's inventory. For example, `/potionoflife jahumen 3` will give the player "jahumen" a potion that adds 3 lives when consumed.

### How do I create paid commands?

Go to the **Files** tab in the panel, open the `plugins` folder, then open the Essentials plugin. Open the `config.yml` file. Look for the line `command-costs:` (by default line number 623).  
To create a paid command, place the cursor at the end of the line and press enter. Press space twice and type the command name, e.g., `msg`, followed by a colon and the price. For example:  
command-costs:
  msg: 10
This will make the `/msg` command cost 10$.

### How can I repeat past events?

##### PVP Arena  
*Kwadratowa Masakra players battle for the title of PVP champion of the season.*  

The PVP arena is located at coordinates X: -700 Z: 100, and players must go there to watch the battle. To join the fight, use the command `/pa pvp`. Fighters must hit the item sign to get items, then hit the iron block when they are ready.  
You can leave the arena using the command `/pa leave`.

##### Boom!  
*A PVP event where players shoot at the opposing team with a crossbow loaded with fireworks, in a specially designed arena.*  

The arena for this event is located at coordinates `X: -500 Z: -600`, and players must go there to participate. To join the fight, use the command `/pa boom`. Participants must hit the `bluekit` or `redkit` sign depending on their team, and then hit the iron block when they are ready.  
It is important that after the game starts or after death, players must place fireworks in their off-hand to be able to load them into the crossbow.  
The arena can be exited using the `/pa leave` command.  

##### Ice River Race!  
*A boat race on ice, in 3 teams of 3 laps, followed by a round for those with the best time.*  

The arena for this event is located at coordinates `X: 850 Z: -150`, and players must go there to watch the race.  

An administrator must use the command `/rc start IceRiverRace NUMBER-OF-LAPS`, for example, `/rc start IceRiverRace 3`.  

Players who wish to join the race must click the `Click here to participate` message in the chat. When all interested players have joined, the administrator must click `[Skip waiting]`.  
This will start a 60-second countdown, after which the players can start.  
The race can be exited using the `/rc leave` command.  
The administrator can stop the race by clicking `[Stop race]`.  

##### Golden Truffle Race  
This event takes place on a new mushroom-themed island. It features a racetrack where players race on pigs.  
The start of the track is located at coordinates `X: -1450 Z: 750`. You can get there through the portal at spawn, which is shaped like a large mushroom. An administrator must use the command `/kmevent start Golden-Truffle-Race`, and for the duration of the event, radiation is turned off, and players can join the race. The race will start automatically when 14 spots are filled. If there are not enough players, use the command `/rc skipwait GoldenTruffleRace`.  

The race consists of 3 laps on a track with half slabs that give various effects. Golden half slabs give positive effects such as speed or projectile effects, while iron ones give negative effects, like freezing in place. The "resistance to effects" effect prevents any effects from being applied during its duration. The track also hides a shortcut that can be triggered with a lever. The shortcut resets after the race ends.  

The race can be repeated an unlimited number of times using the command `/rc start GoldenTruffleRace <number-of-laps>`. The prize in the event was a special crown that gives a movement speed bonus. To summon it, use the command `/givemodel crown` (in version 1.5 of the pack, use `/givemodel Korona`) and give it to the winner. To wear the crown, type `/hat` while holding it.  
After the event is finished, use the command `/kmevent stop` - this will restore the radiation on the mushroom island.

##### Additional Events  

Newer events, such as `Gray-Mountain`, can be started using the command `/kmevent` (requires administrator permissions or entry in the console).  
To check the list of available events, use the command `/kmevent list`.  
After deciding on a specific event, use the command `/kmevent start EVENT-NAME`, for example, `/kmevent start Gray-Mountain`.  
After the event ends, use the command `/kmevent stop`.  

### How to get to the Nether?  

By default, the Nether is disabled. It automatically turns on when the `Baron-Somedi` event starts. To do this, use the command `/kmevent start Baron-Somedi`, and a message will appear in the chat indicating that the Nether has been enabled. Obsidian portals are completely disabled; to get to the Nether, you must jump into the void anywhere (simply fall off the island), the teleport will be at height `y = -64`.  
The same multiplier as in vanilla is used here, `*8`. This means that if you jump into the Nether from the normal world at coordinates `X: 800, Z: 400`, you will appear in the Nether at coordinates 8 times smaller, i.e., `X: 100, Z: 50`. The reverse also applies, and coordinates are multiplied by 8.  
Keep in mind that in the Nether, gravity is reversed! As a result, you will "fall" upward by default. If you want to go down, hold shift (it works like jumping in the normal world, but in the downward direction).  

### How to enable zero-tick farms?  

Since version 1.15, zero-tick farms were fixed by Mojang, so this is not possible on newer packs. However, they still work on the earlier version of the Kwadratowa Masakra pack from September 2019 (KM 2019.09 - 1.0).  
To install this version, log into the panel, turn off the server, go to the `settings` tab, then `engines`, and select the `KM 2019.09 - 1.0` pack. Click save, go to the `format` tab, select `all files`, and confirm `format`. Then turn the server back on.  
**WARNING** This will reset all existing files and install the first season's Kwadratowa Masakra pack.  
After installing the pack, go to the `files` tab, open the `paper.yml` file. Find the line `fix-zero-tick-instant-grow-farms: true` (by default line number 93) and change `true` to `false`. Then click `Save` at the top of the page and reload the server by turning it off and on again.  

To quickly obtain items from farms in the latest version of the pack, you can create a farm based on [observers](https://minecraft-pl.gamepedia.com/Detektor), but we do not recommend this due to disrupting the server economy.  

#### We wish you great gameplay and unforgettable adventures with friends in the Kwadratowa Masakra pack!
