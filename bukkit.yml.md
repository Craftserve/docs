# bukkit.yml - poradnik
 
Plik bukkit.yml jest jednym z plików konfiguracyjnych silników bukkit, craftbukkit, spigot i paper. Wiele osób nie zwraca na niego uwagi, a można w nim skonfigurować wiele przydatnych ustawień, które mogą poprawić wydajność serwera, lub troche zmienić jego zachowanie. Plik składa się z kilku sekcji, na które podzielone są konkretne ustawienia silnika. Niestety, ale w zależności od wersji serwera i silnika ustawienia mogą pojawiać się w różnej kolejności, a niektóre, jeżeli chcemy je zmienić, musimy samodzielnie .

## settings
Sekcja ta odpowiada za dość ogólne ustawienia dotyczące działania serwera.

### allow-end
Opcja ta odpowiada za włączanie i wyłączaniu endu na serwerze. Jeżeli end jest wyłączony - nie będzie możliwe wejście do endu. 

* Wpisz `false` aby wyłączyć end.
* Wpisz `true` żeby włączyć end.
* Domyślną wartością jest **true**.

### warn-on-overload
Opcja ta odpowiada za włączanie i wyłączanie wyskakujących w konsoli serwera informacji "_[WARNING] Can't keep up! Did the system time change, or is the server overloaded?_" gdy serwer wykryje problem z szybkością swojego działania.

* Wpisz `false` aby wyłączyć informację o przeciążeniu.
* Wpisz `true` żeby włączyć informację o przeciążeniu.
* Domyślną wartością jest **true**.

### permissions-file
Opcja ta odpowiada za ustawianie nazwy pliku wykorzystywanego przez silnik do obsługi uprawnień.

**To nie jest plik w którym możesz ustawić uprawnienia dla graczy. Nie powinieneś go modyfikować, bo możesz potencjalnie zepsuć sobie serwer. Do tworzenia rang na serwerze użyj pluginu, np luckperms.**

* Domyślną wartością jest **permissions.yml**.

### update-folder
Opcja ta odpowiada za ustawianie nazwy katalogu w katalogu _plugins/_, z którego serwer skopiuje pliki pluginów przy restartcie serwera. 

Możesz do tego folderu wrzucić pliki .jar pluginów, które chcesz dograć, ale nie chcesz restartować serwera w danej chwili. Po prostu umieść w katalogu o tej nazwie pliki pluginów, a serwer sam powinien je załadować, gdy będzie od nowa włączany lub restartowany.

* Domyślną wartością jest **update** co sprawia, że ścieżką w której powinieneś wrzucić pluginy jest _plugins/update/_.

### use-exact-login-location
Opcja ta odpowiada za ustawianie zachowania serwera przy logowaniu gracza. W normalnych warunkach gra przy logowaniu sprawdza, czy miejsce w którym wylogował się gracz jest bezpieczne do zalogowania, np nie pojawiły się tam bloki, które mogą uwięzić gracza i udusić. Jeżeli takie znaki się tam znajdą, to gracz zostanie przeniesiony wyżej, aż będzie tak wysoko, że nie będzie kolidował z blokami i będzie mógł się bezpiecznie pojawić.

* Opcja ta nie pojawia się domyślnie w pliku _bukkit.yml_ generowanym przez silnik spigot na wersję 1.14.4. Jeżeli chcesz zmienić wartość domyślną, musisz dopisać tę opcję ręcznie do sekcji. Pamiętaj, żeby uważać na prawidłową ilość spacji!
* Wpisz `false`, jeżeli chcesz, żeby gra zachowywała się standardowo
* Wpisz `true`, żeby gracz którego miejsce wylogowania zostało zabudowane blokami po prostu się zaczął w nich dusić.
* Domyślną wartością jest **false**.

### world-container
Opcja ta odpowiada za ustawianie katalogu w którym będą znajdować się wszystkie pliki światów serwera. Jeżeli opcji tej nie będzie w ogóle w sekcji ustawień, to nie będzie używany żaden specjalny folder. Gdy Twój serwer znajduje się na craftserve to nie musisz w ogóle się tym przejmować, to jest przydatne tylko w ściśle określonych sytuacjach, które na craftserve nigdy się nie zdarzą. **Jeżeli zmienisz tę wartość, podgląd mapy na stronie craftserve może przestać działać. lepiej tego nie robić.**

* Opcja ta nie pojawia się domyślnie w pliku _bukkit.yml_ generowanym przez silnik spigot na wersję 1.14.4. Jeżeli chcesz zmienić wartość domyślną, musisz dopisać tę opcję ręcznie do sekcji. Pamiętaj, żeby uważać na prawidłową ilość spacji!

### plugin-profiling
Opcja ta odpowiada za ustawianie czy komenda _/timings_ powinna być dostępna. Włączenie jej może spowodować bardzo delikatne zwiększenie obciążenia serwera, za to może dać wiele ciekawych informacji na temat pracy pluginów i ich wpływu na wydajność serwera.

* Wpisz `false` aby wyłączyć profilowanie pluginów.
* Wpisz `true` aby włączyć profilowanie pluginów.
* Domyślną wartoscią jest **false**.

### connection-throttle
Opcja ta odpowiada za ustawianie ilości milisekund między rozłączeniem gracza a jego ponownym wejściem. Jeżeli gracz po rozłączeniu zechce połączyć się z serwerem jeszcze raz, ale nie upłynęła jeszcze wymagana ilość czasu, zostanie rozłączony od serwera z komunikatem _Connection throttled_. 

* Ustawianie bardzo niskich wartości może być bardzo złym pomysłem, ponieważ nawet jedna osoba w kółko łącząca się i wychodząca potrafi w znaczącym stopniu obciążyć serwer.
* Domyślną wartością jest **4000**.

### query-plugins
Opcja ta odpowiada za ustawianie czy serwer przy tzw. query (_np za pomocą strony https://dinnerbone.com/minecraft/tools/status/_)powinien podawać listę swoich pluginów. Jeżeli z jakiegoś powodu chcesz ukryć pluginy na swoim serwerze, to wyłączenie tej opcji jest dobrym pomysłem.

* Wpisz `false` aby wyłączyć wyświetlanie pluginów przy zapytaniu.
* Wpisz `true` aby włączyć wyświetlanie pluginów przy zapytaniu.
* Domyślną wartością jest **true**.

### deprecated-verbose
Opcja ta odpowiada za ustawianie czy serwer powinien informować w logach, gdy plugin próbuje użyć przestarzałej funkcji, która nie powinna być już używana. Przydatne, gdy akurat chcesz napisać plugin, ale w normalnych warunkach domyślne ustawienia są w sam raz – ostrzeżenie o przestarzałej metodzie pozwoli Ci zauważyć, że plugin który akurat wgrałeś jest przestarzały i warto przemyśleć przejście na nowszą wersję, lub zmianę pluginu, w końcu nikt raczej nie chce, żeby nagle po aktualizacji silnika serwer przestał mu działać poprawnie.

* Wpisz `false` aby całkowicie wyłączyć ostrzeżenia.
* Wpisz `default` żeby włączyć ostrzeżenia których twórca pluginu nie wyciszył.
* Wpisz `true` aby włączyć wszystkie ostrzeżenia.
* Domyślną wartością jest **default**.

### shutdown-message
Opcja ta odpowiada za ustawianie wiadomości z którą gracze zostaną wyrzuceni z serwera gdy ten zostanie wyłączony za pomocą komendy _/stop_.

* Kolory do wiadomości można dodać za pomocą kodu koloru wg wzorca ([>>KLIK<<](https://static.planetminecraft.com/files/resource_media/screenshot/1807/example2-1518839184.png)), lecz zamiast symbolu ampersandu `&` należy użyć symbolu paragrafu `§`.
* Domyślną wartością jest **Server closed**.


## spawn-limits
Sekcja ta odpowiada za ustawienia dotyczące limitów naturalnego spawnu różnego typu stworów. Limity dotyczą tylko mobów spawnujących się dookoła graczy, moby znajdujące się daleko od graczy nie są załadowane, więc nie są brane pod uwagę. Co więcej, moby spawnowane przez mobspawnery i komendy nie podlegają tym limitom, one mają swoje własne, niezależne limity. Zmniejszenie limitów może poprawić wydajność serwera.

### monsters
Opcja ta odpowiada za ustawianie limitu spawnowanych potworów (_szkielety, zombie, creepery itp._) na świecie.

* Domyślną wartością jest **70**.

### animals
Opcja ta odpowiada za ustawianie limitu spawnowanych zwierząt (_krowy, konie, koty, papugi itp._) na świecie.

* Domyślną wartością jest **15**.

### water-animals
Opcja ta odpowiada za ustawianie limitu spawnowanych zwierząt wodnych (_ośmiornice, ryby itp._) na świecie.

* Domyślną wartością jest **5**.

### ambient
Opcja ta odpowiada za ustawianie limitu spawnowanych zwierząt wprowadzających nastrój (_nietoperze itp._) na świecie.

* Domyślną wartością jest **15**.


## chunk-gc
Sekcja ta odpowiada za ustawienia dotyczące narzędzia od sprzątania pamięci RAM serwera z chunków, które nie powinny być załadowane, ale z jakiegoś powodu po użyciu nie zostały z tej pamięci usunięte. W dzisiejszych czasach zdarza się to niezwykle rzadko, jeżeli jednak serwer z niewyjasnionych przyczyn potrafi sam z siebie zjadać coraz więcej pamięci to można rozważyć włączenie tej opcji jako jedną z metod na zapobieganiu takiego marnowania pamięci.

### period-in-ticks
Opcja ta odpowiada za czas który serwer będzie czekał między kolejnymi sprawdzeniami, czy są jakieś niepotrzebne chunki świata załadowane w pamięci. Czas wyraża się w tickach, a sprawnie działający serwer wykonuje 20 ticków na sekundę. Jest to niezbyt lekka operacja, więc uruchamianie tego zbyt często może niepotrzebnie obciążyć Ci serwer.

* Wpisz `0` żeby wyłączyć chunk gc.
* Domyślną wartością jest **600**, co oznacza, że domyślnie chunk gc uruchomi się co około 30 sekund.

### load-threshold
Opcja ta odpowiada za ilość załadowanych chunków świata, która jest wymagana żeby serwer uruchomił chunk gc. Jeżeli ilość załadowanych chunków będzie mniejsza niż ustawiona tu wartość, nawet po upłynięciu wymaganego czasu chunk gc nie zacznie pracy.

* Opcja ta nie pojawia się domyślnie w pliku _bukkit.yml_ generowanym przez silnik spigot na wersję 1.14.4. Jeżeli chcesz zmienić wartość domyślną, musisz dopisać tę opcję ręcznie do sekcji. Pamiętaj, żeby uważać na prawidłową ilość spacji!
* Wpisz `0` żeby wyłączyć chunk gc.
* Domyślną wartością jest **0**, co oznacza, że domyślnie chunk gc jest wyłączony. Na ogół nie ma potrzeby, żeby go włączać.

## ticks-per
Sekcja ta odpowiada za ustawienia dotyczące częstotliwości z którą będą się wydarzały różne wydarzenia w świecie gry. **Zdrowy serwer wykonuje 20 ticków na sekundę, więc ustawienie jakiegoś odstępu na 20 ticków sprawi, że wydarzenie w grze nastąpi co sekundę!**

### animal-spawns
Opcja ta odpowiada za ilość ticków, które serwer powinien odczekać między kolejnymi próbami spawnowania zwierząt (krowy, konie, koty, papugi itp.) w świecie gry.

* Wpisanie wartości mniejszej od zera sprawi, że zostanie użyta wartość `400`.
* Domyślną wartością jest **400**.

### monster-spawns
Opcja ta odpowiada za ilosć ticków, które serwer powinien odczekać między kolejnymi próbami spawnowania potworów (szkielety, zombie, creepery itp.) w świecie gry.

* Wpisanie wartości mniejszej od zera sprawi, że zostanie użyta wartość `1`.
* Domyślną wartością jest **1**.

### autosave
Opcja ta odpowiada za ilość ticków, któ©e serwer odczeka między kolejnymi zapisami wszystkiego na dysk.

**W Wypadku serwerów na craftserve to ustawienie niewiele zmieni, bo panel sam i tak wymusi zapis na dysk co jakiś czas. Tym ustawieniem można jedynie sprawic, że zapis będzie następował częściej!**

* Wpisanie wartości mniejszej od zera sprawi, że zostanie użyta wartość `0`.
* Domyślną wartością jest **6000**.

## aliases
Sekcja ta jest pozostałością po dawniejszej formie zapisywania aliasów do komend w grze. Teraz aliasy te znajdują się w pliku commands.yml.

## database
Sekcja ta służy do ustawiania danych dostępowych bazy danych dla pluginów, które chcą używać bazy danych którą poda im silnik serwera. Niestety, ale takich pluginów jest garstka, więc nie będziemy jej tutaj omawiać.

## worlds
Sekcja ta służy do konfigurowania ustawień światów, które domyślnie są ładowane przez silnik. Jako, że można to równie dobrze skonfigurować w pliku server.properties, to nie bedziemy omawiać tej sekcji.

###### źródło: https://bukkit.gamepedia.com/Bukkit.yml
