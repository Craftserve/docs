Pregenerowanie Świata
=====================

Spis treści
-----------

* [Podstawy](#podstawy)
* [Zanim zaczniemy!](#zanim)
* [Bukkit, Spigot i Paper](#bukkit)
* [Forge](#forge)
* [Sponge](#sponge)

<a name="podstawy"><h2>Podstawy</h2></a>

Minecraft jest grą z losowo generowanym, masywnym światem - jego granice sięgają aż ±30 000 000 długości i szerokości oraz 0-255 wysokości. Wygenerowanie tak dużego świata trwałoby wiele godzin (być może dni), nawet na najszybszych domowych komputerach. Dlatego Mojang zdecydował się na **generowania chunków** (klastrów 16x16x256 bloków) w miare, **jak gracze się do nich zbliżają**.

O ile w grze single-player ma to małe znaczenie, to na serwerze kilku-kilkunastu graczy eksplorujących świat powoduje, że generator chunków znacznie **obciąża CPU** i w konsekwencji **spadek TPS**. By temu zapobiec wystarczy przed **rozpoczęciem zabawy wygenerować obszar świata o rozmiarze odpowiadający naszym potrzebom**.

**Mapa o rozmiarze 8 000x8 000 bloków powinna w zupełności wystarczyć pod Survival na kilkunastu graczy.** Przy tych parametrach, zakładając 20 graczy, na każdego przypada średni wycinek mapy skłądający się z 1 780x1 780 bloków - 12 500 chunków. 

<a name="zanim"><h2>Zanim zaczniemy!</h2></a>

1. Proces generowania mapy powoduje lagi w trakcie jego trwania i trwa bardzo długo - nawet 8 godzin. Dlatego warto to zrobić przed otwarciem serwera.
2. Mapę można wygenerować też **na domowym komputerze** a potem wgrać ją na serwer **przez FTP**. Trwa to nieporównywalnie krócej. Wystarczy podążąć za instrukcjami dla **[Forge](#forge)** lub (dla wersji 1.13+) tutorialem z **[tego filmu](https://www.youtube.com/watch?v=5yRnGpcIoS8).**
3. **Uwaga! Puste (bez graczy) serwery Craftserve są usypiane. Przez cały okres generowania mapy należy mieć otwartą konsolę serwera w panelu Craftserve - to zapobiegnie jego uśpieniu.**

<a name="bukkit"><h2>Bukkit, Spigot i Paper</h2></a>

W przypadku silników bazujących na API Bukkita wystarczy ściągnąć i zainstalować **plugin [WorldBorder](https://www.spigotmc.org/resources/worldborder.60905/)**. Jego obsługa jest bardzo prosta (parametry w `<>` są obowiązkowe, w `[]` opcjonalne):

* `/wb set <promienX> [promienZ]` - ustala granicę świata **wyśrodkowaną na Twojej postaci**, gdzie <`promienX`> jest promieniem w osi X, a `<promienZ>` w osi Z - oba **wyrażone w blokach**. Jeśli `promienZ` nie będzie podany, użyta zostanie wartość `promienX`.
* `/wb shape <elliptic|rectangular>` - pozwala wybrać kształt granicy. `elliptic` to eliptyczna/okrągła, `rectangular` - prostokątna.
* `/wb fill [czestotliwosc]` - rozpoczyna generowanie chunków z domyślną częstotliwością 20 prób na sekundę. Dla serwerów Grass należy ją zmniejszyć do 5. Na serwerach Diamond można spróbować nawet wartość 100. **Im mniejsza wartość, tym mniejsze lagi w trakcie generowania świata, ale też dłużej to trwa.**
* `/wb confirm` - komenda ta jest potrzebna do potwierdzenia rozpoczęcia `/wb fill`.

### Gotowe do wpisania zestawy komend:


| Grass         | Diamond        |
|---------------|----------------|
|`/wb set 2000` |`/wb set 4000`  |
|`/wb fill 5 `  |`/wb fill 100` |
|`/wb confirm`  |`/wb confirm`   |

<a name="forge"><h2>Forge</h2></a>

Pregenerowanie mapy na serwerach **Forge** jest odrobinę bardziej skomplikowane, ponieważ mody ingerujące w wygląd świata niekoniecznie są ze sobą kompatybilne.

### Wersje od 1.10 do 1.12.2

**Jeśli na Twoim serwerze jest już zainstalowany [OpenTerrainGenerator](https://www.curseforge.com/minecraft/mc-mods/open-terrain-generator)** wystarczy, że uruchomisz generowanie komendą: 

`/otg pregen 300` - wygeneruje ona obszar o promieniu 300 chunków, co przekłada się na około 9500x9500 bloków.


**Jeśli nie masz zainstalowanego OTG** bezpieczniejszą opcją będzie [**Chunk-Pregenerator**](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator):

`/pregen gen startexpansion circle 0 0 300 300` - wygeneruje kolisty obszar o promieniu 300 chunków. Jeśli wolisz kształt kwadratu, zamiast `circle` wpisz `square`.

*Oba pluginy zainstalowane na kliencie Forge Minecrafta dodadzą graficzny interfejs ułatwiający ich obsługę.*

### Wersje od 1.6 do 1.7.10

Te, dość stare wersje, oferują jedynie plugin **[Admin Command Toolbox](https://www.curseforge.com/minecraft/mc-mods/admin-commands-toolbox)**, który nie posiada graficznego interfesju. Do poprawnego działania należy też zainstalować **[Mobius Core](https://www.curseforge.com/minecraft/mc-mods/mobiuscore)**.

By wygenerować świat należy wpisać:

`/pregenspawn 300` - co wygeneruje kwadrat o wymiarach 600x600 chunków - 300 w każdą z 4 stron od spawnu.

<a name="sponge"><h2>Sponge</h2></a>

Na Sponge, natomiast, można wykorzystać odpowiednik pluginu Essentials - **[Plugin Nucleus](https://ore.spongepowered.org/Nucleus/Nucleus)**, którego szczegółowa dokumentacja znajduje się **[tutaj](https://nucleuspowered.org/)**.

Żeby wygenerować świat należy najpierw ustanowić jego granicę (którą można znieść po zakończeniu generowania) i rozpocząć proces:

* `/world border set <world> <x> <z> <srednica>` - gdzie `<world>` to nazwa naszego swiata, a `<x>` i `<z>` to koordynaty środka granicy.

* `world border gen -r <world>` - rozpoczyna tworzenie nowych chunków.
