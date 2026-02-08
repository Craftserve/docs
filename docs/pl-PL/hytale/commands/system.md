---
title: "🛑 Komendy Systemu (Serwer)"
description: "Komendy zarządzania serwerem, graczami, dostępem i uprawnieniami. Zawsze dostępne."
---

# 🛑 Komendy Systemu Serwera

Komendy zawsze dostępne na serwerze. Zarządzają ogólnymi aspektami serwera i graczami.

**Przestrzeń nazw:** `hytale.system.command.*`

## 📂 Kategorie

| Kategoria | Opis |
|-----------|------|
| [**Kontrola Serwera**](#kontrola-serwera) | `/stop`, `/version`, `/backup`, `/notify` - Zarządzanie serwerem |
| [**Zarządzanie Graczami**](#zarzadzanie-graczami) | `/kick`, `/who`, `/kill`, `/give`, `/inventory` - Gracze i ich dane |
| [**Dostęp i Uprawnienia**](#dostep-i-uprawnienia) | `/ban`, `/unban`, `/whitelist`, `/op`, `/perm` - Kontrola dostępu |
| [**Komunikacja**](#komunikacja) | `/say`, `/notify` - Wiadomości i notyfikacje |
| [**Statystyki Gracza**](#statystyki-gracza) | `/player stats`, `/player effect` - Dane i efekty |
| [**Bytości (Entity)**](#bytosci) | `/entity remove`, `/entity clone` - Zarządzanie bytościami |
| [**Debugowanie**](#debugowanie) | `/debug`, `/hitbox`, `/log` - Narzędzia do debugowania |

## 🎯 Szybka Referencja

### Najczęstsze Komendy

```
/who                           ← Kto jest online
/gamemode Creative [gracz]     ← Zmień tryb gry
/give diamond --quantity=5     ← Daj przedmioty
/kill [gracz]                  ← Zabij gracza
/ban gracz [powód]             ← Banuj gracza
/unban gracz                   ← Odblanuj gracza
```

### Dla Administratorów

```
/stop                          ← Wyłącz serwer
/op add gracz                  ← Przyznaj OP
/perm set gracz uprawnienie    ← Ustaw uprawnienia
/whitelist enable/disable      ← Włącz/wyłącz listę białą
```

## 📖 Szczegółowe Sekcje

### Kontrola Serwera
Zarządzanie podstawowymi funkcjami serwera:
- `/stop` - Wyłącz serwer
- `/version` - Pokaż wersję
- `/backup` - Utwórz kopię
- `/notify` - Wyślij notyfikację
- `/maxplayers` - Ustaw limit graczy
- `/kick` - Wyrzuć gracza

### Zarządzanie Graczami
Operacje na graczach:
- `/gamemode` - Zmień tryb gry
- `/kill` - Zabij gracza
- `/damage` - Zadaj obrażenia
- `/give` - Daj przedmioty
- `/inventory` - Zarządzaj ekwipunkiem
- `/whoami` - Informacje o Tobie
- `/whereami` - Gdzie jesteś
- `/ping` - Sprawdź ping
- `/hotbar` - Pasek szybkiego dostępu

### Dostęp i Uprawnienia
Kontrola dostępu do serwera:
- `/ban` - Banuj gracza
- `/unban` - Odblanuj gracza
- `/whitelist` - Lista białych
- `/op` - Operatorzy
- `/perm` - Uprawnienia

### Komunikacja
Wysyłanie wiadomości:
- `/notify` - Notyfikacja dla wszystkich
- `/say` - Wiadomość publiczna
- `/eventtitle` - Tytuł zdarzenia

### Statystyki Gracza
Zarządzanie danymi gracza:
- `/player stats` - Czytaj/pisz statystyki
- `/player effect` - Nakładaj efekty
- `/player camera` - Zmień perspektywę

### Bytości
Zarządzanie NPC i zwierzętami:
- `/entity remove` - Usuń bytość
- `/entity clone` - Klonuj bytość
- `/entity dump` - Pokaż dane
- `/entity stats` - Statystyki bytości
- `/entity effect` - Efekty na bytości

### Debugowanie
Narzędzia programistyczne:
- `/debug shape` - Rysuj kształty
- `/hitbox` - Pokaż granice kolizji
- `/log` - Logging
- `/network` - Diagnostyka sieci
- `/hitdetection` - Detekcja trafień
- `/packetstats` - Statystyki pakietów

---

## ℹ️ Informacje

Te komendy są **zawsze dostępne** i nie można ich wyłączyć. Są one kluczowe dla funkcjonowania serwera.

**Wymagane Uprawnienia:** W zależności od komendy - na ogół dostępne dla operatorów.

---

**Dalej:** Przejdź do konkretnej kategorii powyżej, aby zobaczyć pełne szczegóły każdej komendy.
