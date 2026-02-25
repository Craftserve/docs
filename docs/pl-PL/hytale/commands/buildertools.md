---
title: "🎨 Narzędzia Budowniczego"
description: "Zaznaczanie, kopiowanie, edycja terenu, transformacje i prefaby dla twórców."
---

# 🎨 Narzędzia Budowniczego

Zaawansowane komendy do edycji terenu i budownictwa. Zawarte w pluginie BuilderToolsPlugin.

**Przestrzeń nazw:** `hytale.editor.*`

> **Uwaga:** Te komendy są głównie dostępne w trybie Creative. Wymagają uprawnień edytora.

## 📂 Kategorie

| Kategoria | Opis |
|-----------|------|
| [**Zaznaczanie Obszarów**](#zaznaczanie-obszarow) | `/pos1`, `/pos2`, `/expand`, `/contract` - Definiowanie regionów |
| [**Wypełnianie i Zamiana**](#wypelnianie-i-zamiana) | `/setBlocks`, `/replace`, `/clearBlocks` - Operacje zbiorowe |
| [**Schowek**](#schowek) | `/copy`, `/paste`, `/cut`, `/undo`, `/redo` - Edycja z historią |
| [**Transformacje**](#transformacje) | `/move`, `/rotate`, `/flip`, `/hollow` - Modyfikacje |
| [**Prefaby**](#prefaby) | `/prefab` - Gotowe struktury |
| [**Pędzle**](#pedzle) | `/scriptedbrushes` - Zaawansowane narzędzia |

## 🎯 Szybka Referencja

```
/pos1                       ← Zaznacz punkt 1
/pos2                       ← Zaznacz punkt 2
/expand 10                  ← Powiększ zaznaczenie
/contract 5                 ← Zmniejsz zaznaczenie
/setBlocks stone            ← Wypełnij kamieniem
/copy                       ← Skopiuj do schowka
/paste                      ← Wklej ze schowka
/undo                       ← Cofnij ostatnią akcję
/rotate 90                  ← Obróć 90 stopni
/flip north                 ← Odbij
```

## 📖 Szczegółowe Sekcje

### Zaznaczanie Obszarów
Definiowanie co chcesz edytować:
- `/pos1` - Pierwszy róg
- `/pos2` - Drugi róg
- `/expand <liczba>` - Powiększ
- `/contract <liczba>` - Zmniejsz
- `/deselect` - Wyczyść zaznaczenie

### Wypełnianie i Zamiana {#wypelnianie-i-zamiana}
Operacje zbiorowe na blokach:
- `/setBlocks <blok>` - Wypełnij całość
- `/fillBlocks <wzór>` - Wzór wypełniający
- `/replace [z] <na>` - Zamień bloki
- `/clearBlocks` - Usuń wszystko
- `/gmask <maska>` - Edytuj tylko określone bloki

### Schowek
Wytnij, kopiuj, wklej:
- `/copy` - Skopiuj
- `/cut` - Wytnij
- `/paste` - Wklej
- `/undo [liczba]` - Cofnij
- `/redo [liczba]` - Ponów

### Transformacje
Modyfikuj strukturę:
- `/move <kierunek> <liczba>` - Przesuń
- `/stack <liczba>` - Duplikuj wiele razy
- `/rotate <stopnie>` - Obróć
- `/flip <oś>` - Odbij lustrzanie
- `/hollow` - Wydrąż
- `/wall` - Stwórz ściany

### Prefaby
Gotowe struktury:
- `/prefab` - Przeglądaj prefaby
- `/editprefab` - Edytuj prefaby
- `/path` - Zarządzaj ścieżkami

### Pędzle
Zaawansowane narzędzia:
- `/scriptedbrushes` - Ładuj pędzle skryptowe

## 💡 Praktyczne Przykłady

### Kopiej i Wklej Strukturę

1. Zaznacz obszar:
```
/pos1                    ← Stań w punkcie 1
/pos2                    ← Stań w punkcie 2
```

2. Skopiuj:
```
/copy
```

3. Przesuń się na nowe miejsce i wklej:
```
/paste
```

### Wypełnij Obszar Kamieniem

```
/pos1
/pos2
/setBlocks stone
```

### Obróć Strukturę

```
/pos1
/pos2
/rotate 90              ← Obróć o 90 stopni
/paste                  ← Wklej obrócony kształt
```

### Odbij Lustrzanie

```
/flip north             ← Odbij na osi północ-południe
/flip west              ← Odbij na osi wschód-zachód
```

### Wydrąż Strukturę

```
/pos1
/pos2
/hollow stone           ← Pozostaw kamienne ściany
```

### Przesuń Budynek

```
/pos1
/pos2
/move up 5              ← Przesuń 5 bloków w górę
/move north 10          ← Przesuń 10 bloków na północ
```

### Duplikuj Wzór Wiele Razy

```
/copy
/stack 5                ← Powtórz 5 razy
```

---

## 🗺️ Kierunki

| Kierunek | Znaczenie |
|----------|-----------|
| `up` | Góra (Y+) |
| `down` | Dół (Y-) |
| `north` | Północ (Z-) |
| `south` | Południe (Z+) |
| `east` | Wschód (X+) |
| `west` | Zachód (X-) |

---

## 🎨 Bloki Popularne

Najczęściej używane w zaznaczeniach:
- `stone` - Kamień
- `dirt` - Ziemia
- `grass_block` - Trawa
- `oak_log` - Drewno dębu
- `oak_planks` - Deski dębu
- `glass` - Szkło
- `diamond_block` - Blok diamentu
- `cobblestone` - Bruk
- `sand` - Piasek

---

## ℹ️ Informacje

- Wszystkie edycje mogą być cofane za pomocą `/undo`
- Operacje są wykonywane natychmiast
- Zaznaczenie jest zachowywane do czasu `/deselect`
- Prefaby ułatwiają tworzenie skomplikowanych struktur

---

## 💡 Wskazówka Pro

Możesz łączyć operacje:
1. Zaznacz i skopiuj
2. Wklej wiele razy (`/stack`)
3. Obróć (`/rotate`)
4. Przesuń (`/move`)
5. Cofnij jeśli coś poszło nie tak (`/undo`)

---

**Dalej:** Wybierz kategorię powyżej aby zobaczyć pełne szczegóły.
