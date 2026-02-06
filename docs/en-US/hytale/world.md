---
title: "🌎 World and Weather Commands"
description: "Manage worlds, time of day, weather, chunks, lighting and blocks."
---

# 🌎 World and Weather

Commands for managing the world and its properties. Included in WorldPlugin.

**Namespace:** `hytale.command.*`

## 📂 Categories

| Category | Description |
|----------|-------------|
| [**World Management**](#world-management) | `/world list`, `/world add` - Create and load worlds |
| [**Time of Day**](#time-of-day) | `/time set`, `/time dilation` - Time control |
| [**Weather**](#weather) | `/weather set` - Change weather |
| [**Chunks and Terrain**](#chunks-and-terrain) | `/chunk info`, `/chunk regenerate` - Terrain management |
| [**Blocks**](#blocks) | `/block set`, `/block get` - Single blocks |
| [**Lighting**](#lighting) | `/lighting` - Light control |

## 🎯 Quick Reference

```
/world list                    ← Show all worlds
/world add my_map              ← Create new world
/time set 12                   ← Set noon
/time dawn                     ← Dawn
/weather set clear             ← Sunny weather
/weather set rain              ← Rain
/weather set thunder           ← Thunderstorm
/chunk regenerate              ← Rebuild terrain
/block set stone 100 64 200    ← Place block
```

## 📖 Detailed Sections

### World Management
Create and manage worlds:
- `/world list` - Show worlds
- `/world add <name>` - Create new
- `/world remove <name>` - Remove world
- `/world load <name>` - Load world
- `/world save [name]` - Save world
- `/world settings` - Settings

### Time of Day
Control time flow:
- `/time` - Show current time
- `/time set <hour>` - Set time (0-24)
- `/time dawn` - Dawn
- `/time pause` - Stop time
- `/time dilation <multiplier>` - Time speed

### Weather
Change weather conditions:
- `/weather get` - Show weather
- `/weather set <type>` - Set weather
  - `clear` - Clear
  - `rain` - Rain
  - `thunder` - Thunderstorm

### Chunks and Terrain
Manage terrain chunks:
- `/chunk info` - Chunk information
- `/chunk regenerate` - Restore original terrain
- `/chunks` - Advanced operations

### Blocks
Single block operations:
- `/block set <block>` - Place block
- `/block get` - Block information

### Lighting
Manage lighting:
- `/lighting info` - Information
- `/lighting invalidate` - Rebuild light map

## 💡 Practical Examples

### Change Time of Day
```
/time set 0        ← Midnight
/time set 6        ← Morning
/time set 12       ← Noon
/time set 18       ← Evening
/time set 23.5     ← Almost midnight
```

### Change Weather
```
/weather set clear     ← Beautiful weather, sunshine
/weather set rain      ← Regular rain
/weather set thunder   ← Thunderstorm
```

### Create New World
```
/world add my_new_map
/world load my_new_map
```

### Faster Time Flow
```
/time dilation 2.0    ← Time flows 2x faster
/time dilation 0.5    ← Time flows half as fast
/time dilation 1.0    ← Normal time
```

### Freeze Time
```
/time pause           ← Time stops
/time pause           ← Typing again resumes
```

---

## 🕐 Time of Day Explained

| Time | Hour | Description |
|------|------|-------------|
| **Midnight** | 0 | Dark night, mobs appear |
| **Morning** | 6 | Sun rises |
| **Morning** | 8 | New day |
| **Noon** | 12 | Full day, sun at zenith |
| **Evening** | 18 | Sun sets |
| **Dusk** | 20 | Dusk, hard to see |
| **Night** | 22 | Night, mobs appear |

---

## ℹ️ Information

- Worlds are independent - time changes in one don't affect others
- Chunk regeneration may take a moment - be patient!
- Weather changes immediately
- Time can be stopped and resumed at any time

---

**Next:** Select category above to see full details.
