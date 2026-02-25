---
title: "Legend of Symbols and Notation"
description: "Guide to symbols used in command documentation."
---

# 📖 Symbol Legend

To properly read the documentation, you need to know the following symbols:

## Arguments

| Symbol | Example | Meaning | Practice |
|--------|---------|---------|----------|
| `<argument>` | `/tp <x> <y> <z>` | **Required** - you must provide it | `/tp 100 64 200` |
| `[argument]` | `/tp [player]` | **Optional** - you can skip it | `/tp` or `/tp Jane` |
| `--flag` | `/damage --amount=5` | **Named parameter** | `/damage --amount=5` |
| `[--flag]` | `/stop [--crash]` | **Optional flag** | `/stop` or `/stop --crash` |

## Choices

| Symbol | Example | Meaning |
|--------|---------|---------|
| `\|` | `/whitelist enable\|disable` | Choose **one** option |
| `...` | `/ban <player> [reason...]` | You can provide **multiple** values |

## Coordinates

| Symbol | Example | Meaning |
|--------|---------|---------|
| `~` | `/tp ~10 ~ ~` | **Relative** - relative to your location |
| Number | `/tp 100 64 200` | **Absolute** - exact coordinates |

- `~10` = 10 blocks from you
- `~-5` = 5 blocks in opposite direction
- `~` = exactly where you are

## Named Parameters

Parameters preceded by `--` can be:

```
--name=value    ← Set specific value
--flag          ← Enable option (boolean)
--flag=true     ← Explicitly enable
--flag=false    ← Explicitly disable
```

## Default Values

When you see `[--argument=default]`, it means:

```
[--quantity=1]     ← If you don't provide, value 1 will be used
[--duration=100]   ← If you don't provide, value 100 will be used
```

## Player Groups

| Symbol | Meaning |
|--------|---------|
| `@s` | **Self** (sender) |
| `@p` | **Nearest** player |
| `@a` | **All** players |
| `@r` | **Random** player |

## Practical Examples

### Simple Teleport

```
/tp 100 64 200
```
- `100` = X coordinate
- `64` = Y coordinate (height)
- `200` = Z coordinate

### Teleport with Rotation

```
/tp 100 64 200 --yaw=45 --pitch=0
```
- `--yaw=45` = horizontal rotation (direction)
- `--pitch=0` = vertical rotation (up/down look)

### Give Items

```
/give diamond --quantity=10
```
- `diamond` = item id (required)
- `--quantity=10` = how many (optional, default 1)

### Spawn NPC

```
/npc spawn goblin --count=5 --radius=10
```
- `goblin` = NPC type (required)
- `--count=5` = 5 NPCs (optional, default 1)
- `--radius=10` = within 10 block radius (optional, default 8)

### Relative Coordinates

```
/tp ~10 ~ ~-5
```
- `~10` = 10 blocks east (positive X)
- `~` = exactly where you are (Y)
- `~-5` = 5 blocks south (negative Z)

---

## Tips

✅ **Tab for autocomplete** - Press Tab while typing to autocomplete
✅ **Errors are friendly** - If you make a mistake, server will tell you what's wrong
✅ **Check permissions** - If command doesn't work, you might not have permission

---

**Ready to explore specific commands?**
- [🛑 System](system.md) - Server commands
- [🌍 Teleportation](teleport.md) - Travel
- [🤖 NPC](npc.md) - Characters
- [🌎 World](world.md) - World and weather
- [🎨 BuilderTools](buildertools.md) - Terrain editing
