---
title: "🤖 NPC and Character Commands"
description: "Spawning NPCs, AI control, pathfinding, behaviors and much more."
---

# 🤖 NPCs and Characters

Commands for managing non-player characters (NPCs). Included in NPCPlugin.

**Namespace:** `hytale.command.npc.*`

## 📂 Categories

| Category | Description |
|----------|-------------|
| [**Spawning NPCs**](#spawning-npcs) | `/npc spawn`, `/npc all` - Create characters |
| [**NPC Control**](#npc-control) | `/npc freeze`, `/npc clean` - Manage NPCs |
| [**NPC Appearance**](#npc-appearance) | `/npc appearance` - Models and skins |
| [**AI and Behavior**](#ai-and-behavior) | `/npc path`, `/npc flock` - Artificial intelligence |
| [**Communication**](#communication) | `/npc message`, `/npc give` - Interactions |
| [**NPC Debugging**](#npc-debugging) | `/npc debug`, `/npc dump` - Developer tools |

## 🎯 Quick Reference

```
/npc spawn goblin                    ← Spawn 1 goblin
/npc spawn goblin --count=5          ← Spawn 5 goblins
/npc spawn wolf --radius=15          ← Larger spawn radius
/npc all                             ← Spawn all roles
/npc freeze                          ← Freeze NPCs
/npc thaw                            ← Unfreeze NPCs
/npc clean                           ← Remove all
/npc give diamond_sword              ← Give item
/npc message Hi!                     ← Send message
```

## 📖 Detailed Sections

### Spawning NPCs
Create new characters:
- `/npc spawn <role>` - Spawn NPC
- `/npc spawn <role> --count=number` - Multiple at once
- `/npc spawn <role> --radius=number` - Within radius
- `/npc spawn <role> --frozen` - Frozen on start
- `/npc spawn <role> --scale=number` - Change size
- `/npc all` - All available roles

### NPC Control
Manage existing NPCs:
- `/npc freeze` - Stop all
- `/npc thaw` - Resume movement
- `/npc clean` - Remove all
- `/npc dump` - NPC information

### NPC Appearance
Change character appearance:
- `/npc appearance <model>` - Change appearance
- `/npc role <role>` - Change role

### AI and Behavior
Advanced AI control:
- `/npc path` - Set movement path
- `/npc flock` - Group behavior
- `/npc blackboard` - AI data
- `/npc attack` - Attacks
- `/npc step` - Simulation step

### Communication
Interact with NPCs:
- `/npc message <message>` - Send message above head
- `/npc give <item>` - Give item to hold
- `/npc give nothing` - Remove item

### NPC Debugging
Tools for advanced users:
- `/npc debug` - Debug flags
- `/npc dump --json` - JSON format
- `/npc benchmark` - Performance test

## 💡 Practical Examples

### Creating a Group of Goblins
```
/npc spawn goblin --count=10 --radius=20
```
Will spawn 10 goblins within a 20 block radius.

### Freezing Everyone
```
/npc freeze --all
```
All NPCs (and items) will stop in place.

### Giving Weapons to Character
```
/npc give diamond_sword
```
The nearest NPC will hold a diamond sword.

### Sending a Message
```
/npc message Welcome players! --all
```
All NPCs will show this message.

---

## 📚 Available NPC Roles

Below is an example list of available roles:
- `Goblin` - Green small creatures
- `Orc` - Large green creatures
- `Wolf` - Wolves
- `Skeleton` - Skeletons
- `Human` - Humans
- And many more...

See the full list by typing `/npc spawn` in-game.

---

## ℹ️ Information

- NPCs can be frozen without server impact
- History can be undone and redone
- Each NPC has a unique ID
- Custom roles can be created with mods

---

**Next:** Select category above to see full details.
