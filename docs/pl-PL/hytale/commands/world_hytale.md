---
title: "🌎 Komendy Świata i Pogody"
description: "Zarządzanie światami, porą dnia, pogodą, chunkach, oświetleniu i blokach."
---

# 🌎 Świat i Pogoda

Komendy do zarządzania światem i jego właściwościami. Zawarte w pluginie WorldPlugin.

**Przestrzeń nazw:** `hytale.command.*`

## 📂 Kategorie

| Kategoria | Opis |
|-----------|------|
| [**Zarządzanie Światami**](#zarzadzanie-swiatami) | `/world list`, `/world add` - Tworzenie i ładowanie światów |
| [**Pora Dnia**](#pora-dnia) | `/time set`, `/time dilation` - Kontrola czasu |
| [**Pogoda**](#pogoda) | `/weather set` - Zmiana pogody |
| [**Chunki i Teren**](#chunki-i-teren) | `/chunk info`, `/chunk regenerate` - Zarządzanie terenem |
| [**Bloki**](#bloki) | `/block set`, `/block get` - Pojedyncze bloki |
| [**Oświetlenie**](#oswietlenie-1) | `/lighting` - Kontrola światła |

## 🎯 Szybka Referencja

```
/world list                    ← Pokaż wszystkie światy
/world add moja_mapa          ← Utwórz nowy świat
/time set 12                  ← Ustaw południe
/time dawn                    ← Świt
/weather set clear            ← Pogoda słoneczna
/weather set rain             ← Deszcz
/weather set thunder          ← Burza
/chunk regenerate             ← Odbuduj teren
/block set stone 100 64 200   ← Postaw blok
```

## 📖 Szczegółowe Sekcje

### Zarządzanie Światami
Tworzenie i zarządzanie światami:

- `/world list` - Pokaż światy
- `/world add <nazwa>` - Utwórz nowy
- `/world remove <nazwa>` - Usuń świat
- `/world load <nazwa>` - Załaduj świat
- `/world save [nazwa]` - Zapisz świat
- `/world settings` - Ustawienia

### Pora Dnia
Kontrola upływu czasu:

- `/time` - Pokaż bieżący czas
- `/time set <godzina>` - Ustaw czas (0-24)
- `/time dawn` - Świt
- `/time pause` - Zatrzymaj czas
- `/time dilation <mnożnik>` - Prędkość upływu

### Pogoda
Zmiana warunków pogodowych:

- `/weather get` - Pokaż pogodę
- `/weather set <typ>` - Ustaw pogodę
  - `clear` - Słonecznie
  - `rain` - Deszcz
  - `thunder` - Burza

### Chunki i Teren
Zarządzanie chunkach (porcjach terenu):

- `/chunk info` - Informacje o chunk'u
- `/chunk regenerate` - Przywróć oryginalny teren
- `/chunks` - Zaawansowane operacje

### Bloki
Pojedyncze operacje na blokach:

- `/block set <blok>` - Postaw blok
- `/block get` - Informacje o bloku

### Oświetlenie {#oswietlenie-1}
Zarządzanie oświetleniem:

- `/lighting info` - Informacje
- `/lighting invalidate` - Przebuduj mapę światła

## 💡 Praktyczne Przykłady

### Zmiana Pory Dnia
```
/time set 0        ← Północ (noc)
/time set 6        ← Poranek
/time set 12       ← Południe (dzień)
/time set 18       ← Wieczór
/time set 23.5     ← Prawie północ
```

### Zmiana Pogody
```
/weather set clear     ← Piękna pogoda, słońce
/weather set rain      ← Zwykły deszcz
/weather set thunder   ← Burza z piorunami
```

### Tworzenie Nowego Świata
```
/world add moja_nowa_mapa
/world load moja_nowa_mapa
```

### Szybszy Upływ Czasu
```
/time dilation 2.0    ← Czas płynie 2x szybciej
/time dilation 0.5    ← Czas płynie w połowę szybciej
/time dilation 1.0    ← Normalny czas
```

### Zamrażanie Czasu
```
/time pause           ← Czas się zatrzymuje
/time pause           ← Ponowne wpisanie wznawia
```

---

## 🕐 Pora Dnia Wyjaśniona

| Czas | Godzina | Opis |
|------|---------|------|
| **Północ** | 0 | Ciemna noc, pojawiają się potwory |
| **Poranek** | 6 | Słońce wschodzi |
| **Poranek** | 8 | Nowy dzień |
| **Południe** | 12 | Pełny dzień, słońce w zenicie |
| **Wieczór** | 18 | Słońce zachodzi |
| **Zmierzch** | 20 | Zmroku, słabo widać |
| **Noc** | 22 | Noc, pojawiają się potwory |

---

## ℹ️ Informacje

- Światy są niezależne - zmiana czasu w jednym nie wpływa na inne
- Regeneracja chunk'u może trwać chwilę - bądź cierpliwy!
- Pogoda zmienia się natychmiast
- Czas może być wznowiony i wznowiony w każdej chwili

---

**Dalej:** Wybierz kategorię powyżej aby zobaczyć pełne szczegóły.


