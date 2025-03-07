Lags on the Server
==================
The first step in addressing lag issues is to determine their nature – whether the issue lies with the client, the server, or the internet service provider.




Ticks per second
----------------
By default, a Minecraft server is designed so that the **game loop executes 20 cycles per second** (referred to as **ticks**) – if this is the case, we say the server has a **TPS=20**. Under heavy load, however, it may struggle to perform calculations on time, causing the number of ticks to drop below 20, resulting in server-side lag.

To check if the lag is due to the server, use the command **/tps** to display the number of ticks per second. If the value is less than 20, it means the problem lies with the server, which is taking too long to perform calculations.

For **Sponge**, use the command **/sponge tps**, and for **Forge**, use **/forge tps**.




Timings - Spigot, Paper, and Sponge
-----------------------------------

**Spigot** and **Paper** come equipped with a very useful diagnostic tool called the **/timings** command. Bukkit does not have this or many other features, so we encourage switching to the aforementioned engines.

If you want to find out why your server is running slow, use the command **/timings on**. Then, for **at least 10 minutes**, play actively, performing the same actions as usual. After this time, enter **/timings paste** – you will receive a link to a page with detailed (especially for Paper) statistics.

For **Sponge**, the commands are **/sponge timings on** and **/sponge timings paste**.

You can paste the resulting link on our [Discord](https://discord.gg/CcdYMrs) to get advice on optimization.

Spark Profiler - Purpur and Mods
---------------------------------

If you are using a modded engine, **Purpur**, or if the timings do not help you find the cause of the server's load, you can use **Spark**. You can download it as a [plugin](https://www.spigotmc.org/resources/spark.57242/) or a [mod](https://www.curseforge.com/minecraft/mc-mods/spark/files) depending on the engine you are using. For **Purpur**, there is no need to install it as it is already included. You can access the **Spark** tool using the command **/spark profiler**.

This method is almost identical to the one mentioned above. Start diagnosing the lag by entering the command **/spark profiler start**. Then, for **at least 10 minutes**, play actively, performing the same actions as usual. After this time, enter **/spark profiler stop** – you will receive a link to a page with detailed statistics.


# Interpretation

[**How to interpret timings yourself - SpigotMC**](https://www.spigotmc.org/wiki/timings/)

[**How to interpret Spark Profiler - Spark Docs**](https://spark.lucko.me/docs/Using-the-viewer)
