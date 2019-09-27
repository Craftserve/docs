Lagi na serwerze Sponge, Bukkit, Spigot lub Paper
===============
Pierwszym krokiem jaki należy podjąć w przypadku problemów z lagami jest określenie ich natury - czy winna jest strona klienta, serwera czy może dostawca łącza internetowego.

Ticks per second
----------------
Domyślnie, serwer Minecraft jest zaprojektowany tak, że **w ciągu sekundy**, główna pętla gry wykonuje **20 cykli** (zwanych **tickami**) - jeśli tak jest, mówimy wtedy, że serwer ma **TPS=20**. Pod dużym obciążeniem może on jednak nie dać rady przeprowadzić obliczeń na czas, w związku z czym liczba cykli może spaść poniżej 20 i w takiej sytuacji mamy do czynienia z lagami serwerowymi.

By sprawdzić czy lagi są winą serwera użyj komendy **/tps** wyświetli Ci liczbę ticków na sekundę. Jeśli wartość ta jest mniejsza niż 20, znaczy to, że problem jest po stronie serwera, któremu obliczenia zajmują zbyt wiele czasu.

W przypadku **Sponge** jest to komenda **/sponge tps**, a dla **Forge** jest to **/forge tps**

Timings
--------

**Spigot** i **Paper** wyposażone są w bardzo przydatne narzędzie diagnostyczne jakim jest komenda **/timings**. **Bukkit** nie posiada tej, jak i wielu innych funkcji, dlatego zachęcamy do przesiadki na wcześniej wspomniane.

Jeśli chcesz dowiedzieć się czemu Twój serwer ledwo zipie użyj komendy **/timings on**. Następnie, przez **co najmniej 10 minut, graj aktywnie** wykonując te same czynności co zwykle. Po tym czasie wykonaj **/timings paste**. Otrzymasz link do strony ze szczegółowymi (szczególnie w przypadku papera) statystykami.

Dla **Sponge** są to odpowiednio **/sponge timings on** oraz **/sponge timings paste**.

Tak uzyskany link możesz wkleić na nasz Discord, by uzyskać rady co do optymalizacji.

# Interpretacja

[**Jak samemu interpretować timingi** - SpigotMC](https://www.spigotmc.org/wiki/timings/)

[**Interpretacja timingów** - tłumaczenie autorstwa artur9010](https://ucraft.pl/forum/thread/188-czym-sa-i-jak-interpretowac-timmingi/)
