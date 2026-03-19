---
title: "Komendy Hytale - Kompletny Poradnik"
description: "Poznaj wszystkie komendy serwera Hytale i funkcje."
---

# 🎮 Komendy Serwera Hytale

Witaj w oficjalnej dokumentacji komend serwera Hytale. Tutaj znajdziesz kompleksowe przewodniki dotyczące zarządzania serwerem Hytale.

## Szybki Start

**Nowy w komendach Hytale?** Zacznij od jednej z tych sekcji:

### 🧭 Nawigacja
- [📖 Legenda Symboli](legenda.md) - Naucz się czytać składnię komend
- [❓ Często Zadawane Pytania](faq.md) - Odpowiedzi na popularne pytania

### 🎮 Główne Funkcje
- [🛑 Komendy Systemu](system.md) - Zarządzanie serwerem i graczami
- [🌍 Teleportacja](teleport.md) - Podróż po świecie
- [🤖 NPC i Postacie](npc.md) - Spawnowanie i zarządzanie NPC
- [🌎 Świat i Pogoda](world_hytale.md) - Zarządzanie światami i pogodą
- [🎨 Narzędzia Budowniczego](buildertools.md) - Zaawansowana edycja terenu
- [🧬 System Spawowania](spawning.md) - Kontrola spawowania NPC

---

## 📚 Przegląd Dokumentacji

### Dla Administratorów Serwerów
Jeśli zarządzasz serwerem, skoncentruj się na:
- [🛑 Komendy Systemu](system.md) - Niezbędne zarządzanie serwerem
- [🧬 System Spawowania](spawning.md) - Optymalizacja zachowania NPC
- [🌎 Świat i Pogoda](world_hytale.md) - Konfiguracja świata

### Dla Budowniczych
Jeśli tworzysz struktury, sprawdź:
- [🎨 Narzędzia Budowniczego](buildertools.md) - Komendy edycji terenu
- [🌍 Teleportacja](teleport.md) - Nawigacja podczas budowania

### Dla Twórców Treści
Jeśli tworzysz eventy lub zawartość, zobacz:
- [🤖 NPC i Postacie](npc.md) - Twórz interaktywne NPC
- [🛑 Komendy Systemu](system.md) - Zarządzanie graczami i efektami

---

## 🎯 Kategorie Komend

| Typ Komendy | Przeznaczenie | Dowiedz Się Więcej |
|------------|---|---|
| **System** | Zarządzanie serwerem, kontrola graczy, uprawnienia | [🛑 Komendy Systemu](system.md) |
| **Teleportacja** | Podróż, warpy, punkty spawnu | [🌍 Teleportacja](teleport.md) |
| **NPC** | Spawnowanie i kontrola NPC i postaci | [🤖 NPC i Postacie](npc.md) |
| **Świat** | Zarządzanie światami, czasem, pogodą, terenem | [🌎 Świat i Pogoda](world_hytale.md) |
| **Budowanie** | Edycja terenu, struktury, transformacje | [🎨 Narzędzia Budowniczego](buildertools.md) |
| **Spawowanie** | Kontrola automatycznego systemu spawowania NPC | [🧬 System Spawowania](spawning.md) |

---

## ❓ Szybkie Odpowiedzi

### Jak się teleportować?
```
/tp 100 64 200         ← Teleport do współrzędnych
/tp ImiGracza          ← Teleport do gracza
/spawn                 ← Idź na spawn
```
[Dowiedz się więcej o teleportacji →](teleport.md)

### Jak zarządzać graczami?
```
/kick ImiGracza        ← Wyrzuć gracza
/ban ImiGracza         ← Banuj gracza
/op add ImiGracza      ← Przyznaj admina
```
[Dowiedz się więcej o komendach systemu →](system.md)

### Jak tworzyć NPC?
```
/npc spawn goblin              ← Spawnuj NPC
/npc spawn goblin --count=10   ← Spawnuj kilka
/npc freeze                    ← Zamroź wszystkie
```
[Dowiedz się więcej o NPC →](npc.md)

### Jak edytować teren?
```
/pos1                  ← Zaznacz punkt 1
/pos2                  ← Zaznacz punkt 2
/copy                  ← Skopiuj obszar
/paste                 ← Wklej gdzie indziej
```
[Dowiedz się więcej o budownictwie →](buildertools.md)

### Jak zmienić czas/pogodę?
```
/time set 12           ← Ustaw południe
/weather set rain      ← Zmień pogodę
```
[Dowiedz się więcej o zarządzaniu światem →](world_hytale.md)

---

## 📖 Zrozumienie Składni Komend

Wszystkie komendy podążają za schematem. Naucz się symboli:

| Symbol | Znaczenie | Przykład |
|--------|-----------|----------|
| `<wymagany>` | Musisz to podać | `/tp <x> <y> <z>` |
| `[opcjonalny]` | Możesz to pominąć | `/spawn [gracz]` |
| `--flaga` | Parametr nazwany | `--count=5` |
| `~` | Współrzędna względna | `/tp ~10 ~ ~` |

[Pełny przewodnik symboli →](legenda.md)

---

## 🔗 Powiązana Dokumentacja

- **[Dokumentacja Craftserve](../../README.md)** - Główna dokumentacja Craftserve
- **[Oficjalna Hytale](https://hytale.com)** - Oficjalna strona Hytale
- **[FAQ](faq.md)** - Odpowiedzi na popularne pytania

---

## ✅ Wskazówki na Sukces

1. **Używaj Tab do pomocy** - Wpisz częściową komendę i naciśnij Tab aby autouzupełnić
2. **Sprawdź uprawnienia** - Niektóre komendy wymagają statusu operatora
3. **Czytaj komunikaty błędów** - Mówią ci co poszło nie tak
4. **Używaj współrzędnych względnych** - `~10 ~ ~` jest łatwiej niż obliczanie dokładnych
5. **Twórz warpy** - Użyj `/warp set` dla często odwiedzanych miejsc

---

## 🆘 Potrzebujesz Pomocy?

- Nie możesz znaleźć komendy? Sprawdź [❓ FAQ](faq.md)
- Nie rozumiesz składni? Przeczytaj [📖 Legendę Symboli](legenda.md)
- Szukasz konkretnej funkcji? Użyj wyszukiwarki lub przeglądaj dostępne kategorie powyżej

**Miłej gry!** 🎮
