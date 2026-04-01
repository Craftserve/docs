---
title: "🌍 Teleportation Commands"
description: "Teleport to coordinates, players, warps, home, spawn and more."
---

# 🌍 Teleportation and Travel

Commands for traveling the world. Included in TeleportPlugin.

**Namespace:** `hytale.command.*`

## 📂 Categories

| Category | Description |
|----------|-------------|
| [**Basic Teleportation**](#basic-teleportation) | `/tp` - Teleport to coordinates or players |
| [**Home and Spawn**](#home-and-spawn) | `/spawn`, `/tp home` - Respawn point and home |
| [**Teleport History**](#teleport-history) | `/tp back`, `/tp forward`, `/tp history` - Undo teleportation |
| [**Warps**](#warps) | `/warp go`, `/warp set` - Teleport points |

## 🎯 Quick Reference

```
/tp 100 64 200                 ← Teleport to coordinates
/tp Jane                       ← Teleport to player
/tp home                       ← Go home
/spawn                         ← Go to spawn
/spawn set                     ← Set spawn here
/warp go Arena                 ← Go to Arena warp
/warp set MyPlace              ← Create new warp
/tp back                       ← Undo last teleport
```

## 📖 Detailed Sections

### Basic Teleportation
Teleport anywhere:

- `/tp <x> <y> <z>` - To coordinates
- `/tp <player>` - To player
- `/tp all <x> <y> <z>` - All players to one place
- `/tp top` - To surface

### Home and Spawn
Respawn points:

- `/spawn` - Teleport to main spawn
- `/spawn set` - Set your own spawn
- `/spawn default` - Reset spawn
- `/tp home` - Go to your home

### Teleport History
Undo teleportations:

- `/tp back [number]` - Go back to previous position
- `/tp forward [number]` - Redo undone teleportation
- `/tp history` - Show history

### Warps
Saved locations:

- `/warp go <name>` - Teleport to warp
- `/warp set <name>` - Create new warp
- `/warp remove <name>` - Remove warp
- `/warp list` - Show available warps

## 💡 Practical Examples

### Teleport to Coordinates
```
/tp 100 64 200                    ← Absolute coordinates
/tp ~10 ~ ~                       ← 10 blocks east
/tp ~-5 ~10 ~5                    ← Complex relative teleport
```

### Teleport to Player
```
/tp Jane                          ← Go to Jane
/tp John                          ← Go to John
```

### Teleport with Direction
```
/tp 0 100 0 --yaw=0              ← Look north (0°)
/tp 0 100 0 --yaw=90             ← Look east (90°)
/tp 0 100 0 --yaw=180            ← Look south (180°)
/tp 0 100 0 --yaw=270            ← Look west (270°)
```

### Warps
```
/warp go Arena                    ← Go to Arena
/warp set MyArena                 ← Create warp here
/warp list                        ← Show all warps
```

---

## ℹ️ Information

- Experienced player teleportation can be disabled in certain areas
- Teleport history stores up to 50 last positions
- Warps are globally available to all players
- Home is each player's personal location

---

**Next:** Select category above to see full details.


