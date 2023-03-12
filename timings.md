Lagi na serwerze Sponge, Bukkit, Spigot, Paper lub Purpur
===============
Pierwszym krokiem, jaki należy podjąć w przypadku problemów z lagami, jest określenie ich natury - czy winna jest strona klienta, serwera czy może dostawca łącza internetowego.




Ticks per second
----------------
Domyślnie, serwer Minecraft jest zaprojektowany tak, że **w ciągu sekundy** główna pętla gry wykonuje **20 cykli** (zwanych **tickami**) - jeśli tak jest, mówimy wtedy, że serwer ma **TPS=20**. Pod dużym obciążeniem może on jednak nie dać rady przeprowadzić obliczeń na czas, w związku z czym liczba cykli może spaść poniżej 20 i w takiej sytuacji mamy do czynienia z lagami serwerowymi.

By sprawdzić, czy lagi są winą serwera, użyj komendy **/tps** wyświetli Ci liczbę ticków na sekundę. Jeśli wartość ta jest mniejsza niż 20, to oznacza to, że problem jest po stronie serwera, któremu obliczenia zajmują zbyt wiele czasu.

W przypadku **Sponge** jest to komenda **/sponge tps**, a dla **Forge** jest to **/forge tps**




Spark Profiler
--------

Do poznania przyczyny lagów możesz użyć **Sparka**. Możesz go pobrać jako [plugin](https://www.spigotmc.org/resources/spark.57242/) albo [mod](https://www.curseforge.com/minecraft/mc-mods/spark/files) w zależności od silnika, który masz na serwerze. W przypadku **Purpura** nie trzeba go wgrywać, ponieważ jest on już w niego wyposażony. **Spark** jest bardzo przydatnym narzędziem diagnostycznym, które znajdziesz pod komendą **/spark profiler**.

Jeśli chcesz dowiedzieć się, czemu Twój serwer działa zbyt wolno, użyj komendy **/spark profiler start**. Następnie przez **co najmniej 10 minut graj aktywnie**, wykonując te same czynności co zwykle. Po tym czasie wpisz **/spark profiler stop** - otrzymasz link do strony ze szczegółowymi statystykami.

Tak uzyskany link możesz wkleić na nasz Discord, by uzyskać rady co do optymalizacji.



Timings
--------

Jeśli z jakiegoś powodu nie możesz użyć **Sparka**, możesz wykorzystać to, co oferują silniki **Spigot** lub **Paper**. Ich narzędzie znajdziesz pod komendą **/timings**.

Metoda ta prawie nie różni się od tej wymienionej powyżej. Diagnozowanie lagów rozpocznij od wpisania komendy **/timings on**. Następnie przez **co najmniej 10 minut graj aktywnie**, wykonując te same czynności co zwykle. Po tym czasie wpisz **/timings paste** - otrzymasz link do strony ze szczegółowymi (szczególnie w przypadku Papera) statystykami.

Dla **Sponge** są to odpowiednio **/sponge timings on** oraz **/sponge timings paste**.




# Interpretacja

[**Jak samemu interpretować Spark Profiler** - Spark Docs](https://spark.lucko.me/docs/Using-the-viewer)

[**Jak samemu interpretować timingi** - SpigotMC](https://www.spigotmc.org/wiki/timings/)
