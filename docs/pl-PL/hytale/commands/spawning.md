---
title: "🧬 System Spawowania NPC"
description: "Zaawansowane komendy do kontroli spawowania postaci na serwerze."
---

# 🧬 System Spawowania NPC

Komendy do zarządzania systemem spawowania NPC na serwerze. Zawarte w pluginie SpawningPlugin.

**Przestrzeń nazw:** `hytale.command.*` (czasami `hytale.command.spawning.*`)

## 🎯 Szybka Referencja

```
/spawning enable               ← Włącz automatyczne spawowanie
/spawning disable              ← Wyłącz spawowanie
/spawning populate             ← Natychmiast spawnuj wszędzie
/spawning beacons              ← Informacje o beacon'ach
/spawning stats                ← Statystyki spawowania
```

## 📖 Szczegółowe Sekcje

### `/spawning enable`
Włącza automatyczne spawowanie NPC na serwerze.

**Uprawnienia:** `hytale.command.spawning.enable`

```
/spawning enable
```

**Efekt:** NPC będą se spawnować w naturalny sposób na świecie.

---

### `/spawning disable`
Wyłącza automatyczne spawowanie NPC.

**Uprawnienia:** `hytale.command.spawning.disable`

```
/spawning disable
```

**Efekt:** NPC nie będą się spawnować automatycznie. Możesz nadal używać `/npc spawn`.

---

### `/spawning populate`
Natychmiast spawnuje NPC wszędzie na mapie.

**Uprawnienia:** `hytale.command.spawning.populate`

```
/spawning populate
```

**Efekt:** Szybkie wypełnienie świata NPC. Przydatne po włączeniu spawowania.

---

### `/spawning beacons`
Wyświetla informacje o beacon'ach spawnienia.

**Uprawnienia:** `hytale.command.spawning.beacons`

```
/spawning beacons
```

**Efekt:** Pokaż gdzie spawnują się NPC.

---

### `/spawning stats`
Wyświetla statystyki spawowania.

**Uprawnienia:** `hytale.command.spawning.stats`

```
/spawning stats
```

**Efekt:** Informacje o liczbie spawn'ów, beacon'ach, itp.

---

## 💡 Praktyczne Przykłady

### Przywróć Naturalne Spawowanie Po Czyszczeniu
```
/npc clean              ← Usuń wszystkich NPC
/spawning populate      ← Spawnuj je z powrotem
```

### Wyłącz Spawowanie Podczas Event'u
```
/spawning disable       ← NPC nie będą się spawnować
/npc spawn goblin --count=10   ← Ale możesz je spawować ręcznie
```

### Włącz Po Event'cie
```
/spawning enable        ← Naturalne spawowanie wraca
```

---

## ℹ️ Informacje

- Spawowanie może być zasobochłonne - wyłącz je jeśli serwer się spowalnia
- Beacon'y to punkty, z których spawnują się NPC
- Populacja NPC rośnie naturalnie z czasem
- Spawowanie respektuje ustawienia świata

---

## Powiązane Komendy

- [🤖 `/npc spawn`](npc.md) - Ręczne spawnowanie
- [🤖 `/npc clean`](npc.md) - Usuwanie wszystkich NPC
- [🤖 `/npc freeze`](npc.md) - Zatrzymywanie NPC

---

**Wróć:** [🧬 System Spawowania](spawning.md)
