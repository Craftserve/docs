# spigot.yml - poradnik

Plik spigot.yml jest jednym z plików konfiguracyjnych silników spigot i paper. Wiele osób nie zwraca na niego uwagi, a można w nim skonfigurować wiele przydatnych ustawień, które mogą poprawić wydajność serwera, lub trochę zmienić jego zachowanie. Plik składa się z kilku sekcji, na które podzielone są konkretne ustawienia silnika. Niestety, ale w zależności od wersji serwera i silnika ustawienia mogą pojawiać się w różnej kolejności, a niektóre, jeżeli chcemy je zmienić, musimy samodzielnie dopisać do pliku.

## Commands
Sekcja ta odpowiada za ustawienia dotyczące komend wykonywanych przez graczy i konsolę.

### tab-complete
Opcja ta odpowiada za ustawienie ilości liter wpisanych z nazwy komendy, aby można było uzupełnić ją klawiszem _TAB_.

* Wpisz `-1` żeby wyłączyć uzupełnianie komend klawiszem TAB.
* Domyślną wartością jest **0**.

### send-namespaced
Opcja ta odpowiada za ustawienie czy serwer powinien podpowiadać również komendy z tzw. namespace, czyli najczęściej nazwą pluginu, z którego pochodzi komenda, np. `/essentials:tpa` w przypadku komendy `/tpa`.

* Aby dowiedzieć się czym dokładnie jest namespace, zobacz ten [artykuł](https://minecraft.gamepedia.com/Namespaced_ID) (po angielsku).
* Wpisz `false` żeby wyłączyć podpowiedzi komend z namespacem.
* Wpisz `true` żeby włączyć podpowiedzi komend z namespacem.
* Domyślną wartością jest **true**.

### silent-commandblock-console
Opcja ta odpowiada za ustawienie czy serwer powinien wypisywać informacje o komendach wykonanych przez commandblocki do konsoli.

* Wpisz `false` żeby wyłączyć wypisywanie informacji o commandblockowych komendach w konsoli.
* Wpisz `true` żeby włączyć wypisywanie informacji o commandblockowych komendach w konsoli.
* Domyślną wartością jest **false**.

### log
Opcja ta odpowiada za ustawienie czy serwer powinien wypisywać informacje o komendach wykonanych przez graczy do konsoli.

* Wpisz `false` żeby wyłączyć wypisywanie informacji o komendach graczy w konsoli.
* Wpisz `true` żeby włączyć wypisywanie informacji o komendach graczy w konsoli.
* Domyślną wartością jest **true**.

### replace-commands
Niektóre polecenia silnika gry zostały zmienione w bukkicie i spigocie względem ich wersji ze standardowego silnika. Dzięki temu działają one znacznie szybciej, za to czasem są lekko uproszczone i mogą tracić część funkcjonalności. Opcja ta odpowiada za ustawienie które komendy zamienione przez bukkit i spigot powinny zostać przywrócone do ich standardowych wersji.

* Wpisz `[]` żeby nie zamieniać żadnych komend.
* Wpisz `[setblock, summon]` żeby przywrócić działanie poleceń _setblock_ i _summon_.
* Domyślną wartością jest **[setblock, summon, testforblock]**.

## Messages
Sekcja ta odpowiada za ustawienia dotyczące wiadomości które może zobaczyć gracz w konkretnych sytuacjach. Stanowi to rozwinięcie wiadomości dostępnych z poziomu pliku bukkit.yml.

### whitelist
Opcja ta odpowiada za wiadomość którą zobaczy gracz próbujący zalogować się na serwer, ale niebędący na whiteliście, kiedy ta jest włączona.

* Domyślną wartością jest **You are not whitelisted on this server!**.

### unknown-command
Opcja ta odpowiada za wiadomość którą zobaczy gracz gdy wpisze komendę która nie jest dostępna na serwerze.

* Domyślną wartością jest **Unknown command. Type "help" for help.**.

### server-full
Opcja ta odpowiada za wiadomość którą zobaczy gracz próbujący zalogować się na serwer gdy ten jest pełny.

* Domyślną wartością jest **The server is full!**.

### outdated-client
Opcja ta odpowiada za wiadomość którą zobaczy gracz próbujący wejść na serwer, ale ma starszą wersję gry niż serwer obsługuje.

* Napis `{0}` w tekście zostanie automatycznie zamieniony na wersję gry obsługiwaną przez serwer.
* Domyślną wartością jest **Outdated client! Please use {0}**.

### outdated-server
Opcja ta odpowiada za wiadomość którą zobaczy gracz próbujący wejść na serwer, ale ma nowszą wersję gry niż serwer obsługuje.

* Napis `{0}` w tekście zostanie automatycznie zamieniony na wersję gry obsługiwaną przez serwer.
* Domyślną wartością jest **Outdated server! I'm still on {0}**.

### restart
Opcja ta odpowiada za wiadomość którą zobaczą wszyscy gracze online gdy serwer będzie restartowany poleceniem `/restart`.

* Domyślną wartością jest **Server is restarting**.

## Stats
Sekcja ta odpowiada za ustawienia dotyczące statystyk i ich przechowywania przez serwer.

### disable-saving
Opcja ta odpowiada za ustawienie czy serwer powinien zapisywać statystyki graczy i ich osiągnięcia (przed minecraftem 1.12).

* Wpisz `false` żeby statystyki były zapisywane.
* Wpisz `true` żeby statystyki nie były zapisywane.

### forced-stats
Opcja ta odpowiada za ustawienie które statystyki i osiągnięcia (przed minecraftem 1.12) gracz powinien mieć wymuszone przez serwer.

* Wpisz `{}` żeby nie wymuszać żadnych statystyk.
* Wpisz 
    ```yml
    forced-stats:
    achievement.openInventory: 1
    ```
    aby ustawić osiągnięcie `open inventory` jako od razu zaliczone dla każdego gracza.
* Domyślną wartością jest **{}**.

## Advancements
Sekcja ta odpowiada za ustawienia dotyczące postępów i ich przechowywania przez serwer.

### disable-saving
Opcja ta odpowiada za ustawienie czy serwer powinien zapisywać postępy graczy.

* Wpisz `false` żeby postępy nie były zapisywane.
* Wpisz `true` żeby postępy były zapisywane.

### disabled
Opcja ta odpowiada za ustawienie które postępy powinny zostać wyłączone na serwerze. Wyłączone postępy nie będą się wyświetlały w menu postępów. Jeżeli zablokujesz postęp wymagany przez inne postępy, które nie będą zablokowane, w konsoli serwera pojawią się błędy i postępy mogą nie działać poprawnie. Pamiętaj żeby blokować wszystkie postępy zależne od innych blokowanych postępów.

* Wpisz `[]` żeby nie wyłączać żadnych postępów.
* Wpisz `- '*'` żeby zablokować wszystkie standardowe postępy.
* Domyślną wartością jest **[]**.

## world settings
Sekcja ta odpowiada za ustawienia konkretnych światów załadowanych na serwerze. Domyślnie znajduje się w niej podsekcja `default`, która przechowuje domyślne ustawienia dla światów, dla których nie ma dodatkowych ustawień zdefiniowanych w tej sekcji.

* Aby utworzyć ustawienia dla konkretnego świata, skopiuj i wklej treść z poniższego spoilera i zamień `NAZWAŚWIATA` na nazwę katalogu w którym znajdują się pliki świata co do którego chcesz zmienić ustawienia.

    <details>
    <summary>Kliknij tutaj aby rozwinąć listę</summary>

    ```yml
  NAZWAŚWIATA:
    arrow-despawn-rate: 1200
    dragon-death-sound-radius: 0
    enable-zombie-pigmen-portal-spawns: true
    entity-activation-range:
      animals: 32
      misc: 16
      monsters: 32
      raiders: 48
      tick-inactive-villagers: true
    entity-tracking-range:
      animals: 48
      misc: 32
      monsters: 48
      other: 64
      players: 48
    growth:
      bamboo-modifier: 100
      beetroot-modifier: 100
      cactus-modifier: 100
      cane-modifier: 100
      carrot-modifier: 100
      cocoa-modifier: 100
      kelp-modifier: 100
      melon-modifier: 100
      mushroom-modifier: 100
      netherwart-modifier: 100
      potato-modifier: 100
      pumpkin-modifier: 100
      sapling-modifier: 100
      sweetberry-modifier: 100
      vine-modifier: 100
      wheat-modifier: 100
    hanging-tick-frequency: 100
    hopper-amount: 1
    hunger:
      combat-exhaustion: 0.1
      jump-sprint-exhaustion: 0.2
      jump-walk-exhaustion: 0.05
      other-multiplier: 0.0
      regen-exhaustion: 6.0
      sprint-multiplier: 0.1
      swim-multiplier: 0.01
    item-despawn-rate: 6000
    max-tick-time:
      entity: 50
      tile: 50
    max-tnt-per-tick: 100
    merge-radius:
      exp: 3.0
      item: 2.5
    mob-spawn-range: 6
    nerf-spawner-mobs: false
    seed-desert: 14357617
    seed-igloo: 14357618
    seed-jungle: 14357619
    seed-monument: 10387313
    seed-ocean: 14357621
    seed-outpost: 165745296
    seed-shipwreck: 165745295
    seed-slime: 987234911
    seed-swamp: 14357620
    seed-village: 10387312
    squid-spawn-range:
      min: 45.0
    ticks-per:
      hopper-check: 1
      hopper-transfer: 8
    verbose: true
    view-distance: default
    wither-spawn-sound-radius: 0
    zombie-aggressive-towards-villager: true

    ```
    </details>

### verbose
Opcja ta odpowiada za ustawienie czy serwer powinien przy starcie wypisywać w konsoli informacje na temat ustawień ładowanych światów do konsoli i logów.

* Wpisz `false` żeby wyłączyć wypisywanie informacji o świecie.
* Wpisz `true` żeby włączyć wypisywanie informacji o świecie.
* Domyślną wartością jest **true**.

### view-distance
Opcja ta odpowiada za ustawienie odległości w chunkach (_pola 16 na 16 bloków_) od gracza  z której świat będzie wysyłany do gracza przez serwer. Im większa wartość tym więcej może zobaczyć gracz bez zbędnego biegania po mapie, aby ją sobie załadować.

* Najmniejszą dopuszczalną wartością jest `1`.
* Największą dopuszczalną wartością jest `15`.
* Wpisanie wartości `default` sprawi, że dla danego świata użyta zostanie wartość z pliku _server.properties_.
* Domyślną wartością jest **10** dla wersji minecrafta przed _1.14.4_ i **default** dla wersji nowszych lub równych _1.14.4_.
* **View distance ma duży wpływ na wydajność serwera. Jeżeli masz problem z niską wydajnością serwera, lagami, spróbuj zmniejszyć wartość w tym polu.**

### merge-radius
Opcja ta zawiera dwie podopcje, dotyczące odległości w blokach między dwoma _stackami_ przedmiotów lub kulek doświadczenia, która musi być mniejsza od podanej, aby _stacki_ zostały połączone w jeden większy, oszczędzając w ten sposób moc serwera.

##### exp
Opcja ta odpowiada za ustawienie odległości w blokach wymaganej aby dwa stacki kulek doświadczenia zostały połączone.

* Domyślna wartość to **3.0**.

##### item
Opcja ta odpowiada za ustawienie odległości w blokach wymaganej aby dwa stacki przedmiotów zostały połączone.

* Domyślna wartość to **2.5**.

### chunks-per-tick
Opcja ta odpowiada za ustawienie maksymalnej ilości chunków które w jednym ticku (1/20 sekundy) zostaną sprawdzone pod kątem rosnących roślin. Jeżeli ilość załadowanych chunków przez graczy i teren wokół nich będzie w sumie stanowił więcej chunków niż ustalony limit, niektóre z nich zostaną pominięte w danym sprawdzeniu.

* _Funkcjonalność ta została usunięta i nie jest obecna w silnikach spigot dla wersji 1.10 wzwyż._
* Domyślną wartością jest **650**.
* **Zmniejszenie wartości na dużych serwerach (kilkudziesięciu graczy rozsianych po mapie) może spowolnić wzrost upraw, za to pozwoli zaoszczędzić trochę mocy, jeżeli serwer ma problem z lagami i powolnym działaniem.**

### item-despawn-rate
Opcja ta odpowiada za ustawienie ilości _ticków_ (_1/20 sekundy_) która musi upłynąć zanim wyrzucony na ziemię przedmiot bezpowrotnie zniknie. Czas nie jest liczony, jeżeli w pobliżu nie ma innych graczy, czyli jak _chunk_ na którym znajduje się przedmiot nie jest załadowany.

* Domyślną wartością jest **6000** (5 minut).
* **Zmniejszenie tej wartości, dzięki przyspieszeniu znikania przedmiotów, może pomóc w oszczędzeniu mocy, jeżeli serwer ma problem z lagami i powolnym działaniem.**

### mob-spawn-range
Opcja ta odpowiada za odległość w _chunkach_ od gracza w jakiej zaczną pojawiać się moby. Zwiększenie odległości spowoduje, że ilość agresywnych mobów wokół gracza na otwartej przestrzeni może wydawać się dziwnie mniejsza, natomiast zmniejszenie tej odległości może sprawić, że eksplorowanie jaskiń będzie bezpieczniejsze.

* Domyślną wartością jest **4**.

### growth
Opcja ta zawiera siedem podopcji, które odpowiadają za prędkość rośnięcia konkretnych roślin. Kolejno są to cactus (kaktus), melon (arbuz), pumpkin (dynia), sapling (sadzonka drzewa), cane (trzcina cukrowa), mushroom (grzyby), wheat (zboża, warzywa itp.).

* Wartość wyrażana jest procentowo.
* Wpisz wartość `100` aby rośliny rosły ze standardową prędkością minecrafta.
* Wpisz wartość `200` aby rośliny rosły dwa razy szybciej.
* Wpisz wartość `50` aby rośliny rosły dwa razy wolniej.
* Domyślną wartością jest **100**.

### entity-activation-range
Opcja ta zawiera pięć podopcji, które odpowiadają za odległość w blokach w której najdalej od gracza mogą znajdować się stworzenia, aby były one "aktywowane", a więc _tickowane_ za każdym razem. Moby które znajdą się dalej niż w tej odległości będą wydawały się nieco przymrożone, ponieważ serwer będzie się nimi zajmował mniej często niż tymi, które znajdują się blisko gracza.

##### animals
Opcja ta odpowiada za ustawienie odległości od zwierząt (krowy, konie, koty, papugi itp.), w której będą one uznane za aktywowane.

* Domyślną wartością jest **32**.

##### misc
Opcja ta odpowiada za ustawienie odległości od zwierząt otoczenia, wprowadzających nastrój (nietoperze itp.), w której będą one uznane za aktywowane.

* Domyślną wartością jest **16**.

##### monsters
Opcja ta odpowiada za ustawienie odległości od potworów (szkielety, zombie, creepery itp.), w której będą one uznane za aktywowane.

* Domyślną wartością jest **32**.

#### raiders
Opcja ta odpowiada za ustawienie odległości od pillagerów biorących udział w rajdzie, w której będą one uznane za aktywowane.

* Domyślną wartością jest **48**.

##### tick-inactive-villagers
Opcja ta odpowiada za ustawienie czy wieśniacy powinni zostać zawsze aktywni, niezależnie od odległości od gracza.

* Wpisz `true` żeby włączyć aktywację wszystkich wieśniaków.
* Wpisz `false` żeby aktywni stali się tylko wieśniacy blisko graczy.
* Wyłączenie tej opcji sprawi, że trzeba będzie cały czas siedzieć obok wieśniaka, żeby odświeżyły się jego oferty handlu!
* Domyślną wartością jest **true**.

### entity-tracking-range
Opcja ta zawiera pięć podopcji, które odpowiadają za odległość w blokach w której najwyżej może być stworzenie od gracza, aby gracz je widział. Jeżeli stworzenie jest w większej odległości, to serwer nie wyśle do gracza informacji o stworzeniu.

##### players
Opcja ta odpowiada za ustawienie ilości bloków między graczem a innym graczem, aby mogli się widzieć.

* Domyślną wartością jest **48**.

##### animals
Opcja ta odpowiada za ustawienie ilości bloków między graczem a zwierzętami (krowy, konie, koty, papugi itp.), aby gracz mógł je widzieć.

* Domyślną wartością jest **48**.

##### monsters
Opcja ta odpowiada za ustawienie ilości bloków między graczem a potworami (szkielety, zombie, creepery itp.), aby gracz mógł je widzieć.

* Domyślną wartością jest **48**.

##### misc
Opcja ta odpowiada za ustawienie ilości bloków między graczem a stworzeniami nastrojowymi (nietoperze itp.) i obiektami traktowanymi jako nieruchome stworzneia (obrazy, stojaki na zbroję, ramki na przedmioty, itp.), aby gracz mógł je widzieć.

* Domyślną wartością jest **32**.

##### other
Opcja ta odpowiada za ustawienie ilości bloków między graczem a wszystkimi pozostałymi stworzeniami, aby gracz mógł je widzieć.

* Dodatkowo pełni funkcję maksymalnego limitu odległości widzenia rzeczy z pozostałych grup.
* Domyślną wartością jest **64**.

### save-structure-info
Opcja ta odpowiada za ustawienie czy serwer powinien razem z mapą zapisywać informacje o strukturach, takich jak twierdze, netherowe twierdze, chatki wiedźm itp.

* Wyłączenie tej opcji sprawi, że moby mogą nieprawidłowo się spawnować w tych strukturach, np witherowe szkielety nie będą pojawiały się w netherowych twierdzach.
* Wpisz `false` żeby wyłączyć zapisywanie informacji o strukturach.
* Wpisz `true` żeby włączyć zapisywanie informacji o strukturach.
* Domyślną wartością jest **true**.

### random-light-updates
Opcja ta odpowiada za ustawienie czy serwer powinien losowo sprawdzać chunki pod kątem błędów oświetlenia (np. pasy ciemności pod górami, gdzie nie powinno być aż tak ciemno) i naprawiać je.

* Wpisz `false` żeby wyłączyć losowe sprawdzanie oświetlenia.
* Wpisz `true` żeby włączyć losowe sprawdzanie oświetlenia.
* Domyślną wartością jest **false**.

### nerf-spawner-mobs
Opcja ta odpowiada za ustawienie czy serwer powinien wyłączać AI mobów spawnowanych przez mobspawnery.

* Jeżeli ta opcja jest włączona, to moby spawnowane przez mobspawnery nie będą się w ogóle poruszały ani atakowały.
* Wpisz `false` żeby zostawić włączone AI mobów z mobspawnerów.
* Wpisz `true` żeby wyłączyć AI mobów z mobspawnerów.
* Domyślną wartością jest **false**.
* **Włączenie tej opcji może pomóc w oszczędzaniu mocy, jeżeli serwer ma problem z lagami i powolnym działaniem.**

### zombie-aggressive-towards-villager
Opcja ta odpowiada za ustawienie czy zombie na danym świecie powinny być agresywne wobec wieśniaków.

* Wpisz `false` żeby wyłączyć agresywność zombie wobec wieśniaków.
* Wpisz `true` żeby włączyć agresywność zombie wobec wieśniaków.
* Domyślną wartością jest `true`.
* **Wyłączenie tej opcji może pomóc w oszczędzaniu mocy, jeżeli serwer ma problem z lagami i powolnym działaniem.**

### enable-zombie-pigmen-portal-spawns
Opcja ta odpowiada za ustawienie czy z portalu do netheru powinny losowo spawnować się zombie pigmany.

* Wpisz `false` żeby wyłączyć spawn zombie pigmanów z portali.
* Wpisz `true` żeby włączyć spawn zombie pigmanów z portali.
* Domyślną wartością jest **true**.

### max-entity-collisions
Opcja ta odpowiada za ustawienie limitu ilości kolizji (_sytuacji, gdy jeden mob odpycha drugiego_) które dotyczą jednego stworzenia w czasie jednego ticku.

* Domyślną wartością jest **8**.

### dragon-death-sound-radius
Opcja ta odpowiada za ustawienie odległości w blokach w której musi znajdować się gracz aby usłyszeć odgłos śmierci smoka.

* Wpisz `0` żeby usłyszał go każdy gracz na serwerze.
* Domyślną wartością jest **0**.

### wither-spawn-sound-radius
Opcja ta odpowiada za ustawienie odległości w blokach w której musi znajdować się gracz aby usłyszeć odgłos spawnowania withera.

* Wpisz `0` żeby usłyszał go każdy gracz na serwerze.
* Domyślną wartością jest **0**.

### max-tick-time
Opcja ta posiada dwie podopcje, które odpowiadają za ustawienie czasu w milisekundach którego najwięcej mogą dostać w ramach jednego ticku konkretne rzeczy.

##### tile
Opcja ta odpowiada za ustawienie maksymalnego czasu przeznaczonego na analize mapy.

* **Zmniejszenie tej wartości może podnieść wydajność serwera, ale też może sprawić, że niektóre rzeczy będą działały wolniej, np. zegary redstone lub hoppery.**
* Domyślną wartością jest **50**.

##### entity
Opcja ta odpowiada za ustawienie maksymalnego czasu przeznaczonego na analize otoczenia mobów.

* **Zmniejszenie tej wartości może podnieść wydajność serwera, ale też może sprawić, że niektóre rzeczy będą działały wolniej, np. potwory będą później reagowały na obecność gracza.**
* Domyślną wartością jest **50**.

### clear-tick-list
Opcja ta odpowiada za ustawienie czy serwer powinien czyścić listy tickowanych stworzeń i przedmiotów. Z czasem listy te potrafią urosnąć do znacznych rozmiarów, ale czyszczenie listy może zepsuć wiele rzeczy, np. czasy rośnięcia roślin. Włączenie tej opcji nie jest zalecane dopóki nie będziesz znał się dobrze na tym, co się dzieje wewnętrznie w silniku.

* Wpisz `false` żeby wyłączyć czyszczenie listy.
* Wpisz `true` żeby włączyć czyszczenie listy.
* Domyślną wartością jest **false**.

### hopper-amount
Opcja ta odpowiada za ustawienie maksymalnej ilości przedmiotów które hopper może obsłużyć w czasie jednego ticku. 

* Domyślną wartością jest **1**.

### seed-village
Opcja ta służy do ustalenia ziarna generatora dla wiosek.

* Jeżeli zmienisz domyślną wartość, wioski pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **10387312**.

### seed-desert
Opcja ta służy do ustalenia ziarna generatora dla struktur pustynnych.

* Jeżeli zmienisz domyślną wartość, struktury pustynne pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **14357617**.

### seed-monument
Opcja ta służy do ustalenia ziarna generatora dla monumentów.

* Jeżeli zmienisz domyślną wartość, monumenty pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **10387313**.

### seed-slime
Opcja ta służy do ustalenia ziarna generatora dla slimowych chunków.

* Jeżeli zmienisz domyślną wartość, slimowe chunki pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **987234911**.

### seed-igloo
Opcja ta służy do ustalenia ziarna generatora dla igloo.

* Jeżeli zmienisz domyślną wartość, wioski pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **14357618**.

### seed-jungle
Opcja ta służy do ustalenia ziarna generatora dla struktur dżunglowych.

* Jeżeli zmienisz domyślną wartość, struktury dżunglowe pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **14357619**.

### seed-ocean
Opcja ta służy do ustalenia ziarna generatora dla struktur podwodnych.

* Jeżeli zmienisz domyślną wartość, struktury podwodne pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **14357621**.

### seed-outpost
Opcja ta służy do ustalenia ziarna generatora dla baz pillagerów.

* Jeżeli zmienisz domyślną wartość, bazy pillagerów pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **165745296**.

### seed-shipwreck
Opcja ta służy do ustalenia ziarna generatora dla zniszczonych statków.

* Jeżeli zmienisz domyślną wartość, zniszczone statki pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **165745295**.

### seed-swamp
Opcja ta służy do ustalenia ziarna generatora dla struktur bagiennych.

* Jeżeli zmienisz domyślną wartość, struktury bagienne pojawiać się będą w inny sposób pomimo użycia tego samego seeda całego świata w pliku server.properties lub okienku na seed przy generowaniu nowego świata w trybie gry jednoosobowej.
* Domyślną wartością jest **14357620**.

### hunger
Opcja ta zawiera siedem subopcji, które odpowiadają za ilość punktów najedzenia którą straci gracz za wykonywanie konkretnych akcji w czasie trwania jednego ticku.

* 1 punkt najedzenia odpowiada połowie ikony mięsa na pasku statusu.

##### jump-walk-exhaustion
Opcja ta odpowiada za ustawienie ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku szedł lub skakał idąc.

* Domyślną wartością jest **0.05**.

##### jump-sprint-exhaustion
Opcja ta odpowiada za ustawienie ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku biegł lub skakał biegnąc.

* Domyślną wartością jest **0.2**.

##### combat-exhaustion
Opcja ta odpowiada za ustawienie ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku walczył.

* Domyślną wartością jest **0.1**.

##### regen-exhaustion
Opcja ta odpowiada za ustawienie ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku regenerował zdrowie.

* Domyślną wartością jest **6.0**.

##### swim-multiplier
Opcja ta odpowiada za ustawienie dodatkowego mnożnika ilości traconych punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku płynął.

* Domyślną wartością jest **0.01**.

##### sprint-multiplier
Opcja ta odpowiada za ustawienie dodatkowego mnożnika ilości traconych ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku biegł.

* Domyślną wartością jest **0.1**.

##### other-multiplier
Opcja ta odpowiada za ustawienie dodatkowego mnożnika ilości traconych ilości punktów najedzenia które straci gracz, jeżeli w trakcie ostatniego ticku robił coś, co nie jest przewidziane w poprzednich mnożnikach.

* Domyślną wartością jest **0.0**.

### hanging-tick-frequency
Opcja ta odpowiada za ustawienie ilości ticków co którą serwer będzie sprawdzał, czy wszystkie wiszące rzeczy (obrazy, ramki na przedmioty, itp.) nadal mają na czym wisieć, tj. czy blok do którego są przytwierdzone nadal istnieje.

* Domyślną wartością jest **100**.

### ticks-per
Opcja ta zawiera dwie subopcje, które odpowiadają za ilość ticków serwera które muszą upłynąć, żeby stała się określona akcja.

##### hopper-transfer
Opcja ta odpowiada za ilość ticków które muszą upłynąć między kolejnymi transferami przedmiotów z hoppera.

* Domyślną wartością jest **8**

##### hopper-check
Opcja ta odpowiada za ilość ticków która musi minąć między kolejnymi sprawdzeniami czy na hopperze znajduje się coś z czego może zebrać nowe przedmioty i czy ma dokąd je odłożyć.

* Domyślną wartością jest **1**.

## Niezgrupowane opcje
Poza opcjami zgrupowanymi w sekcje, jest jeszcze trochę opcji które nie są podzielone w sekcje. W tej "sekcji" artykułu będą one opisane.

### netty-threads
Opcja ta odpowiada za ustawienie ilości wątków netty do komunikacji z internetem. Nie zmieniaj tej wartości, jeżeli nie wiesz jak to działa.

* Domyślną wartością jest **4**.

### bungeecord
Opcja ta odpowiada za ustawienie czy serwer powinien ładować rozwiązania służące do komunikacji z bungeecordem.

* Wpisz `false` żeby wyłączyć wsparcie dla bungeecorda.
* Wpisz `true` żeby włączyć wsparcie dla bungeecorda.
* Domyślną wartością jest **false**.

### timeout-time
Opcja ta odpowiada za ustawienie ile sekund serwer powinien czekać na ukończenie ticku, zanim postanowi jednak uznać, że coś idzie bardzo nie tak i scrashować serwer.

* Domyślną wartością jest **60**.

### restart-on-crash
Opcja ta odpowiada za ustawienie czy serwer po crashu powinien podjąć próbę restartu.

* Wpisz `false` żeby wyłączyć automatyczne próby restartu.
* Wpisz `true` żeby włączyć automatyczne próby restartu.
* **W przypadku serwerów na craftserve opcja ta nic nie zmienia, nawet jeżeli wyłączysz w konfiguracji automatyczny restart serwera to serwer będzie uruchamiany ponownie.**
* Domyślną wartością jest **true**.

### restart-script
Opcja ta odpowiada za ustawienie lokalizacji skryptu służącego do restartu serwera.

* **W przypadku serwerów na craftserve opcja ta nic nie zmienia, niezależnie od tego ustawienia serwer będzie restartowany standardową metodą craftserve.**
* Domyślną wartością jest **./start.sh**.

### late-bind
Opcja ta odpowiada za ustawienie czy serwer powinien otwierać się na internet już po załadowaniu wszystkich rzeczy potrzebnych do wpuszczania graczy.

* Wpisz `false` żeby serwer otwierał się na internet tak szybko jak to możliwe.
* Wpisz `true` żeby serwer otwierał się na internet tak późno jak to możliwe.
* Otwieranie się jak najpóźniej może powodować problemy z pluginami i lepiej tego nie robić dopóki nie ma się dobrego powodu.
* Domyślną wartością jest **false**.

### sample-count
Opcja ta odpowiada za ustawienie ilu losowych graczy serwera serwer powinien wysyłać do gracza gdy ten przegląda liste serwerów w oknie gry wieloosobowej.

* Domyślną wartością jest **12**.

### player-shuffle
Opcja ta odpowiada za ustawienie ilości ticków która musi minąć aby serwer zmienił kolejność graczy. Serwer przetwarza dane od graczy w konkretnej kolejności. Jeżeli dwóch graczy jednocześnie uderzy jedno stworzenie, to zostanie zaliczone uderzenie tylko od gracza, który znalazł się wcześniej w kolejce przetwarzania danych. Zmiana kolejności na losową uniemożliwia wykorzystanie tej mechaniki do przewagi nad innymi graczami.

* Wpisz `0` żeby wyłączyć losowanie kolejności.
* Domyślną wartością jest **0**.

### filter-creative-items
Opcja ta odpowiada za ustawienie czy serwer powinien pilnować graczy w trybie kreatywnym, aby nie próbowali za pomocą cheatów dodawać sobie przedmiotów które nie są możliwe w grze.

* Wpisz `false` żeby wyłączyć pilnowanie graczy (możliwe jest bardzo proste crashowanie serwera przez graczy w trybie kreatywnym).
* Wpisz `true` żeby włączyć pilnowanie graczy.
* Domyślną wartością jest **true**.

### user-cache-size
Opcja ta odpowiada za ustawienie limitu ilości graczy przechowywanych w pliku _usercache.json_. Plik ten umożliwia szybszą prace serwera, ale jeżeli stanie się zbyt duży, to przestanie się to opłacać.

* Domyślną waartością jest **1000**.

### save-user-cache-on-stop-only
Opcja ta odpowiada za ustawienie czy serwer ma zapisywać plik _usercache.json_ tylko na zatrzymaniu serwera czy co jakiś czas.

* Wpisz `false` żeby serwer automatycznie zapisywał plik _usercache.json_ co jakiś czas.
* Wpisz `true` żeby serwer zapisywał plik _usercache.json_ tylko przy wyłączaniu serwera.
* Domyślną wartością jest **false**.

### moved-wrongly-threshold
Opcja ta odpowiada za ustawienie jak dokładnie serwer powinien pilnować czy gracze poruszają się prawidłowo.

* Im większa wartość tym mniej często pojawi się komunikat w stylu `player moved wrongly` w konsoli serwera, za to wprawny cheater będzie umiał wykorzystać to na swoją korzyść.
* Domyślną wartością jest **0.0625**.

### moved-too-quickly-multiplier
Opcja ta odpowiada za ustawienie jak dokładnie serwer powinien pilnować czy gracze nie poruszają się z jakiegoś powodu zbyt szybko.

* Im większa wartość tym mniej często pojawi się komunikat w stylu `player moved too quickly` w konsoli serwera, za to wprawny cheater będzie umiał wykorzystać to na swoją korzyść.
* Domyślną wartością jest **10**.

### item-dirty-ticks
Opcja ta odpowiada za ilość ticków która musi upłynąć między dwoma pełnymi sprawdzeniami czy rzeczy leżące na ziemi się nie zmieniły. Nie jest to zbyt częsta sytuacja.

* Spigot sam z siebie sprawdza przedmioty pobieżnie co tick, a w tej opcji możemy ustalić co ile ticków ma wykonać pełne dogłębne sprawdzenie.
* Domyślną wartością jest **20**.

###### źródło: https://www.spigotmc.org/wiki/spigot-configuration/
