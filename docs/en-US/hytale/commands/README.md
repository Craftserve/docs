---
title: "Hytale Commands - Complete Guide"
description: "Learn all Hytale server commands and features."
---

# 🎮 Hytale Server Commands

Welcome to the official Hytale server commands documentation. Here you'll find comprehensive guides for managing your Hytale server.

## Quick Start

**New to Hytale commands?** Start with one of these sections:

### 🧭 Navigation
- [📖 Symbol Guide](guide.md) - Learn how to read command syntax
- [❓ Frequently Asked Questions](faq.md) - Common questions answered

### 🎮 Main Features
- [🛑 System Commands](system.md) - Server management and player control
- [🌍 Teleportation](teleport.md) - Travel across the world
- [🤖 NPCs & Characters](npc.md) - Spawn and manage NPCs
- [🌎 World & Weather](world.md) - Manage worlds, time, and weather
- [🎨 Builder Tools](buildertools.md) - Advanced terrain editing
- [🧬 Spawning System](spawning.md) - Control NPC spawning

---

## 📚 Documentation Overview

### For Server Administrators
If you manage a server, focus on:
- [🛑 System Commands](system.md) - Essential server management
- [🧬 Spawning System](spawning.md) - Optimize NPC behavior
- [🌎 World & Weather](world.md) - World configuration

### For Builders
If you create structures, check:
- [🎨 Builder Tools](buildertools.md) - Terrain editing commands
- [🌍 Teleportation](teleport.md) - Navigate while building

### For Content Creators
If you create events or content, see:
- [🤖 NPCs & Characters](npc.md) - Create interactive NPCs
- [🛑 System Commands](system.md) - Manage players and effects

---

## 🎯 Command Categories

| Command Type | Purpose | Learn More |
|-------------|---------|-----------|
| **System** | Server management, player control, permissions | [🛑 System Commands](system.md) |
| **Teleportation** | Travel, warps, spawn points | [🌍 Teleportation](teleport.md) |
| **NPC** | Spawn and control NPCs and characters | [🤖 NPCs & Characters](npc.md) |
| **World** | Manage worlds, time, weather, terrain | [🌎 World & Weather](world.md) |
| **Building** | Terrain editing, structures, transformations | [🎨 Builder Tools](buildertools.md) |
| **Spawning** | Control automatic NPC spawning system | [🧬 Spawning System](spawning.md) |

---

## ❓ Quick Answers

### How do I teleport?
```
/tp 100 64 200         ← Teleport to coordinates
/tp PlayerName         ← Teleport to player
/spawn                 ← Go to main spawn
```
[Learn more about teleportation →](teleport.md)

### How do I manage players?
```
/kick PlayerName       ← Remove player
/ban PlayerName        ← Ban player
/op add PlayerName     ← Grant admin
```
[Learn more about system commands →](system.md)

### How do I create NPCs?
```
/npc spawn goblin              ← Spawn NPC
/npc spawn goblin --count=10   ← Spawn multiple
/npc freeze                    ← Freeze all
```
[Learn more about NPCs →](npc.md)

### How do I edit terrain?
```
/pos1                  ← Mark point 1
/pos2                  ← Mark point 2
/copy                  ← Copy area
/paste                 ← Paste elsewhere
```
[Learn more about building →](buildertools.md)

### How do I change time/weather?
```
/time set 12           ← Set noon
/weather set rain      ← Change weather
```
[Learn more about world management →](world.md)

---

## 📖 Understanding Command Syntax

All commands follow a pattern. Learn the symbols:

| Symbol | Meaning | Example |
|--------|---------|---------|
| `<required>` | You must provide this | `/tp <x> <y> <z>` |
| `[optional]` | You can skip this | `/spawn [player]` |
| `--flag` | Named parameter | `--count=5` |
| `~` | Relative coordinate | `/tp ~10 ~ ~` |

[Full symbol guide →](guide.md)

---

## 🔗 Related Documentation

- **[Craftserve Docs](../../README.md)** - Main Craftserve documentation
- **[Hytale Official](https://hytale.com)** - Official Hytale website
- **[FAQ](faq.md)** - Common questions answered

---

## ✅ Tips for Success

1. **Use Tab for help** - Type a partial command and press Tab to autocomplete
2. **Check permissions** - Some commands require operator status
3. **Read error messages** - They tell you what went wrong
4. **Use relative coordinates** - `~10 ~ ~` is easier than calculating exact coords
5. **Create warps** - Use `/warp set` for frequently visited places

---

## 🆘 Need Help?

- Can't find a command? Check [❓ FAQ](faq.md)
- Don't understand syntax? Read [📖 Symbol Guide](guide.md)
- Looking for specific feature? Use the search or browse by category above

**Happy playing!** 🎮
