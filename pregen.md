Pregenerowanie Świata
=====================


Spis treści
-----------

* [Podstawy](#podstawy)
* [Zanim zaczniemy!](#zanim)
* [Bukkit, Spigot i Paper](#bukkit)
* [Forge](#forge)
* [Sponge](#sponge)

<a name="podstawy">
# Podstawy
</a>

Minecraft jest grą z losowo generowanym, masywnym światem - jego granice sięgają aż ±30 000 000 długości i szerokości oraz 0-255 wysokości. Wygenerowanie tak dużego świata trwałoby wiele godzin (być może dni), nawet na najszybszych domowych komputerach. Dlatego Mojang zdecydował się na **generowania chunków** (klastrów 16x16x256 bloków) w miare, **jak gracze się do nich zbliżają**.

O ile w grze single-player ma to małe znaczenie, to na serwerze kilku-kilkunastu graczy eksplorujących świat powoduje, że generator chunków znacznie **obciąża CPU** i w konsekwencji **spadek TPS**. By temu zapobiec wystarczy przed **rozpoczęciem zabawy wygenerować obszar świata o rozmiarze odpowiadający naszym potrzebom**.

**Mapa o rozmiarze 10 000x10 000 bloków powinna w zupełności wystarczyć pod Survival na kilkunastu graczy.** Przy tych parametrach, zakładając 20 graczy, na każdego przypada średni wycinek mapy o wymiarach 2200x2200 bloków. 

<a name="zanim">
Zanim zaczniemy!
----------------
</a>

1. Proces generowania mapy powoduje lagi w trakcie jego trwania i trwa bardzo długo - nawet 8 godzin. Dlatego warto to zrobić przed otwarciem serwera.
2. Mapę można wygenerować też **na domowym komputerze** a potem wgrać ją na serwer **przez FTP**. Trwa to nieporównywalnie krócej. Wystarczy podążąć za instrukcjami dla **[Forge](#forge)** lub (dla wersji 1.13+) tutorialem z **[tego filmu](https://www.youtube.com/watch?v=5yRnGpcIoS8).**
3. **Uwaga! Puste (bez graczy) serwery Craftserve są usypiane. Przez cały okres generowania mapy należy mieć otwartą konsolę serwera w panelu Craftserve - to zapobiegnie jego uśpieniu.**

<a name="bukkit">
Bukkit, Spigot i Paper
----------------------
</a>

W przypadku silników bazujących na API Bukkita wystarczy ściągnąć i zainstalować **plugin [WorldBorder](https://www.spigotmc.org/resources/worldborder.60905/)**. Jego obsługa jest bardzo prosta (parametry w `<>` są obowiązkowe, w `[]` opcjonalne):

* `/wb set <promienX> [promienZ]` - ustala granicę świata **wyśrodkowaną na Twojej postaci**, gdzie <`promienX`> jest promieniem w osi X, a `<promienZ>` w osi Z - oba **wyrażone w blokach**. Jeśli `promienZ` nie będzie podany, użyta zostanie wartość `promienX`.
* `/wb shape <elliptic|rectangular>` - pozwala wybrać kształt granicy. `elliptic` to eliptyczna/okrągła, `rectangular` - prostokątna.
* `/wb fill [czestotliwosc]` - rozpoczyna generowanie chunków z domyślną częstotliwością 20 prób na sekundę. Dla serwerów Grass należy ją zmniejszyć do 5. Na serwerach Diamond można spróbować nawet wartość 100. **Im mniejsza wartość, tym mniejsze lagi w trakcie generowania świata, ale też dłużej to trwa.**
* `/wb confirm` - komenda ta jest potrzebna do potwierdzenia rozpoczęcia `/wb fill`.

Polecane zestawy komend:

#### Grass

```
/wb set 2000
/wb fill 5
/wb confirm
```

#### Diamond

```
/wb set 4000
/wb fill 1000
/wb confirm
```

<a name="forge">
Forge
------
</a>

### 1.12.2


### 1.7.10

<a name="sponge">
Sponge
------
</a>