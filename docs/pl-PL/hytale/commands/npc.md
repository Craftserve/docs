---
title: "🤖 Komendy NPC i Postaci"
description: "Spawnowanie NPC, kontrola AI, ustawianie ścieżek, zachowania i wiele więcej."
---

# 🤖 NPC i Postacie

Komendy do zarządzania postaciami niezależnymi (NPC). Zawarte w pluginie NPCPlugin.

**Przestrzeń nazw:** `hytale.command.npc.*`

## 📂 Kategorie

| Kategoria | Opis |
|-----------|------|
| [**Spawnowanie NPC**](#spawnowanie-npc) | `/npc spawn`, `/npc all` - Tworzenie postaci |
| [**Kontrola NPC**](#kontrola-npc) | `/npc freeze`, `/npc clean` - Zarządzanie NPC |
| [**Wygląd NPC**](#wyglad-npc) | `/npc appearance` - Modele i skórki |
| [**AI i Zachowanie**](#ai-i-zachowanie) | `/npc path`, `/npc flock` - Sztuczna inteligencja |
| [**Komunikacja**](#komunikacja) | `/npc message`, `/npc give` - Interakcje |
| [**Debugowanie NPC**](#debugowanie-npc) | `/npc debug`, `/npc dump` - Narzędzia programistyczne |

## 🎯 Szybka Referencja

```
/npc spawn goblin                    ← Spawnuj 1 goblina
/npc spawn goblin --count=5          ← Spawnuj 5 goblinów
/npc spawn wolf --radius=15          ← Większy promień spawnu
/npc all                             ← Spawnuj wszystkie role
/npc freeze                          ← Zamroź NPC
/npc thaw                            ← Rozmroź NPC
/npc clean                           ← Usuń wszystkich
/npc give diamond_sword              ← Daj przedmiot
/npc message Cześć!                  ← Wysłij wiadomość
```

## 📖 Szczegółowe Sekcje

### Spawnowanie NPC
Tworzenie nowych postaci:
- `/npc spawn <rola>` - Spawnuj NPC
- `/npc spawn <rola> --count=liczba` - Wiele na raz
- `/npc spawn <rola> --radius=liczba` - W promieniu
- `/npc spawn <rola> --frozen` - Zamrożone na start
- `/npc spawn <rola> --scale=liczba` - Zmień rozmiar
- `/npc all` - Wszystkie dostępne role

### Kontrola NPC
Zarządzanie już istniejącymi NPC:
- `/npc freeze` - Zatrzymaj wszystkie
- `/npc thaw` - Wznów ruch
- `/npc clean` - Usuń wszystkich
- `/npc dump` - Informacje o NPC

### Wygląd NPC
Zmiana wyglądu postaci:
- `/npc appearance <model>` - Zmień wygląd
- `/npc role <rola>` - Zmień rolę

### AI i Zachowanie
Zaawansowana kontrola AI:
- `/npc path` - Ustaw ścieżkę ruchu
- `/npc flock` - Zachowanie grupowe
- `/npc blackboard` - Dane AI
- `/npc attack` - Ataki
- `/npc step` - Krok symulacji

### Komunikacja
Interakcja z NPC:
- `/npc message <wiadomość>` - Wysłij wiadomość nad głowę
- `/npc give <przedmiot>` - Daj przedmiot do trzymania
- `/npc give nothing` - Usuń przedmiot

### Debugowanie NPC
Narzędzia dla zaawansowanych użytkowników:
- `/npc debug` - Flagi debugowania
- `/npc dump --json` - Format JSON
- `/npc benchmark` - Test wydajności

## 💡 Praktyczne Przykłady

### Tworzenie Grupy Goblinów
```
/npc spawn goblin --count=10 --radius=20
```
Spowoduje pojawienie się 10 goblinów w promieniu 20 bloków.

### Zamrażanie Wszystkich
```
/npc freeze --all
```
Wszystkie NPC (i przedmioty) zatrzymają się w miejscu.

### Danie Oręża Postaci
```
/npc give diamond_sword
```
Najbliższe NPC będzie trzymać diamentowy miecz.

### Wysłanie Wiadomości
```
/npc message Witajcie gracze! --all
```
Wszystkie NPC pokażą tę wiadomość.

---

## 📚 Dostępne Role NPC

Poniżej znajduje się przykładowa lista dostępnych ról:
- `Goblin` - Zielone małe potwory
- `Orc` - Duże zielone potwory
- `Wolf` - Wilki
- `Skeleton` - Szkielety
- `Human` - Ludzie
- I wiele innych...

Pełną listę zobaczysz wpisując `/npc spawn` w grze.

---

## ℹ️ Informacje

- NPC mogą być zamrażane bez wpływu na serwer
- Historia można cofać i powtarzać
- Każde NPC ma unikalny ID
- Można tworzyć niestandardowe roli za pomocą modów

---

**Dalej:** Wybierz kategorię powyżej aby zobaczyć pełne szczegóły.
