## Offline Mode Server
If your server is not displaying premium player skins or players are not receiving OP permissions despite being added to the list, it is most likely running in offline mode. This means that your server is not connecting to Mojang's servers for player authentication. Additionally, it's important to note that with this option, it is easy for someone to impersonate others, so we recommend also installing the [AuthMe](https://www.spigotmc.org/resources/authmereloaded.6269/) plugin, which handles the login system.

## Skins in Offline Mode
If you want your server to remain non-premium, [this plugin](https://www.spigotmc.org/resources/skinsrestorer.2124/) will allow players to have their skins. You can find commands and the permissions list [here](https://github.com/SkinsRestorer/SkinsRestorerX/wiki/cmds-&-perms).
#### Installation on Bukkit/Spigot/Paperspigot
1. Upload the **SkinsRestorer.jar** file to the `plugins` folder.
2. Restart the server from the panel, or use the `/restart` or `/stop` commands. Using the `/reload` command **is not recommended** as it may cause various errors or some plugins might fail to load correctly.
3. Done! If the plugin appears under the `/plugins` command on the server, it means it has been loaded successfully.
#### Installation on BungeeCord/Waterfall
1. Upload the **SkinsRestorer.jar** file to the `plugins` folder **on each Spigot server**.
2. Upload the **SkinsRestorer.jar** file to the `plugins` folder on each proxy server, in this case, on BungeeCord.
3. Make sure that the `bungeecord:` option on the Spigot server side is set to `true`.
4. Restart both servers (Spigot and BungeeCord).
5. Done! The plugin should now be properly integrated with your server.
### Installation on Sponge
1. Upload the plugin to the `mods` folder.
2. Restart the server and you're good to go!

Online Mode Server
---
However, if you have a [purchased version of Minecraft](https://minecraft.net), we recommend changing the `online-mode: false` option to `online-mode: true`. This way, no skin plugin is needed, the whitelist and operator list will always work as they should, and there is no need for any password-based authentication plugin (e.g., AuthMe).
