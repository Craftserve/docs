Pregenerowanie Świata
=====================

Minecraft jest grą z losowo generowanym, masywnym światem - jego granice sięgają aż ±30 000 000 długości i szerokości oraz 0-255 wysokości. Wygenerowanie tak dużego świata trwałoby wiele godzin (być może dni), nawet na najszybszych domowych komputerach. Dlatego Mojang zdecydował się na **generowania chunków** (klastrów 16x16x256 bloków) w miare, **jak gracze się do nich zbliżają**.

O ile w grze single-player ma to małe znaczenie, to na serwerze kilku-kilkunastu graczy eksplorujących świat powoduje, że generator chunków znacznie **obciąża CPU** i w konsekwencji **spadek TPS**. By temu zapobiec wystarczy przed **rozpoczęciem zabawy wygenerować obszar świata o rozmiarze odpowiadający naszym potrzebom**.

**Mapa o rozmiarze 10 000x10 000 bloków powinna w zupełności wystarczyć pod Survival na kilkunastu graczy.** Przy tych parametrach, zakładając 20 graczy, na każdego przypada średni wycinek mapy o wymiarach 2200x2200 bloków. 

Bukkit, Spigot i Paper
----------------------
