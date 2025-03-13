Server Lags
==========

The first step to take when dealing with lag issues is to determine the nature of the problem—whether it's caused by the client, the server, or the internet service provider.



Ticks per Second
----------------
By default, a Minecraft server is designed so that the **main game loop** executes **20 cycles** (called **ticks**) **per second**. If this happens, the server has **TPS=20**. Under heavy load, however, the server may fail to complete calculations on time, causing the number of cycles to drop below 20, which results in server lag.

To check if lag is due to the server, use the **/tps** command to display the number of ticks per second. If the value is lower than 20, it means the problem lies with the server, which is taking too much time to process calculations.

For **Sponge**, the command is **/sponge tps**, and for **Forge**, it is **/forge tps**.




Timings - Spigot, Paper, and Sponge
------------------------------------

**Spigot** and **Paper** come with a very useful diagnostic tool called the **/timings** command. Bukkit lacks this and many other features, so we encourage switching to the previously mentioned engines.

If you want to figure out why your server is running too slowly, use the **/timings on** command. Then, for **at least 10 minutes**, play actively, performing the same actions you usually do. After this period, type **/timings paste** — you’ll receive a link to a page with detailed (especially for Paper) statistics.

For **Sponge**, the corresponding commands are **/sponge timings on** and **/sponge timings paste**.

You can paste the obtained link on our [Discord](https://discord.gg/CcdYMrs) for advice on optimization.

Spark Profiler - Purpur and Mods
--------------------------------

If you’re using a modded server engine or **Purpur**, or if timings don’t help you identify the cause of server load, you can use what **Spark** offers. You can download it as a [plugin](https://www.spigotmc.org/resources/spark.57242/) or [mod](https://www.curseforge.com/minecraft/mc-mods/spark/files), depending on the engine running on your server. In the case of **Purpur**, it’s already included, so there’s no need to install it separately. The **Spark tool** can be accessed via the **/spark profiler** command.

This method is almost identical to the one mentioned above. To diagnose lag, start by typing **/spark profiler start**. Then, for **at least 10 minutes**, play actively, performing the same actions you usually do. After this time, type **/spark profiler stop** — you’ll receive a link to a page with detailed statistics.


# Interpretation

[**How to interpret timings yourself** - SpigotMC](https://www.spigotmc.org/wiki/timings/)

[**How to interpret Spark Profiler** - Spark Docs](https://spark.lucko.me/docs/Using-the-viewer)
