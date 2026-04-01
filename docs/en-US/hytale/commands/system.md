---
title: "🛑 System Commands (Server)"
description: "Server management, player, access and permissions commands. Always available."
---

# 🛑 Server System Commands

Always available commands on the server. Manage general aspects of server and players.

**Namespace:** `hytale.system.command.*`

## 📂 Categories

| Category | Description |
|----------|-------------|
| [**Server Control**](#server-control) | `/stop`, `/version`, `/backup`, `/notify` - Server management |
| [**Player Management**](#player-management) | `/kick`, `/who`, `/kill`, `/give`, `/inventory` - Players and their data |
| [**Access and Permissions**](#access-and-permissions) | `/ban`, `/unban`, `/whitelist`, `/op`, `/perm` - Access control |
| [**Communication**](#communication) | `/say`, `/notify` - Messages and notifications |
| [**Player Statistics**](#player-statistics) | `/player stats`, `/player effect` - Data and effects |
| [**Entities**](#entities) | `/entity remove`, `/entity clone` - Entity management |
| [**Debugging**](#debugging) | `/debug`, `/hitbox`, `/log` - Debugging tools |

## 🎯 Quick Reference

### Most Common Commands

```
/who                           ← Who is online
/gamemode Creative [player]    ← Change game mode
/give diamond --quantity=5     ← Give items
/kill [player]                 ← Kill player
/ban player [reason]           ← Ban player
/unban player                  ← Unban player
```

### For Administrators

```
/stop                          ← Shutdown server
/op add player                 ← Grant OP
/perm set player permission    ← Set permissions
/whitelist enable/disable      ← Enable/disable whitelist
```

## 📖 Detailed Sections

### Server Control
Manage basic server functions:

- `/stop` - Shutdown server
- `/version` - Show version
- `/backup` - Create backup
- `/notify` - Send notification
- `/maxplayers` - Set player limit
- `/kick` - Kick player

### Player Management
Operations on players:

- `/gamemode` - Change game mode
- `/kill` - Kill player
- `/damage` - Deal damage
- `/give` - Give items
- `/inventory` - Manage inventory
- `/whoami` - Information about you
- `/whereami` - Where you are
- `/ping` - Check ping
- `/hotbar` - Quick access bar

### Access and Permissions
Control server access:

- `/ban` - Ban player
- `/unban` - Unban player
- `/whitelist` - Whitelist
- `/op` - Operators
- `/perm` - Permissions

### Communication
Send messages:

- `/notify` - Notification for all
- `/say` - Public message
- `/eventtitle` - Event title

### Player Statistics
Manage player data:

- `/player stats` - Read/write statistics
- `/player effect` - Apply effects
- `/player camera` - Change perspective

### Entities
Manage NPCs and animals:

- `/entity remove` - Remove entity
- `/entity clone` - Clone entity
- `/entity dump` - Show data
- `/entity stats` - Entity statistics
- `/entity effect` - Effects on entities

### Debugging
Developer tools:

- `/debug shape` - Draw shapes
- `/hitbox` - Show collision bounds
- `/log` - Logging
- `/network` - Network diagnostics
- `/hitdetection` - Hit detection
- `/packetstats` - Packet statistics

---

## ℹ️ Information

These commands are **always available** and cannot be disabled. They are crucial for server operation.

**Required Permissions:** Depends on command - generally available to operators.

---

**Next:** Go to specific category above to see full details of each command.


