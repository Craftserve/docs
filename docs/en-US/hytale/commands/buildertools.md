---
title: "🎨 Builder Tools"
description: "Selection, copying, terrain editing, transformations and prefabs for creators."
---

# 🎨 Builder Tools

Advanced commands for terrain editing and building. Included in BuilderToolsPlugin.

**Namespace:** `hytale.editor.*`

> **Warning:** These commands are primarily available in Creative mode. Require editor permissions.

## 📂 Categories

| Category | Description |
|----------|-------------|
| [**Area Selection**](#area-selection) | `/pos1`, `/pos2`, `/expand`, `/contract` - Define regions |
| [**Fill and Replace**](#fill-and-replace) | `/setBlocks`, `/replace`, `/clearBlocks` - Bulk operations |
| [**Clipboard**](#clipboard) | `/copy`, `/paste`, `/cut`, `/undo`, `/redo` - Edit with history |
| [**Transformations**](#transformations) | `/move`, `/rotate`, `/flip`, `/hollow` - Modifications |
| [**Prefabs**](#prefabs) | `/prefab` - Ready-made structures |
| [**Brushes**](#brushes) | `/scriptedbrushes` - Advanced tools |

## 🎯 Quick Reference

```
/pos1                       ← Mark point 1
/pos2                       ← Mark point 2
/expand 10                  ← Expand selection
/contract 5                 ← Contract selection
/setBlocks stone            ← Fill with stone
/copy                       ← Copy to clipboard
/paste                      ← Paste from clipboard
/undo                       ← Undo last action
/rotate 90                  ← Rotate 90 degrees
/flip north                 ← Mirror/flip
```

## 📖 Detailed Sections

### Area Selection
Define what you want to edit:

- `/pos1` - First corner
- `/pos2` - Second corner
- `/expand <number>` - Expand
- `/contract <number>` - Contract
- `/deselect` - Clear selection

### Fill and Replace
Bulk operations on blocks:

- `/setBlocks <block>` - Fill entire area
- `/fillBlocks <pattern>` - Pattern fill
- `/replace [from] <to>` - Replace blocks
- `/clearBlocks` - Remove everything
- `/gmask <mask>` - Edit only specific blocks

### Clipboard
Cut, copy, paste:

- `/copy` - Copy
- `/cut` - Cut
- `/paste` - Paste
- `/undo [number]` - Undo
- `/redo [number]` - Redo

### Transformations
Modify structure:

- `/move <direction> <number>` - Move
- `/stack <number>` - Duplicate multiple times
- `/rotate <degrees>` - Rotate
- `/flip <axis>` - Mirror flip
- `/hollow` - Hollow out
- `/wall` - Create walls

### Prefabs
Ready-made structures:

- `/prefab` - Browse prefabs
- `/editprefab` - Edit prefabs
- `/path` - Manage paths

### Brushes
Advanced tools:

- `/scriptedbrushes` - Load scripted brushes

## 💡 Practical Examples

### Copy and Paste Structure

1. Select area:
```
/pos1                    ← Stand at point 1
/pos2                    ← Stand at point 2
```

2. Copy:
```
/copy
```

3. Move to new location and paste:
```
/paste
```

### Fill Area with Stone

```
/pos1
/pos2
/setBlocks stone
```

### Rotate Structure

```
/pos1
/pos2
/rotate 90              ← Rotate 90 degrees
/paste                  ← Paste rotated shape
```

### Mirror Flip

```
/flip north             ← Flip on north-south axis
/flip west              ← Flip on east-west axis
```

### Hollow Out Structure

```
/pos1
/pos2
/hollow stone           ← Leave stone walls
```

### Move Building

```
/pos1
/pos2
/move up 5              ← Move 5 blocks up
/move north 10          ← Move 10 blocks north
```

### Duplicate Pattern Multiple Times

```
/copy
/stack 5                ← Repeat 5 times
```

---

## 🗺️ Directions

| Direction | Meaning |
|-----------|---------|
| `up` | Up (Y+) |
| `down` | Down (Y-) |
| `north` | North (Z-) |
| `south` | South (Z+) |
| `east` | East (X+) |
| `west` | West (X-) |

---

## 🎨 Popular Blocks

Most commonly used in selections:

- `stone` - Stone
- `dirt` - Dirt
- `grass_block` - Grass
- `oak_log` - Oak wood
- `oak_planks` - Oak planks
- `glass` - Glass
- `diamond_block` - Diamond block
- `cobblestone` - Cobblestone
- `sand` - Sand

---

## ℹ️ Information

- All edits can be undone with `/undo`
- Operations execute immediately
- Selection is preserved until `/deselect`
- Prefabs make building complex structures easier

---

## 💡 Pro Tip

You can combine operations:
1. Select and copy
2. Paste multiple times (`/stack`)
3. Rotate (`/rotate`)
4. Move (`/move`)
5. Undo if something goes wrong (`/undo`)

---

**Next:** Select category above to see full details.


