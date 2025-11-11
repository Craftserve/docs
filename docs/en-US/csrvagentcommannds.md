# CraftserveAgent Commands

CraftserveAgent is a built-in Craftserve plugin that runs on any server with an engine that supports plugins (such as Spigot, Paper, or Purpur). It significantly simplifies server management and also introduces additional security features, such as login and verification on offline-mode servers.

Individual Agent's functions are implemented as modules, which you can enable or disable in the webpanel (Minecraft Settings -> CraftserveAgent Settings).

# Modules:

## Skin Restoration

Allows you to restore skins on offline-mode servers, which is not the default behavior. A simple replacement for the popular [SkinRestorer](https://craftserve.com/en/m/skinsrestorer) plugin.

**Usage:**

`/skin` - restores the player's skin.

## Authentication (Login)

Forces registration and login when joining a server, preventing unauthorized access to accounts with higher privileges on offline-mode servers. A simpler alternative to the popular [AuthMe](https://craftserve.com/en/m/authmereloaded) plugin.

**Usage:**

`/register <password>` - registers an account for the current player with the specified password.
`/login <password>` - logs in to the current player's account using the specified password.

## Homes

A familiar feature from many Minecraft servers, with a simple implementation. It allows you to create your own home points (so-called "homes") and teleport to them at any time using a command.

**Commands:**
`/home` - teleports to the set home. If no home is set, a new one will be created. Permission: `craftserve-agent.home`.
`/delhome` - deletes the current home. Permission: `craftserve-agent.home`.

## TPA

TPA allows you to send teleport requests to other players. You can also teleport them to yourself using requests.

**Commands:**
`/tpa <nick>` - sends a teleport request to the specified player. Permission: `craftserve-agent.tpa.to-others`.
`/tpahere <nick>` - sends a request to teleport another player to yourself. Permission: `craftserve-agent.tpa.to-me`.
`/tpaaccept` - accepts a teleport request.
`/tpadeny` rejects a teleport request.
`/tpacancel` - cancels a sent teleport request.

## Spawn

Allows you to set a spawn point on the map and teleport to it at any time.

**Commands:**
`/spawn` - teleports to the spawn. Permission: `craftserve-agent.spawn`.
`/setspawn` - sets the spawn. Permission: `craftserve-agent.spawn.set`.

## Warps

Warps are a well-known system that allows you to set points of interest (warps) on the map and teleport to them at any time using a command.

**Commands:**
`/warp <name>` teleports to a warp. Permission: `craftserve-agent.warp`.
`/setwarp <name>` - sets a warp. Permission: `craftserve-agent.warp.set`.
`/delwarp <name>` - removes a warp. Permission: `craftserve-agent.warp.set`.

## Other

Other useful CraftserveAgent plugin commands.

**Commands:**
`/back` - teleports back to the previous location. Permission: `craftserve-agent.back`.
`/slots <number>` - changes the number of slots on the server. Permission: `craftserve-agent.slots`.