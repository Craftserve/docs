---
title: "❓ FAQ - Najczęściej Zadawane Pytania"
description: "Odpowiedzi na popularne pytania o komendach Hytale."
---

# ❓ Często Zadawane Pytania

## 🏠 Dom i Respawn

### P: Jak ustawić swój dom?
**O:** Stań w miejscu, w którym chcesz mieć dom, i wpisz:
```
/spawn set
```
Teraz możesz wrócić tam w każdej chwili za pomocą `/tp home`.

### P: Jak wrócić do głównego spawnu?
**O:** Wpisz:
```
/spawn
```
Lub:
```
/tp home
```

### P: Czy mogę mieć wiele domów?
**O:** Standardowo możesz mieć jeden dom ustawiony via `/spawn set`. Jednak możesz tworzyć warp'y do wielu lokacji:
```
/warp set MojDom1
/warp set MojDom2
/warp go MojDom1      ← Idź do pierwszego
/warp go MojDom2      ← Idź do drugiego
```

---

## 🧭 Nawigacja

### P: Jak się teleportować do innego gracza?
**O:** Wpisz:
```
/tp ImiEGracza
```

### P: Jak sprawdzić gdzie inny gracz jest?
**O:** Wpisz:
```
/whereami ImiEGracza
```

### P: Zapomniałem współrzędne domu - co robić?
**O:** Wpisz:
```
/whereami
```
To pokaże Ci gdzie jesteś, a potem:
```
/spawn set
```
Ustawi nowy spawn.

### P: Czy mogę używać ujemnych współrzędnych w teleporcie?
**O:** Tak! Możesz teleportować się wszędzie:
```
/tp -100 64 -200     ← Ujemne współrzędne ok
/tp ~-10 ~ ~         ← Relatywne ujemne też
```

---

## 🎮 Tryby Gry

### P: Jak zmienić tryb gry (Adventure vs Creative)?
**O:** Wpisz:
```
/gamemode Creative      ← Twój tryb
/gamemode Adventure Ania ← Ania zmienia tryb
```

### P: Jakie są dostępne tryby?
**O:** 
- `Adventure` - Normalny tryb gry
- `Creative` - Budowanie bez ograniczeń
- `Survival` - Trudny tryb survival

---

## 👥 Zarządzanie Graczami

### P: Jak wyrzucić gracza?
**O:** Jako operator:
```
/kick ImiEGracza
```

### P: Jak banować gracza?
**O:** 
```
/ban ImiEGracza Za spam
```

### P: Jak odbanować gracza?
**O:**
```
/unban ImiEGracza
```

### P: Jak sprawdzić kto jest online?
**O:**
```
/who
```

---

## 🎁 Przedmioty

### P: Jak dać sobie przedmioty?
**O:**
```
/give diamond            ← Jeden diament
/give iron_ingot --quantity=64  ← 64 żelaza
```

### P: Jak dać przedmiot innemu graczowi?
**O:**
```
/give diamond Ania       ← Daj Ani diament
```

### P: Jak sprawdzić swoją zawartość plecaka?
**O:**
```
/inventory see
```

### P: Jak wyczyszcić swój plecak?
**O:**
```
/inventory clear
```

---

## 🤖 NPC

### P: Jak spawnować NPC?
**O:**
```
/npc spawn goblin           ← Jeden goblin
/npc spawn orc --count=5    ← 5 orków
```

### P: Jak usunąć wszystkie NPC?
**O:**
```
/npc clean
```

### P: Jak zatrzymać NPC w miejscu?
**O:**
```
/npc freeze
```

### P: Jak przywrócić ruch NPC?
**O:**
```
/npc thaw
```

### P: Jak dać NPC przedmiot?
**O:** Patrz na najbliższe NPC i wpisz:
```
/npc give diamond_sword
```

### P: Jak zmienić wygląd NPC?
**O:**
```
/npc appearance goblin_warrior
```

---

## 🌍 Świat

### P: Jak zmienić porę dnia?
**O:**
```
/time set 12            ← Południe
/time set 0             ← Północ
/time set 18            ← Wieczór
```

### P: Jak ustawić pogodę?
**O:**
```
/weather set clear      ← Słonecznie
/weather set rain       ← Deszcz
/weather set thunder    ← Burza
```

### P: Jak sprawdzić bieżący czas?
**O:**
```
/time
```

### P: Jak zmienić szybkość upływu czasu?
**O:**
```
/time dilation 2.0      ← 2x szybciej
/time dilation 0.5      ← 2x wolniej
```

### P: Jak zatrzymać czas?
**O:**
```
/time pause             ← Zatrzymaj
/time pause             ← Wznów
```

### P: Jak przebudować teren (regenerować chunk)?
**O:** Stań w chunku i wpisz:
```
/chunk regenerate
```

---

## 🎨 Budowanie (Creative)

### P: Jak skopiować budynek?
**O:**
1. Zaznacz obszar:
```
/pos1                   ← Punkt 1
/pos2                   ← Punkt 2
```

2. Skopiuj i wklej:
```
/copy
/paste
```

### P: Jak szybko wypełnić obszar blokami?
**O:**
1. Zaznacz:
```
/pos1
/pos2
```

2. Wypełnij:
```
/setBlocks stone        ← Kamieniem
/setBlocks oak_log      ← Drewnem
```

### P: Jak obracać struktury?
**O:**
1. Skopiuj:
```
/copy
```

2. Obróć:
```
/rotate 90              ← O 90 stopni
/rotate 45              ← O 45 stopni
```

3. Wklej:
```
/paste
```

### P: Jak cofnąć zmianę?
**O:**
```
/undo                   ← Ostatnia akcja
/undo 5                 ← Ostatnie 5 akcji
```

### P: Jak powtórzyć akcję którą cofnąłem?
**O:**
```
/redo
```

### P: Jak wydrążyć budynek (pozostawić tylko ściany)?
**O:**
1. Zaznacz:
```
/pos1
/pos2
```

2. Wydrąż:
```
/hollow stone           ← Kamienne ściany
/hollow wood            ← Drewienne ściany
```

---

## 📊 Statystyki

### P: Jak sprawdzić swoje HP (zdrowie)?
**O:**
```
/player stats get health
```

### P: Jak zmienić sobie HP?
**O:**
```
/player stats set health 20     ← Pełne zdrowie
/player stats add health 5      ← +5 HP
```

### P: Jak nałożyć efekt na gracza?
**O:**
```
/player effect apply speed              ← Szybkość
/player effect apply strength           ← Siła
/player effect apply resistance --duration=200  ← Rezystencja
```

---

## 🔧 Administracja

### P: Jak przyznać operatora graczowi?
**O:**
```
/op add ImiEGracza
```

### P: Jak odebrać operatora?
**O:**
```
/op remove ImiEGracza
```

### P: Jak włączyć listę białą (tylko OP mogą grać)?
**O:**
```
/whitelist enable
/whitelist add ImiEGracza
```

### P: Jak wyłączyć listę białą?
**O:**
```
/whitelist disable
```

### P: Jak sprawdzić uprawnienia gracza?
**O:**
```
/perm get ImiEGracza
```

### P: Jak dać graczowi uprawnienie?
**O:**
```
/perm set ImiEGracza teleport.self true
```

---

## 🛠️ Debugowanie i Pomoc

### P: Jak sprawdzić ping do serwera?
**O:**
```
/ping
```

### P: Jak zobaczyć szczegółowe informacje?
**O:**
```
/ping --detail
```

### P: Jak pokazać granice kolizji (hitbox)?
**O:**
```
/hitbox
```

### P: Gdzie są moje współrzędne?
**O:**
```
/whereami
```

### P: Jak sprawdzić wersję serwera?
**O:**
```
/version
```

---

## 💾 Zapisy i Kopie

### P: Jak zrobić kopię zapasową świata?
**O:** (Tylko dla operatorów)
```
/backup
```

### P: Jak załadować inny świat?
**O:**
```
/world load nazwa_swiata
```

### P: Jak zapisać zmiany w świecie?
**O:**
```
/world save
```

---

## 📝 Notacje i Symbole

### P: Co to znaczy `<argument>` w komendzie?
**O:** Musisz to podać. Na przykład:
```
/give <przedmiot>
/give diamond    ← Tu `diamond` to `<przedmiot>`
```

### P: Co to znaczy `[argument]`?
**O:** To opcjonalne - możesz to pominąć:
```
/tp [gracz]      ← Możesz podać gracza lub nie
/tp Ania         ← Z graczem
/tp             ← Bez gracza (teleportuj siebie)
```

### P: Co to znaczy `--flaga`?
**O:** To parametr nazwany. Przykład:
```
/give diamond --quantity=10
--quantity=10 to flaga z wartością 10
```

---

## 🔍 Szukanie Pomocy

### P: Gdzie mogę znaleźć pomoc dla konkretnej komendy?
**O:** 
1. Wpisz `/help nazwa_komendy` w grze
2. Przeczytaj tę dokumentację
3. Poproś administrację

### P: Czy jest skrót dla długiej komendy?
**O:** Tak! Wiele komend ma aliasy. Na przykład:
```
/tp = /teleport
/set = /setBlocks
/fill = /fillBlocks
```

---

## ⚠️ Błędy i Problemy

### P: Dostaję błąd "Permission denied"
**O:** Nie masz uprawnień. Poproś administrację aby ci je dały.

### P: Komenda nie działa
**O:** Sprawdź:
1. Czy wpisałeś ją poprawnie
2. Czy masz uprawnienia
3. Czy parametry są prawidłowe

### P: Gdzie się znalazłem po teleporcie?
**O:** Wpisz `/whereami` aby sprawdzić współrzędne.

---

## 💡 Wskazówki Pro

✅ **Używaj Tab** - Wciśnij Tab aby autouzupełnić komendy
✅ **Cofaj zmiany** - Zawsze możesz użyć `/undo`
✅ **Czytaj błędy** - Serwer powie Ci co nie tak
✅ **Eksperymentuj** - Większość rzeczy się nie psuje na stałe

---

**Nie znalazłeś odpowiedzi?** Skontaktuj się z administracją serwera!
