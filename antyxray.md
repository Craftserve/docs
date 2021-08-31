## Wybór odpowiedniego silnika
Aby używać anty-xray'a, bez konieczności wgrywania dodatkowych pluginów, należy wgrać na nasz serwer silnik `Paper` lub jego forki (**Purpur, Yatopia**)
oraz wybrać wersję swojego serwera. Aby zrobić to na hostingu [**Craftserve**](https://craftserve.pl/), należy przejść do zakładki **Ustawienia** *(Zdjęcie 1)*
a następnie wybrać `Silniki`. Aby wybrać silnik, który nas interesuje należy przejść do zakładki `Spigot - alternatywne wersje` oraz go wybrać i zatwierdzić *(Zdjęcie 2)*
W tym poradniku, wybiorę silnik `Paper - Build #187`, lecz ty możesz wybrać inny. Następnie należy zrestartować serwer.

![1](img/antyxray/1.PNG) ![2](img/antyxray/2.png)

## Wytłumaczenie zależności
Aby skonfigurować anty-xray'a, należy wybrać zakładkę `Pliki` oraz przejść do pliku `paper.yml`. Następnie szukamy linijki `anti-xray`.
*(Do konfiguracji będę wspomagał się [tym poradnikiem](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e#recommended-settings))*.
Konfiguracja anty-xray'a dzieli się na 2 tryby (`engine-mode: 1 oraz 2`) *(Zdjęcie 3)* Najczęściej zalecane jest użycie `engine-mode: 2`, lecz ty możesz wybrać inną opcję.
W tym poradniku wybiorę właśnie ten tryb.

![3](img/antyxray/3.png)

## Opis trybów
* `engine-mode: 1`: Rudy zostają zamienione na stone, ale tylko te, które nie sąsiadują z powietrzem lub płynem (wodą lub lawą). Po włączeniu x-raya widać tylko te rudy, które nie mogły zostać ukryte przez właśnie swoje sąsiedztwo.

* `engine-mode: 2`: Rudy nie są ukrywane, lecz stone, andesite, diorite są zamieniane na losowe złoża rud, gracz nie jest w stanie rozpoznać prawdziwych od oszukanych rud. Oszukane rudy zamieniają się na bloki prawdziwe gdy blok obok nich zostanie odkryty poprzez sąsiedztwo płynu lub powietrza. Gdy serwer ma lagi można czasem zauważyć losowe rudy które pojawiają się przy kopaniu. Po włączeniu x-raya widać wszędzie losowe rudy, nierozróżnialne od tych prawdziwych.

## Konfiguracja pliku `paper.yml`
Domyślnie po wejściu do pliku, powinniśmy zobaczyć tresć znajdującą się poniżej (W zależności od wersji może się ona różnić) W tym przypadku jest to konfiguracja na wersję `1.17+`
```yml
    anti-xray:
      enabled: false
      engine-mode: 1
      max-block-height: 64
      update-radius: 2
      lava-obscures: false
      use-permission: false
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
      replacement-blocks:
      - stone
      - oak_planks
```

Wybierając opcje `engine-mode: 2` wasza konfiguracja powinna wyglądać tak: *(Poniższa konfiguracja dotyczy wersji 1.17+)*

```yml
    anti-xray:
      enabled: true
      engine-mode: 2
      chunk-edge-mode: 2
      max-chunk-section-index: 2
      max-block-height: 48
      update-radius: 2
      lava-obscures: false
      use-permission: false
      hidden-blocks:
      # You can add air here such that many holes are generated.
      # This works well against cave finders but may cause client FPS drops for all players.
      - air
      - copper_ore
      - deepslate_copper_ore
      - diamond_ore
      - deepslate_diamond_ore
      - emerald_ore
      - deepslate_emerald_ore
      - gold_ore
      - deepslate_gold_ore
      - iron_ore
      - deepslate_iron_ore
      - lapis_ore
      - deepslate_lapis_ore
      - mossy_cobblestone
      - redstone_ore
      - deepslate_redstone_ore
      replacement-blocks:
      # Chest is a tile entity and can't be added to hidden-blocks in engine-mode: 2.
      # But adding chest here will hide buried treasures, if max-chunk-section-index is increased.
      - chest
      - amethyst_block
      - andesite
      - budding_amethyst
      - calcite
      - deepslate
      - diorite
      - dirt
      - granite
      - gravel
      - oak_planks
      - smooth_basalt
      - stone
      - tuff
```

Jeżeli jednak zdecydowowałeś się na wybór `engine-mode: 1`, najlepszą dla niego konfiguracje znajdziesz [tutaj](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e#recommended-settings)
Aby zobaczyć zmiany na twoim serwerze, należy zapisać plik oraz zrestartować twój serwer.


## Linki użyte w poradniku
   - **[Hosting Craftserve.pl](https://craftserve.pl/)**
   - **[Recommended Paper Anti-Xray settings by stonar96](https://gist.github.com/stonar96/ba18568bd91e5afd590e8038d14e245e)**
