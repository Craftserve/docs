# KM Pack - FAQ

### Gdzie mogę przetestować KM Pack przed zakupem?

Możesz skorzystać z naszego serwera testowego, jego IP to `kmtesty.csrv.pl`, wersja gry to 1.15.2

### Czy w pakiecie KM Pack są najnowsze wyspy?

Tak, pakiet został zaktualizowany do najnowszej wersji.

### Jak zmienić wersję na gry na inną?

KM Pack jest oparty o silnik Paper 1.15.2, więc nie można jej zmienić.

### Czy mogę dodać własne pluginy?

Tak, jednak polecamy to robić tylko jeśli znasz się na tym.\
W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie wejść w folder `plugins`. Korzystając z menu **wgraj plik** wgraj odpowiedni plugin z rozszerzeniem `.jar`. Włącz serwer.

### Jak zmienić mapę na własną?

W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie znaleźć folder `world`. Usuń go (uwaga, dotychczasowy świat utraci się na stałe, jeśli chcesz go zachować nie zapomnij go pobrać). Zmień nazwę swojej własnej mapy na `world` i wgraj ją na serwer. Włącz serwer.

### Jak zmienić mapę na świat vanilla (zwykłą Minecraftową)?

W tym celu musisz wyłączyć serwer, przejść w panelu do zakładki **pliki**, a następnie znaleźć folder `world`. Usuń go (uwaga, dotychczasowy świat utraci się na stałe, jeśli chcesz go zachować nie zapomnij go pobrać). Włącz serwer, standardowa mapa zostanie wygenerowana automatycznie.

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

Można je zakupić w domu aukcyjnym (po wejściu po schodach, na piętrze), który znajduje się na koordynatach `X: 300 Z: 450`.

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

##### Kolejne eventy
\
Nowsze eventy, na przykład `Szara-Góra` możesz uruchamiać przy użyciu komendy `/kmevent` (wymaga uprawnień administratora lub wpisania w konsoli).\
W celu sprawdzenia listy dostępnych eventów użyj komendy `/kmevent list`.\
Po zdecydowaniu się na konkretny event użyj komendy `/kmevent start NAZWA`, na przykład `/kmevent start Szara-Góra`.\
Po zakończeniu eventu użyj komendy `/kmevent stop`.

#### Życzymy świetnej rozgrywki i niezapomnianych przygód ze znajomymi na paczce Kwadratowej Masakry!
