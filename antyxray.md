## Wybór odpowiedniego silnika
Aby używać antyxray'a bez konieczności wgrywania dodatkowych pluginów, należy wgrać na nasz serwer silnik `Paper` lub jego forki (**na przykład Purpur**). oraz wybrać wersję swojego serwera. Aby zrobić to na hostingu [**Craftserve**](https://craftserve.com/), należy przejść do zakładki **Ustawienia** w **Panelu głównym**, a następnie wybrać `Silnik`. Z listy silników wybieramy interesujący nas silnik i klikamy `Zainstaluj`.

![1](img/antyxray/image1.png)
![2](img/antyxray/a2.png)

## Opis trybów
Antyxray może działać na dwa różne sposoby:
* `engine-mode: 1`: Rudy zostają zamienione na kamień, ale tylko te, które nie sąsiadują z blokiem powietrza lub cieczą (wodą lub lawą). Po włączeniu x-ray'a widać tylko te rudy, które nie mogły zostać ukryte przez bloki stojące obok.

* `engine-mode: 2`: Rudy nie są ukrywane, lecz kamień, andezyt, dioryt są zamieniane na losowe złoża rud, których gracz nie jest w stanie rozróżnić od tych prawdzinych. Oszukane rudy zamieniają się na bloki prawdziwe, gdy blok obok nich znajdzie się blok powietrza lub cieczy. Gdy na serwerze występują lagi, czasami można odkryć losowe rudy które pojawiają się przy kopaniu, jednak gracz nie będzie w stanie ich wydobyć.

### Wybrane tryby dla normalnego świata
![3](img/antyxray/3.png)
### Wybrane tryby dla netheru

![4](img/antyxray/4.png)

## Konfiguracja plików `1.19`
Istnieją 4 pliki, w których konfiguruje się antyxray'a:
* `paper-world-defaults` - Znajduje on się w folderze **config** w głównym katalogu serwera. Są tam ustawienia dla wszystkich światów tzn. jeśli dodamy tu jakiś blok, to będzie on ukrywany w normalnym świecie, netherze itp. Domyślnie po wejściu do pliku w 16 linijce powinniśmy zobaczyć poniższy tekst:
```yml
anticheat:
  anti-xray:
    enabled: false
    engine-mode: 1
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - coal_ore
    - deepslate_coal_ore
    - lapis_ore
    - deepslate_lapis_ore
    - mossy_cobblestone
    - obsidian
    - chest
    - diamond_ore
    - deepslate_diamond_ore
    - redstone_ore
    - deepslate_redstone_ore
    - clay
    - emerald_ore
    - deepslate_emerald_ore
    - ender_chest
```
* `paper-world`  
  * Z folderu **world**
  * Z folderu **world_nether**
  * Z folderu **world_the_end**  

  W każdym z powyższych plików znajdują się ustawienia dla oddzielnych światów. Jeden nie wpływa w żaden sposób na działanie drugiego. W porównaniu z poprzednim plikiem, po otwarciu widzimy tylko kilka linijek np. dla `paper-world` z **world**:
```yml
# This is a world configuration file for Paper.
# This file may start empty but can be filled with settings to override ones in the config/paper-world-defaults.yml
# 
# World: world (minecraft:overworld)

_version: 28
```
Aby Włączyć antyxray'a wystarczy skopiować i wkleić do plików poniższe ustawienia.

## Zalecane ustawienia dla Engine-mode: 1
### Dla `paper-world-defaults`
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - chest
    - coal_ore
    - deepslate_coal_ore
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - emerald_ore
    - deepslate_emerald_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    - ancient_debris
    - nether_gold_ore
    - nether_quartz_ore
    lava-obscures: false
    max-block-height: 90
    update-radius: 2
    use-permission: false
```
### Dla `paper-world`
- z **world**
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - chest
    - coal_ore
    - deepslate_coal_ore
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - emerald_ore
    - deepslate_emerald_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    lava-obscures: false
    max-block-height: 64
    update-radius: 2
    use-permission: false
```
- z **world_nether**
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 1
    hidden-blocks:
    - ancient_debris
    - nether_gold_ore
    - nether_quartz_ore
    max-block-height: 128
```
- z **world_the_end**
```yml
anticheat:
  anti-xray:
    enabled: false
```
## Zalecane ustawienia dla Engine-mode: 2
### Dla `paper-world-defaults`
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    - air
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    - ancient_debris
    - bone_block
    - glowstone
    - magma_block
    - nether_bricks
    - nether_gold_ore
    - nether_quartz_ore
    - polished_blackstone_bricks
    lava-obscures: false
    max-block-height: 64
    replacement-blocks:
    - chest
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    - netherrack
    - soul_sand
    - soul_soil
    - basalt
    - blackstone
    update-radius: 2
    use-permission: false
```
### Dla `paper-world`

- z **world**
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    - air
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - diamond_ore
    - deepslate_diamond_ore
    - gold_ore
    - deepslate_gold_ore
    - iron_ore
    - deepslate_iron_ore
    - raw_iron_block
    - lapis_ore
    - deepslate_lapis_ore
    - redstone_ore
    - deepslate_redstone_ore
    lava-obscures: false
    max-block-height: 64
    replacement-blocks:
    - chest
    - amethyst_block
    - andesite
    - budding_amethyst
    - calcite
    - coal_ore
    - deepslate_coal_ore
    - deepslate
    - diorite
    - dirt
    - emerald_ore
    - deepslate_emerald_ore
    - granite
    - gravel
    - oak_planks
    - smooth_basalt
    - stone
    - tuff
    update-radius: 2
    use-permission: false
```
- z **world_nether**
```yml
anticheat:
  anti-xray:
    enabled: true
    engine-mode: 2
    hidden-blocks:
    - air
    - ancient_debris
    - bone_block
    - glowstone
    - magma_block
    - nether_bricks
    - nether_gold_ore
    - nether_quartz_ore
    - polished_blackstone_bricks
    max-block-height: 128
    replacement-blocks:
    - basalt
    - blackstone
    - gravel
    - netherrack
    - soul_sand
    - soul_soil
```
- z **world_the_end**
```yml
anticheat:
  anti-xray:
    enabled: false
```

## Przykłady skonfigurowanych plików
- `paper-world-defaults` <br>

![p](img/antyxray/e1.png)

- `paper-world` (tutaj nether) <br> 

![p2](img/antyxray/e2.png)

## Źródło
https://docs.papermc.io/paper/anti-xray


