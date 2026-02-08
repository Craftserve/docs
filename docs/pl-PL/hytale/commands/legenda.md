---
title: "Legenda Symboli i Notacji"
description: "Przewodnik po symbolach użytych w dokumentacji komend."
---

# 📖 Legenda Symboli

Aby prawidłowo czytać dokumentację, musisz znać poniższe symbole:

## Argumenty

| Symbol | Przykład | Znaczenie | Praktyka |
|--------|----------|-----------|----------|
| `<argument>` | `/tp <x> <y> <z>` | **Wymagany** - musisz go podać | `/tp 100 64 200` |
| `[argument]` | `/tp [gracz]` | **Opcjonalny** - możesz pominąć | `/tp` lub `/tp Ania` |
| `--flaga` | `/damage --amount=5` | **Parametr nazwany** | `/damage --amount=5` |
| `[--flaga]` | `/stop [--crash]` | **Opcjonalna flaga** | `/stop` lub `/stop --crash` |

## Wybory

| Symbol | Przykład | Znaczenie |
|--------|----------|-----------|
| `\|` | `/whitelist enable\|disable` | Wybierz **jedną** z opcji |
| `...` | `/ban <gracz> [powód...]` | Możesz podać **wiele** wartości |

## Współrzędne

| Symbol | Przykład | Znaczenie |
|--------|----------|-----------|
| `~` | `/tp ~10 ~ ~` | **Relatywne** - względem bieżącej pozycji |
| Liczba | `/tp 100 64 200` | **Bezwzględne** - dokładne współrzędne |

- `~10` = 10 bloków od Ciebie
- `~-5` = 5 bloków w przeciwnym kierunku
- `~` = dokładnie gdzie jesteś

## Parametry Nazwane

Parametry poprzedzane `--` mogą być:

```
--nazwa=wartość    ← Zadaj konkretną wartość
--flaga            ← Włącz opcję (logiczna)
--flaga=true       ← Jawnie włącz
--flaga=false      ← Jawnie wyłącz
```

## Domyślne Wartości

Gdy ujrzysz `[--argument=domyślna]`, oznacza to:

```
[--quantity=1]     ← Jeśli nie podasz, użyta będzie wartość 1
[--duration=100]   ← Jeśli nie podasz, użyta będzie wartość 100
```

## Grupy Graczy

| Symbol | Znaczenie |
|--------|-----------|
| `@s` | **Siebie** (sender) |
| `@p` | **Najbliższego** gracza |
| `@a` | **Wszystkich** graczy |
| `@r` | **Losowego** gracza |

## Przykłady Praktyczne

### Prosty Teleport

```
/tp 100 64 200
```
- `100` = współrzędna X
- `64` = współrzędna Y (wysokość)
- `200` = współrzędna Z

### Teleport z Rotacją

```
/tp 100 64 200 --yaw=45 --pitch=0
```
- `--yaw=45` = obrót poziomo (kierunek)
- `--pitch=0` = obrót pionowo (patrzenie w górę/dół)

### Danie Przedmiotów

```
/give diamond --quantity=10
```
- `diamond` = id przedmiotu (wymagany)
- `--quantity=10` = ile sztuk (opcjonalnie, domyślnie 1)

### Spawnowanie NPC

```
/npc spawn goblin --count=5 --radius=10
```
- `goblin` = typ NPC (wymagany)
- `--count=5` = 5 NPC (opcjonalnie, domyślnie 1)
- `--radius=10` = w promieniu 10 bloków (opcjonalnie, domyślnie 8)

### Relatywne Współrzędne

```
/tp ~10 ~ ~-5
```
- `~10` = 10 bloków na wschód (pozytywny X)
- `~` = dokładnie gdzie jesteś (Y)
- `~-5` = 5 bloków na południe (negatywny Z)

---

## Wskazówki

✅ **Tab do autouzupełniania** - Wciśnij Tab po wpisaniu części komendy
✅ **Błędy są przyjazne** - Jeśli zrobisz błąd, serwer powie Ci czego brakuje
✅ **Sprawdź uprawnienia** - Jeśli komenda nie działa, możliwe że nie masz uprawnień

---

**Gotowy do zaglądania do konkretnych komend?**
- [🛑 System](system.md) - Komendy serwerowe
- [🌍 Teleportacja](teleport.md) - Podróżowanie
- [🤖 NPC](npc.md) - Postacie
- [🌎 Świat](world_hytale.md) - Świat i pogoda
- [🎨 BuilderTools](buildertools.md) - Edycja terenu
