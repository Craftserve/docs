## Wybór odpowiedniego silnika
Aby używać anty-xray'a bez konieczności wgrywania dodatkowych pluginów, należy wgrać na nasz serwer silnik `Paper` lub jego forki (**Purpur, Yatopia**)
oraz wybrać wersję swojego serwera. Aby zrobić to na hostingu [**Craftserve**](https://craftserve.pl/), należy przejść do zakładki **Ustawienia** *(Zdjęcie 1)*
a następnie wybrać `Silniki`. Aby wybrać silnik, który nas interesuje, należy przejść do zakładki `Spigot - alternatywne wersje`, wybrać go i zatwierdzić *(Zdjęcie 2)*. Następnie należy zrestartować serwer.

![1](img/antyxray/1.PNG) ![2](img/antyxray/2.png)

## Opis trybów
* `engine-mode: 1`: Rudy zostają zamienione na kamień, ale tylko te, które nie sąsiadują z blokiem powietrza lub cieczą (wodą lub lawą). Po włączeniu x-ray'a widać tylko te rudy, które nie mogły zostać ukryte przez bloki stojące obok.

* `engine-mode: 2`: Rudy nie są ukrywane, lecz kamień, andezyt, dioryt są zamieniane na losowe złoża rud, których gracz nie jest w stanie rozróżnić od tych prawdzinych. Oszukane rudy zamieniają się na bloki prawdziwe, gdy blok obok nich znajdzie się blok powietrza lub cieczy. Gdy na serwerze występują lagi, czasami można odkryć losowe rudy które pojawiają się przy kopaniu, jednak gracz nie będzie w stanie ich wydobyć.

### Wybrane tryby dla normalnego świata
![3](img/antyxray/3.png)
### Wybrane tryby dla netheru

![4](img/antyxray/4.png)

## Konfiguracja plików
Istnieją 4 pliki, w których konfiguruje się antyxray'a:
* `paper-world-defaults` .Domyślnie po wejściu do pliku, powinniśmy zobaczyć tresć znajdującą się poniżej (W zależności od wersji może się ona różnić) W tym przypadku jest to konfiguracja na wersję `1.17+`
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
Aby zobaczyć zmiany na twoim serwerze, należy zapisać pl
