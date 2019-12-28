Forge Debug Profiler oraz jego interpretacja
===============================================

Spis treści
-----------
* [Podstawy](#podstawy)
* [Jak używać debugera](#Jak_używać_debugera)
* [Czytanie Profilera](#czytanie)

## Podstawy
Minecraft dostarcza nam `Debug Profiler` dzięki któremu można sprawdzić obciążający kod.
Szczególnie chodzi tutaj o rzeczy pokroju `TickEvent` lub `Ticking TileEntities`, 
przydaje się to w szcególności modderom, jak także właścicielom serwerów, którzy chcą sprawdzić przyczynę lagów.

<a name="Jak_używać_debugera"><h2>Jak używać profilera</h2></a>

Profiler jest banalnie prosty w obsłudze:
- `/debug start` włącza nam Profiler (z konsoli, lub bezpośrednio w grze*)
- `/debug stop` zatrzymuje nam Proflier (z konsoli, lub bezpośrednio w grze*)

**Czym dłużej Proflier będzie włączony tym dokładniejsze dane ukaże. Zaleca się conajmniej minutę.**

Ważne jest by podczas profilowania robić to co zawsze, chodzić po świecie etc. Można też przteleportować się w miejsce gdzie występują lagi. **Profiler nie zbiera danych które nie istnieją, tj. `Entity` jak i `TileEntities`, dlatego ważne jest by załadować chunki na których występują lagi**.

Po zakończonym profilowaniu w folderze `debug/` zostanie utworzony plik o wzorze `profile-results-yyyy-mm-dd_hh.mi.ss.txt` na przykład: `profile-results-2019-12-28_22.52.14.txt`.

<a name="czytanie"><h2>Czytanie Profilera</h2></a>

Na samym początku napisane jest jak długo profiler działał (w milisekundach), i ile ticków w tym czasie było

Poniżej znajduje się kod na wzór tego poniżej
```
[00] levels - 96.70%/96.70%
[01] |   <Nazwa świata> - 99.76%/96.47%
[02] |   |   tick - 99.31%/95.81%
[03] |   |   |   entities - 47.72%/45.72%
[04] |   |   |   |   regular - 98.32%/44.95%
[04] |   |   |   |   blockEntities - 0.90%/0.41%
[05] |   |   |   |   |   unspecified - 64.26%/0.26%
[05] |   |   |   |   |   minecraft:furnace - 33.35%/0.14%
[05] |   |   |   |   |   minecraft:chest - 2.39%/0.01%
```
Małe wyjaśnienie:

| [02]                     | tick                  | 99.31%       | 95.81%       |
| :----------------------- | :---------------------- | :----------- | :----------- |
| Linijka | Nazwa sekcji | Procent czasu rodzica(z ang. parent) jaki zajmował `event`. | Czas jaki w całości zabrał `tick`.


-------------------------
##### Oparte na: <a href="https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/"> tym</a>
##### * musisz posiadać operatora
