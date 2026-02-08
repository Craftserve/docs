---
title: "❓ FAQ - Frequently Asked Questions"
description: "Answers to common questions about Hytale commands."
---

# ❓ Frequently Asked Questions

## 🏠 Home and Respawn

### Q: How do I set my home?
**A:** Stand where you want your home and type:
```
/spawn set
```
Now you can return there anytime with `/tp home`.

### Q: How do I go back to main spawn?
**A:** Type:
```
/spawn
```
Or:
```
/tp home
```

### Q: Can I have multiple homes?
**A:** By default you can have one home via `/spawn set`. However, you can create warps to multiple locations:
```
/warp set MyHome1
/warp set MyHome2
/warp go MyHome1      ← Go to first
/warp go MyHome2      ← Go to second
```

---

## 🧭 Navigation

### Q: How do I teleport to another player?
**A:** Type:
```
/tp PlayerName
```

### Q: How do I check where another player is?
**A:** Type:
```
/whereami PlayerName
```

### Q: I forgot my home coordinates - what do I do?
**A:** Type:
```
/whereami
```
This will show you where you are, then:
```
/spawn set
```
Will set a new spawn.

### Q: Can I use negative coordinates in teleport?
**A:** Yes! You can teleport anywhere:
```
/tp -100 64 -200     ← Negative coordinates ok
/tp ~-10 ~ ~         ← Relative negatives too
```

---

## 🎮 Game Modes

### Q: How do I change game mode (Adventure vs Creative)?
**A:** Type:
```
/gamemode Creative      ← Your mode
/gamemode Adventure Jane ← Jane changes mode
```

### Q: What game modes are available?
**A:**
- `Adventure` - Normal gameplay
- `Creative` - Unlimited building
- `Survival` - Hard survival mode

---

## 👥 Player Management

### Q: How do I kick a player?
**A:** As operator:
```
/kick PlayerName
```

### Q: How do I ban a player?
**A:**
```
/ban PlayerName For spam
```

### Q: How do I unban a player?
**A:**
```
/unban PlayerName
```

### Q: How do I check who is online?
**A:**
```
/who
```

---

## 🎁 Items

### Q: How do I give myself items?
**A:**
```
/give diamond            ← One diamond
/give iron_ingot --quantity=64  ← 64 iron
```

### Q: How do I give an item to another player?
**A:**
```
/give diamond Jane       ← Give Jane a diamond
```

### Q: How do I check my backpack?
**A:**
```
/inventory see
```

### Q: How do I clear my backpack?
**A:**
```
/inventory clear
```

---

## 🤖 NPCs

### Q: How do I spawn an NPC?
**A:**
```
/npc spawn goblin              ← Spawn 1 goblin
/npc spawn goblin --count=5    ← Spawn 5 goblins
/npc all                       ← Spawn all available
```

### Q: How do I freeze NPCs?
**A:**
```
/npc freeze
```

### Q: How do I remove all NPCs?
**A:**
```
/npc clean
```

---

## 🛠️ Building

### Q: How do I select an area for editing?
**A:**
```
/pos1              ← Stand at first corner
/pos2              ← Stand at second corner
```

### Q: How do I copy a structure?
**A:**
```
/copy              ← After selection
/paste             ← Paste elsewhere
```

### Q: How do I rotate copied structure?
**A:**
```
/rotate 90         ← Rotate 90 degrees
/paste             ← Paste rotated version
```

### Q: How do I fill an area with blocks?
**A:**
```
/pos1
/pos2
/setBlocks stone   ← Fill with stone
```

---

## 🌍 World

### Q: How do I change the time?
**A:**
```
/time set 12       ← Noon
/time set 0        ← Midnight
/time dawn         ← Dawn
```

### Q: How do I change weather?
**A:**
```
/weather set clear      ← Sunny
/weather set rain       ← Rain
/weather set thunder    ← Thunderstorm
```

### Q: How do I create a new world?
**A:**
```
/world add my_world
/world load my_world
```

---

## ❌ Troubleshooting

### Q: Command doesn't work
**A:** Check:
1. Spelling is correct
2. You have permissions (ask an admin)
3. You're using the right syntax

### Q: "Permission denied" message
**A:** You need operator status. Ask an admin to run:
```
/op add YourName
```

### Q: I can't teleport
**A:** Possible reasons:
- You don't have permission
- The destination is blocked
- There's a protection zone

---

**Ready to explore specific commands?**
- [🛑 System](system.md) - Server commands
- [🌍 Teleportation](teleport.md) - Travel
- [🤖 NPC](npc.md) - Characters
- [🌎 World](world.md) - World and weather
- [🎨 BuilderTools](buildertools.md) - Terrain editing
