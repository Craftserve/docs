## Server in Offline Mode
If player skins for premium accounts are not displaying on your server, or they are not receiving OP permissions despite being listed, your server is most likely running in offline mode. This means that your server is not connecting to Mojang's authentication servers to verify players. Additionally, it's important to note that this option makes it easy for someone to impersonate another player. Therefore, we recommend installing the [AuthMe](https://www.spigotmc.org/resources/authmereloaded.6269/) plugin to manage the login system.

## Skins in Offline Mode
If you want your server to remain non-premium, [this plugin](https://www.spigotmc.org/resources/skinsrestorer.2124/) allows players to have their own skins. You can find commands and a list of permissions [here](https://github.com/SkinsRestorer/SkinsRestorerX/wiki/cmds-&-perms).
#### Installation on Bukkit/Spigot/PaperSpigot
1. Upload the **SkinsRestorer.jar** file to the `plugins` folder.
2. Restart the server via the panel or use the `/restart` or `/stop` commands. Using the `/reload` command **is not recommended** as it may cause various errors or improper plugin loading.
3. Done! If the plugin appears under the `/plugins` command on the server, it has been successfully loaded.
#### Installation on BungeeCord/Waterfall
1. Upload the **SkinsRestorer.jar** file to the `plugins` folder **on each Spigot server**.
2. Upload the **SkinsRestorer.jar** file to the `plugins` folder on the proxy server, in this case, BungeeCord.
3. Ensure the `bungeecord:` option on the Spigot server side is set to `true`.
4. Restart both servers (Spigot and BungeeCord).
5. Done! Now the plugin should be properly integrated.
### Installation on Sponge
1. Upload the plugin to the `mods` folder.
2. Restart the server, and that's it!

Online Server
---
If you have [purchased the official version of Minecraft](https://minecraft.net), we recommend changing the `online-mode: false` option to `online-mode: true`. This way, no skin plugin is needed, the whitelist and operator list function as intended, and no password authentication plugin (e.g., AuthMe) is required.
