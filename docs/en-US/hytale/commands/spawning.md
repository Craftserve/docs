---
title: "🧬 NPC Spawning System"
description: "Advanced commands for controlling NPC spawning on the server."
---

# 🧬 NPC Spawning System

Commands for managing NPC spawning system on the server. Included in SpawningPlugin.

**Namespace:** `hytale.command.*` (sometimes `hytale.command.spawning.*`)

## 🎯 Quick Reference

```
/spawning enable               ← Enable automatic spawning
/spawning disable              ← Disable spawning
/spawning populate             ← Immediately spawn everywhere
/spawning beacons              ← Beacon information
/spawning stats                ← Spawning statistics
```

## 📖 Detailed Sections

### `/spawning enable`
Enables automatic NPC spawning on the server.

**Permissions:** `hytale.command.spawning.enable`

```
/spawning enable
```

**Effect:** NPCs will spawn naturally throughout the world.

---

### `/spawning disable`
Disables automatic NPC spawning.

**Permissions:** `hytale.command.spawning.disable`

```
/spawning disable
```

**Effect:** NPCs won't spawn automatically. You can still use `/npc spawn`.

---

### `/spawning populate`
Immediately spawns NPCs everywhere on the map.

**Permissions:** `hytale.command.spawning.populate`

```
/spawning populate
```

**Effect:** Quick world population with NPCs. Useful after enabling spawning.

---

### `/spawning beacons`
Shows beacon spawning information.

**Permissions:** `hytale.command.spawning.beacons`

```
/spawning beacons
```

**Effect:** Show where NPCs spawn.

---

### `/spawning stats`
Shows spawning statistics.

**Permissions:** `hytale.command.spawning.stats`

```
/spawning stats
```

**Effect:** Information about spawn count, beacons, etc.

---

## 💡 Practical Examples

### Restore Natural Spawning After Cleanup
```
/npc clean              ← Remove all NPCs
/spawning populate      ← Spawn them back
```

### Disable Spawning During Event
```
/spawning disable       ← NPCs won't spawn
/npc spawn goblin --count=10   ← But you can spawn them manually
```

### Enable After Event
```
/spawning enable        ← Natural spawning returns
```

---

## ℹ️ Information

- Spawning can be resource-intensive - disable if server slows down
- Beacons are points from which NPCs spawn
- NPC population grows naturally over time
- Spawning respects world settings

---

## Related Commands

- [🤖 `/npc spawn`](npc.md) - Manual spawning
- [🤖 `/npc clean`](npc.md) - Remove all NPCs
- [🤖 `/npc freeze`](npc.md) - Freeze NPCs

---

**Back:** [🧬 NPC Spawning System](spawning.md)


