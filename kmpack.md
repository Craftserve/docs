# KM Pack - FAQ

### Gdzie mogę przetestować KM Pack przed zakupem?

Możesz skorzystać z naszego serwera testowego, jego IP to `kmtesty.csrv.pl`, wersja gry to 1.15.2

### Czy w pakiecie KM Pack są najnowsze wyspy?

Najnowsze wyspy dodajemy na bieżąco po ich premierze na Kwadratowej Masakry.

### Jak zmienić wersję na gry na inną?

KM Pack jest oparty o silnik Paper 1.15.2, więc nie można jej zmienić.

### Czy mogę dodać własne pluginy?

Tak, jednak polecamy to robić tylko jeśli znasz się na tym.\
W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie wejść w folder `plugins`. Korzystając z menu **wgraj plik** wgraj odpowiedni plugin z rozszerzeniem `.jar`. Włącz serwer.

### Jak zmienić mapę na własną?

W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie znaleźć folder `world`. Usuń go (uwaga, dotychczasowy świat utraci się na stałe, jeśli chcesz go zachować nie zapomnij go pobrać). Zmień nazwę swojej własnej mapy na `world` i wgraj ją na serwer. Włącz serwer.\
*Uwaga, zmiana mapy na inną niż domyślna skutkuje brakiem możliwości przeprowadzania eventów!*

### Jak zmienić mapę na [świat vanilla](https://minecraft-pl.gamepedia.com/Powierzchnia) (zwykłą Minecraftową)?

W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie znaleźć folder `world`. Usuń go (uwaga, dotychczasowy świat utraci się na stałe, jeśli chcesz go zachować nie zapomnij go pobrać). Włącz serwer, standardowa mapa zostanie wygenerowana automatycznie.
*Uwaga, zmiana mapy na inną niż domyślna skutkuje brakiem możliwości przeprowadzania eventów!*

### Jak zresetować mapę na świat Kwadratowej Masakry i wszystkie pozostałe pliki?

W tym celu musisz wyłączyć serwer, przejść do panelu do zakładki **ustawienia**, a następnie wybrać zakładkę **formatuj**. Wybierz **wszystkie pliki** i kliknij formatuj (uwaga, dotychczasowy świat i wszystkie postępy zostaną utracone, jeśli chcesz je zachować nie zapomnij ich pobrać w zakładce **pliki**). Po zakończeniu procedury włącz serwer.

### Wgrałem własny świat, co zrobić by radiacja działała dalej?

W tym celu potrzebujesz uprawnień administratora.\
Użyj komendy `/safefromradiation PROMIEŃ`, gdzie jako `PROMIEŃ` podajesz promień obszaru, na którym **nie*\* ma być radacji od miejsca w którym stoisz.\
Dla przykładu, jeśli stoisz na koordynatach x:0 z:0 i wpiszesz komendę `/safefromradiation 100`, to radiacja nie będzie występowała w kwadracie zaczynającym się na x:-100 z:-100 i kończącym na x:100 z:100.

### Jak dać komuś admina?

W tym celu przejdź do panelu, wybierz zakładkę **konsola** i wpisz komendę `op NICK`, gdzie jako `NICK` podajesz nick osoby, której chcesz dać admina, na przykład `op jahumen`.\
\
**UWAGA!** Odradzamy nadawanie admina osobom, które chcą normalnie grać na serwerze. Powoduje to na przykład, że nie traci się żyć po śmierci, można otwierać sklepy innych, nie można uczestniczyć w walkach na arenach. Powinno nadawać się to tylko osobom, które nie uczestniczą w rozgrywce i nadzorują serwer.\
Pamiętaj, że konsola zawsze ma wszystkie uprawnienia, więc nikt z graczy nie musi być adminem - komendy możesz wykonywać z konsoli.

### Jak sprawdzić stan konta innego gracza?
To ile pieniędzy mają wszyscy gracze widoczne jest po wciśnięciu przycisku TAB, obok nicków graczy.

### W jaki sposób przekazać komuś pieniądze?

##### Jak utworzyć banknot?
W tym celu musisz stworzyć banknot, używając komendy `/withdraw KWOTA`, gdzie jako kwota podajesz ile pieniędzy chcesz wypłacić, na przykład `/withdraw 25`. Następnie możesz przekazać go komuś innemu.

##### Jak wpłacić banknot?
W tym celu trzymając banknot kliknij prawym przyciskiem myszy.

### W jaki sposób zarządzać pieniędzmi jako administrator?

W tym celu będziesz potrzebował uprawnienia administratora - komendy możesz wpisywać z konsoli lub konta z adminem.\
Pamiętaj, że gdy wpisujesz komendy z konsoli pomijasz `/`, np. `eco` zamiast `/eco`.

##### Jak dodać komuś pieniądze?
`/eco give NICK KWOTA`, gdzie jako `NICK` podajesz nick osoby, której chcesz dodać pieniądze, a jako `KWOTA` ilość pieniędzy, na przykład `/eco give jahumen 100`.

##### Jak zabrać komuś pieniądze?
`/eco take NICK KWOTA`, gdzie jako `NICK` podajesz nick osoby, której chcesz zabrać pieniądze, a jako `KWOTA` ilość pieniędzy, na przykład `/eco take jahumen 100`.

### Jak działają sklepy?

##### Jak utworzyć własny sklep?
W tym celu postaw skrzynkę, następnie patrząc na nią użyj komendy `/shop create LICZBA CENA-ZA-ILE-SPRZEDAJESZ CENA-ZA-ILE-SKUPUJESZ` trzymając w ręce przedmiot, którym chcesz handlować. W ciągu 15 sekund od wpisania komendy kliknij prawym klawiszem myszki na skrzynkę.\
\
`LICZBA` to liczba przedmiotu, który chcesz wymieniać, np. `64`\
`CENA-ZA-ILE-SPRZEDAJESZ` to cena za jaką inni będą mogli kupić przedmioty, np. `50`. Jeśli nie chcesz nic sprzedawać tylko skupować wpisz w tym miejscu 0.\
`CENA-ZA-ILE-SKUPUJESZ` to cena za jaką inni będą mogli sprzedać przedmioty, np. `50`. Jeśli nie chcesz nic kupować tylko sprzedawać wpisz w tym miejscu 0.\
\
Dla przykładu:\
Jeśli chcesz zrobić sklep w którym sprzedajesz 64 cobblestone za 8$ użyj komendy `/shop create 64 8 0` trzymając cobblestone.\
Jeśli chcesz zrobić sklep w którym skupujesz 16 papieru za 24$ użyj komendy `/shop create 16 0 24` trzymając papier.\
Jesli chcesz zrobić sklep w którym sprzedajesz 32 drewna za 6$ lub skupujesz za 2$ użyj komendy `/shop create 32 6 2` trzymając drewno.\
Utworzenie sklepu to koszt 5$.

##### Jak usunąć sklep?
W tym celu wpisz `/shop remove` i kliknij prawym przyciskiem myszy wybrany sklep. Zawartość skrzynki pozostanie nienaruszona.\
Jesli jesteś administratorem możesz usuwać sklepy innych graczy.

##### W jaki sposób utworzyć admin shop?
W tym celu potrzebujesz uprawnień administratora.\
Tworzy się go w ten sam sposób co zwykły sklep (postawienie skrzynki, wpisanie komendy trzymając odpowiedni przedmiot i kliknięcie prawym skrzynki), jednak na koniec komendy musisz dopisać `admin`, na przykład: `/shop create 32 6 2 admin`.

### Jak włączyć lub wyłączyć radiację na konkretnym regionie?
W tym celu potrzebujesz uprawnień administratora.\
Musisz zacząć od utworzenia regionu. W tym celu użyj komendy `//wand` lub stwórz drewnianą siekierę. Zaznacz jeden punkt uderzając lewym przyciskiem myszy, a następnia zaznacz drugi punkt klikając prawym przyciskiem myszy (region powstanie pomiędzy tymi dwoma punktami).
\
Użyj komendy `/rg define NAZWA`, gdzie jako `NAZWA` podaj nazwę regionu.\
\
Po utworzeniu regionu musisz dodać do niego flagę `radiation` za pomocą komendy `/rg flag NAZWA radiation STAN`, gdzie jako `NAZWA` podajesz nazwę wcześniej utworzonego regionu, a jako `STAN` podajesz `yes` - jeśli radiacja ma obowiązywać lub `no` - jeśli nie ma.\
Dla przykładu `/rg flag domek radiation no` sprawi, że w domku utworzonym na terenie messy nie będzie występowała radiacja.

### Skąd gracze mogą wziąć płyn lugola i eliksir życia?

Można je zakupić w domu aukcyjnym (po wejściu po schodach, na piętrze), który znajduje się na koordynatach `X: 300 Z: 450`.\
Administrator może przyznać komuś eliksir życia przy użyciu komendy `/potionoflife NICK ILOŚĆ-ŻYĆ` (więcej informacji w kolejnym punkcie).

### Jakich komend specyficznych dla KM packa mogę używać jako administrator?

`/dajzycie NICK ILOŚĆ` - komenda dodaje życia konkretnej osobie (jeśli podasz ujemną wartość to je zabierzesz). Automatycznie odbanowuje.\
`/res NICK` - komenda odbanowuje gracza jeśli umarł z powodu utraty żyć.\
`/uball` - komenda odbanowuje wszystkich graczy, którzy zginęli z powodu utraty żyć.\
`/potionoflife NICK ILOŚĆ-ŻYĆ` komenda dodaje do ekwipunku konkretnej osoby eliksir życia, zawierający odpowiednią ilość zyć. Dla przykładu `/potionoflife jahumen 3` umieści w ekwipunku gracza `jahumen` eliksir, który po wypicie doda mu 3 życia.

### Jak tworzyć płatne komendy?

W tym celu przejdź do panelu, wybierz zakładkę **pliki**. Otwórz folder `plugins`, następnie otwórz plugin `Essentials`. Otwórz plik `config.yml`. Wyszukaj linię `command-costs:` (domyślnie ma numer 623).\
Aby utworzyć płatną komendę kliknij kursor na końcu tej linii i kliknij enter. Kliknij spację dwukrotnie i wpisz nazwę komendy, na przykład `msg`, dodaj od niej dwukropek i finalnie podaj cenę. Dla przykładu:\
command-costs:\
  msg: 10\
Spowoduje to, że od teraz każde użycie komendy `/msg` będzie kosztowało 10$.

### Jak mogę powtórzyć eventy odbywające się do tej pory?

##### Arena PVP
*Gracze Kwadratowej Masakry walczą ze sobą o tytuł championa PVP tego sezonu.*\
\
Arena PVP znajduje się na koordynatach `X: -700 Z: 100`, gracze muszą się tam udać by oglądać bitwę. Aby dołączyć do walki należy użyć komendy `/pa pvp`. Osoby walczące muszą uderzyć tabliczkę `Itemy` by dostać przedmioty, a następnie uderzyć w blok żelaza gdy będą gotowi.\
Arenę można opuścić przy użyciu komendy `/pa leave`.

##### Odejdź z hukiem!
*Event PVP polegający na strzelaniu do przeciwnej drużyny z kuszy naładowanej fajerwerkami, w specjalnie przygotowanej arenie.*\
\
Arena do tego eventu znajduje się na koordynatach `X: -500 Z: -600`, gracze muszą się tam udać by oglądać bitwę. Aby dołączyć do walki należy użyć komendy `/pa fw`. Osoby walczące muszą uderzyć tabliczkę `bluekit` lub `redkit` w zależnosci od drużyny, a następnie uderzyć w blok żelaza gdy będą gotowi.\
Ważne jest to, że po rozpoczęciu gry lub po śmierci należy umieścić fajerwerki w drugiej ręce by móc ładować nimi kuszę.\
Arenę można opuścić przy użyciu komendy `/pa leave`.

##### Wyścig lodowej rzeki!
*Wyścig łódkami po lodzie, w 3 zespołach po 3 okrążenia, a następnie runda dla osób z najlepszym czasem.*
\
\
Arena do tego eventu znajduje się na koordynatach `X: 850 Z: -150`, gracze muszą się tam udać by oglądać wyścig.\
Osoba z uprawnieniami administratora musi wpisać komendę `/rc start WyścigLodowejRzeki ILOŚĆ-OKRĄŻEŃ`, np. `/rc start WyścigLodowejRzeki 3`.\
\
Gracze w celu dołączenia do wyścigu muszą kliknąć wiadomość `Click here to participate` na chacie. Gdy wszystkie chętne osoby dołącza do wyścigu administrator musi kliknąć `[Skip waiting]`.\
Rozpoczyna się wtedy 60 sekundowe odliczanie, po których gracze mogą wystartować.\
Wyścig można opuścić przy użyciu komendy `/rc leave`.\
Administrator może przerwać wyścig klikając `[Stop race]`.

##### Wyścig Złotej Trufli
\
Event odbywa się na nowej wyspie o tematyce grzybowej. Znajduje się na niej tor wyścigowy, na którym gracze ścigają się na świnkach.\
Początek toru znajduje się na koordynatach `X:-1450 Z:750`. Można dostać się tam przez znajdujący się na spawnie portal w kształcie dużego grzyba. Osoba z uprawnieniami administratora musi wpisać komendę `/kmevent start Wyścig-Złotej-Trufli`, na czas eventu radiacja zostaje wyłączona, a gracze mogą dołączać do wyścigu. Wyścig wystartuje samoczynnie po zapełnieniu 14 miejsc. Jeżeli nie ma wystarczającej liczby graczy należy użyć komendy `/rc skipwait WyścigZłotejTrufli`.\
\
Wyścig polega na 3 okrążeniach na torze na którym znajdują się półpłytki dające różne efekty. Półpłytki złote dają efekty pozytywne, takie jak szybkość, czy strzały z efektami, zaś żelazne negatywne, na przykład zatrzymanie w miejscu. Efekt "odporność na efekty" uniemożliwia nadanie nam jakichkolwiek efektów w czasie jego trwania. Na torze ukryty jest jeden skrót, który uruchamia się dźwignią. Skrót resetuje się po zakończeniu wyścigu. Wyścig można powtarzać dowolną ilość razy używając komendy `/rc start WyścigZłotejTrufli <ilość okrążeń>`. Nagrodą w evencie była specjalna korona dająca bonus do szybkości poruszania się. Aby ją przywołać należy użyć komendy `/givemodel crown` (w wersji paczki 1.5 `/givemodel Korona`) i dać ją zwycięzcy. W celu założenia korony trzeba wpisać `/hat` trzymając ją w ręce.\
Po zakończeniu eventu należy użyć komendy `/kmevent stop` - to przywróci radiację na wyspie grzybowej.


##### Kolejne eventy
\
Nowsze eventy, na przykład `Szara-Góra` możesz uruchamiać przy użyciu komendy `/kmevent` (wymaga uprawnień administratora lub wpisania w konsoli).\
W celu sprawdzenia listy dostępnych eventów użyj komendy `/kmevent list`.\
Po zdecydowaniu się na konkretny event użyj komendy `/kmevent start NAZWA`, na przykład `/kmevent start Szara-Góra`.\
Po zakończeniu eventu użyj komendy `/kmevent stop`.

### Jak dostać się do netheru?
\
Domyślnie nether jest wyłączony. Włącza się automatycznie po uruchomieniu eventu `Baron-Somedi`. W tym celu należy użyć komendy `/kmevent start Baron-Somedi`, na chacie wyświetli się informacja o włączeniu netheru. Portale z obsydianu są całkowicie wyłączone, w celu dostania się do netheru należy wskoczyć do pustki w dowolnym miejscu (po prostu zeskoczyć z wyspy), teleport znajduje się na wysokości `y=-64`.\
Używany jest tutaj taki sam przelicznik jak na vanilli, `*8`. Oznacza to, że jeśli wskoczy się do netheru w normalnym świecie na koordynatach `X: 800, Z: 400`, to pojawi się w netherze na koordynatach 8 razy mniejszych, tj. `X: 100, Z: 50`. W drugą stronę działa to odwrotnie, mnoży się razy 8.\
Pamiętaj o tym, że w netherze grawitacja jest odwrócona! W związku z tym będziesz domyślnie "spadał" do góry, jeśli chcesz udać się w dół przytrzymaj shift (działa jak skakanie spacją w normalnym świecie, ale w dół).

### W jaki sposób włączyć farmy zero tickowe?
\
Od wersji 1.15 farmy zero tickowe zostały naprawione przez Mojang, więc nie jest to możliwe na nowszych paczkach. Mimo to działają na wcześniejszej wersji - pakiecie Kwadratowa Masakra 1.0 z września 2019 (KM 2019.09 - 1.0).\
W celu jego instalacji należy zalogować się do panelu, wyłączyć serwer, przejść do zakładki `ustawienia`, następnie `silniki` i wybrać pakiet `KM 2019.09 - 1.0`, kliknąć zapisz. Przejść do zakładki `formatuj`, wybrać `wszystkie pliki` i zatwierdzić `formatuj`. Następnie włączyć serwer.\
**UWAGA** Spowoduje to zresetowanie wszystkich dotychczasowych plików i zainstalowaniu pakietu Kwadratowa Masakra z pierwszego sezonu.\
Po zainstalowaniu pakietu należy przejść do zakładki `pliki`, otworzyć plik `paper.yml`. Odnaleźć linię `fix-zero-tick-instant-grow-farms: true` (domyślnie numer 93) i zamienić `true` na `false`. Następnie należy kliknąć `Zapisz` w górnej części strony i przeładować serwer wyłączając go i włączając.\
\
W celu szybkiego zdobywania przedmiotów z farm na najnowszej wersji pakietu możliwe jest utworzenie farmy opartej o [detektory (observer block)](https://minecraft-pl.gamepedia.com/Detektor), jednak nie polecamy tego ze względu na zaburzanie gospodarki serwera.

#### Życzymy świetnej rozgrywki i niezapomnianych przygód ze znajomymi na paczce Kwadratowej Masakry!
