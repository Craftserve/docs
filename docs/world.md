# Świat serwerowy
## Spis treści
- [Świat serwerowy](#świat-serwerowy)
  - [Spis treści](#spis-treści)
  - [Tworzenie nowego świata](#tworzenie-nowego-świata)
  - [Wgrywanie własnej mapy](#wgrywanie-własnej-mapy)
  - [Ustawienie własnego seedu](#ustawienie-własnego-seedu)
  - [Przenoszenie świata z serwera na singleplayer](#przenoszenie-świata-z-serwera-na-singleplayer)

<a name='tworzenie'></a>
## Tworzenie nowego świata
Aby utworzyć nową mapę należy:
* Wyłączyć serwer
* Wejść w pliki serwera
* Usunąć obecny świat na serwerze, usuwając foldery **world**, **world_nether** oraz **world_the_end**. Jeśli nazwa świata została zmieniona w pliku **server.properties**, to usuwamy foldery **<c. nazwa>**, **<c. nazwa>_nether** oraz **<c. nazwa>_the_end**. (Jeżeli chcemy zachować mapę, to najlepiej będzie ją pobrać na nasz komputer najlepiej za pomocą **[FTP](https://github.com/Craftserve/docs/blob/master/ftp.md)**).

![1](img/world/1.png)

* Jeżeli w pliku **server.properties** w linijce **level-seed** jest ustawiony seed świata, należy go usunąć, a następnie zapisać plik, żeby wygenerował się nowy, inny. Inaczej zresetuje się tylko nasz postęp.
* Włączamy serwer

<a name='wgrywanie'></a>
# Wgrywanie własnej mapy
Aby wgrać swój własny świat należy:
* Wyłączyć serwer
* Wejść w pliki serwera
* Usunąć stary świat (Informacje jak to zrobić znajdują sie powyżej)
* Wgrać swój nowy świat do głównego folderu serwera

![1](img/world/3.png)

![1](img/world/4.png)

* Następnie zmienić nazwę folderu na **world**

![1](img/world/5.png)

* Włączyć serwer

<a name='seed'></a>
## Ustawienie własnego seedu
Aby ustawić własny seed należy:
* Wyłączyć serwer
* Wejść do głównego katalogu serwera
* Otworzyć plik **server.properties**
* Wpisać w linijce **level-seed=** swój seed

![1](img/world/7.png)

* Zapisać plik
* Usunąć stary świat (informacje o tym jak to zrobić znajdują się na samej górze)
* Włączyć 

<a name='dim'></a>
## Przenoszenie świata z serwera na singleplayer
Aby przenieść świat z serwer na swój komputer należy:
* Pobrać nasz świat
* Wejść w folder netheru, a następnie pobrać folder **DIM-1**
* Wejść w folder endu, a następnie pobrać folder **DIM1**
* Wcisnąć skrót klawiszowy **Windows + R** i wpisać: **%appdata%**
* Otworzyć folder **.minecraft**, a w nim folder **saves**
* Wgrać tam świat, który pobralismy
* Wrzucić do niego foldery **DIM-1** oraz **DIM1**

![1](img/world/8.png)
