# Forge Debug Profiler oraz jego interpretacja

## Spis treści

* [Podstawy](debugprofiler.md#podstawy)
* [Jak używać debugera](debugprofiler.md#Jak_używać_debugera)
* [Czytanie Profilera](debugprofiler.md#czytanie)

## Podstawy

Minecraft Forge dostarcza nam `Debug Profiler` dzięki, któremu można sprawdzić obciążający kod. Szczególnie chodzi tutaj o rzeczy pokroju `TickEvent` lub `Ticking TileEntities`, przydaje się to w szczególności modderom, jak także administratorom serwerów, którzy chcą sprawdzić przyczynę lagów.

[Jak używać profilera](debugprofiler.md)

Profiler jest banalnie prosty w obsłudze:

* `/debug start` włącza nam Profiler \(z konsoli_, lub bezpośrednio w grze\*_\)
* `/debug stop` zatrzymuje nam Proflier, oraz generuje jego raport \(z konsoli_, lub bezpośrednio w grze\*_\)

**Czym dłużej Proflier będzie włączony tym dokładniejsze dane ukaże. Jako iż jest to serwer modowany zaleca się conajmniej od dziesięciu do piętnastu minut.**

Ważne jest by podczas profilowania robić to co zawsze, chodzić po świecie etc. Można też przteleportować się w miejsce gdzie występują lagi. **Profiler nie zbiera danych które nie istnieją, tj. `Entity` jak i `TileEntities`, dlatego ważne jest by załadować chunki na których występują lagi**.

Po zakończonym profilowaniu w folderze `debug/` zostanie utworzony plik z nazwą wg wzoru `profile-results-yyyy-mm-dd_hh.mi.ss.txt` na przykład: `profile-results-2019-12-28_22.52.14.txt`.

[Czytanie Profilera](debugprofiler.md)

Pierwsze linijki raportu to czas, jak długo profiler był uruchomiony oraz ile ticków zostało w tym czasie wykonanych.

Poniżej znajduje się wzór przykładowego raportu. Czym bardziej wcięte pole \(więcej tabulatorów\), tym niżej w hierarchi jest pole.

```text
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

| \[02\] | tick | 99.31% | 95.81% |
| :--- | :--- | :--- | :--- |
| Linijka | Nazwa sekcji | Procent czasu rodzica\(z ang. parent\)_\*_ jaki zajmował `event`. | Procent czasu jaki w całości zabrał element. |

### Oparte na:  [tym](https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/)

### \* w konsoli komendy wpisujemy bez `/`

### \*\* musisz posiadać operatora

### _\*_ rodzic to o jeden wyżej w hierarchii element\(o jeden tabulator mniej\)

