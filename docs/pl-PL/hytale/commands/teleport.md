---
title: "🌍 Komendy Teleportacji"
description: "Teleportacja do współrzędnych, graczy, warp'ów, home, spawn i wiele więcej."
---

# 🌍 Teleportacja i Podróże

Komendy do podróżowania po świecie. Zawarte w pluginie TeleportPlugin.

**Przestrzeń nazw:** `hytale.command.*`

## 📂 Kategorie

| Kategoria | Opis |
|-----------|------|
| [**Podstawowa Teleportacja**](#podstawowa-teleportacja) | `/tp` - Teleportuj do współrzędnych lub graczy |
| [**Dom i Spawn**](#dom-i-spawn) | `/spawn`, `/tp home` - Punkt respawnu i dom |
| [**Historia Teleportacji**](#historia-teleportacji) | `/tp back`, `/tp forward`, `/tp history` - Cofanie teleportacji |
| [**Warp'y**](#warpy) | `/warp go`, `/warp set` - Punkty teleportacji |

## 🎯 Szybka Referencja

```
/tp 100 64 200                 ← Teleport do współrzędnych
/tp Ania                       ← Teleport do gracza
/tp home                       ← Do domu
/spawn                         ← Na spawn
/spawn set                     ← Ustaw spawn tutaj
/warp go Arena                 ← Do warpu Arena
/warp set MojeMiejsce          ← Utwórz nowy warp
/tp back                       ← Cofnij ostatni teleport
```

## 📖 Szczegółowe Sekcje

### Podstawowa Teleportacja
Teleportuj się wszędzie:

- `/tp <x> <y> <z>` - Do współrzędnych
- `/tp <gracz>` - Do gracza
- `/tp all <x> <y> <z>` - Wszystkie graczy na jedno miejsce
- `/tp top` - Na powierzchnię

### Dom i Spawn
Punkty respawnu:

- `/spawn` - Teleport na główny spawn
- `/spawn set` - Ustaw własny spawn
- `/spawn default` - Reset spawnu
- `/tp home` - Do swojego domu

### Historia Teleportacji
Cofaj teleportacje:

- `/tp back [liczba]` - Wróć do poprzedniej pozycji
- `/tp forward [liczba]` - Ponów cofniętą teleportację
- `/tp history` - Pokaż historię

### Warp'y
Zapisane lokalizacje:

- `/warp go <nazwa>` - Teleport do warpu
- `/warp set <nazwa>` - Utwórz nowy warp
- `/warp remove <nazwa>` - Usuń warp
- `/warp list` - Pokaż dostępne warpy

## 💡 Praktyczne Przykłady

### Teleport do Współrzędnych
```
/tp 100 64 200                    ← Absolutne współrzędne
/tp ~10 ~ ~                       ← 10 bloków na wschód
/tp ~-5 ~10 ~5                    ← Kompleksowy relatywny teleport
```

### Teleport do Gracza
```
/tp Ania                          ← Idź do Ani
/tp Piotr                         ← Idź do Piotra
```

### Teleport z Kierunkiem
```
/tp 0 100 0 --yaw=0              ← Patrz na północ (0°)
/tp 0 100 0 --yaw=90             ← Patrz na wschód (90°)
/tp 0 100 0 --yaw=180            ← Patrz na południe (180°)
/tp 0 100 0 --yaw=270            ← Patrz na zachód (270°)
```

### Warp'y
```
/warp go Arena                    ← Idź na Arenę
/warp set MojaArena              ← Utwórz warp tutaj
/warp list                        ← Pokaż wszystkie warpy
```

---

## ℹ️ Informacje

- Teleportacja doświadczonych graczy może być wyłączona na pewnych obszarach
- Historia teleportacji przechowuje do 50 ostatnich pozycji
- Warp'y są globalnie dostępne dla wszystkich graczy
- Home (dom) to osobista lokalizacja każdego gracza

---

**Dalej:** Wybierz kategorię powyżej aby zobaczyć pełne szczegóły.


