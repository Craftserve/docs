Logi i raporty z crashy
=====================

Spis treści
-----------

* [Podstawy](#podstawy)
* [Jak interpretować logi](#interpretacja)
* [Najczęstsze błędy](#bledy)

<a name="podstawy"><h2>Podstawy</h2></a>

Twój serwer nie chce się uruchomić albo świeżo wgrany plugin lub mod nie działa? Pierwszym miejscem do którego powinieneś się udać są foldery **/logs/** i **/crash-reports/** na Twoim serwerze:

![Logi i crash reporty](img/logi.png)

Każdy plik w folderze **/logs/** zawiera pełny log z danego uruchomienia Twojego serwera. Najważniejszy jest plik **latest.log** (**fml-server-latest.log** na niektórych wersjach Forge) - zawiera on informacji z najnowszej sesji serwera. **Przy każdym uruchomieniu serwera plik ten jest nadpisywany**, a stary log jest pakowany do archiwum **tar.gz** z nazwą będącą datą uruchomienia serwera.

Raporty z crashy znajdziesz natomiast w folderze **crash-reports** - ich nazwy opatrzone są datą i godziną crashu. Crash-report zawiera to skróconą wersję logu oraz okoliczności w jakich serwer scrashował.

# PAMIĘTAJ!
**Wyślij plik *latest.log*** zanim zadasz jakiekolwiek pytanie o scrashowany serwer lub niedziałający plugin na naszym Discordzie.

<a name="interpretacja"><h2>Interpretacja logów</h2></a>

<h3>Czym są logi?</h3>

Log (po polsku "dziennik") jest uporządkowaną chronologicznie listą najważniejszych zdarzeń z pojedynczego uruchomienia serwera.Każdy wpis do logu opatrzony jest datą oraz godziną, tak aby łatwo było zlokalizować interesujące nas wydarzenia.
W pliku dziennika znajdziesz takie informacje jak parametry startowe serwera, ładowanie każdego modu czy pluginu, światów, a nawet ich populację mobami.

Główną cechą logów jest ich czytelność - dobrze skonstruowane mają być zrozumiałem dla przeciętnego administratora niebędącego programistą, dlatego podstawowa znajomość języka angielskiego w połączeniu z Google zazwyczaj są wystarczające.


 <h5>Przykład 1. Startujący serwer Forge</h5>

 Załóżmy, że mamy serwer Forge. Zaglądając do pliku **latest.log** zauważymy, że wiele z linijek jest napisanych prostym angielskim.

    [17:31:30] [Server thread/INFO] [FML]: MinecraftForge v14.23.5.2847 Initialized
    [17:31:30] [Server thread/INFO] [FML]: Starts to replace vanilla recipe ingredients with ore ingredients.
    [17:31:31] [Server thread/INFO] [FML]: Invalid recipe found with multiple oredict ingredients in the same ingredient...
    [17:31:31] [Server thread/INFO] [FML]: Replaced 1227 ore ingredients
    [17:31:31] [Server thread/INFO] [FML]: Config directory created successfully
    [17:31:31] [Server thread/INFO] [FML]: Searching /home/servers/684256/./mods for mods
    [17:31:32] [Server thread/INFO] [FML]: Forge Mod Loader has identified 4 mods to load
    [17:31:32] [Server thread/WARN] [FML]: Missing English translation for FML: assets/fml/lang/en_us.lang
    [17:31:33] [Server thread/INFO] [FML]: Attempting connection with missing mods [minecraft, mcp, FML, forge] at CLIENT
    [17:31:33] [Server thread/INFO] [FML]: Attempting connection with missing mods [minecraft, mcp, FML, forge] at SERVER
    [17:31:33] [Server thread/INFO] [FML]: Processing ObjectHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Found 1169 ObjectHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Identifying ItemStackHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Found 0 ItemStackHolder annotations
    [17:31:33] [Server thread/INFO] [FML]: Configured a dormant chunk cache size of 0```

<h3>Słowa kluczowe</h3>

W poszukiwaniu przyczyny naszych problemów przydają się **słowa kluczowe** poprzedzające **każdy wpis** do dziennika. Jak to jest pokazane w **przykładzie 1.** każdy wpis poprzedzony jest tagami: `[17:31:33] [Server thread/INFO] [FML]`.
* `[17:31:33]` - to oczywiście godzina, o której dane zdarzenie miało miejsce. Czasami podawana jest również data.
* `[FML]` - pojawia się tylko w logach serwerów Forge - oznacza Forge Mod Loader.
* `[Server thread/INFO]` - najważniejszy z tagów, `Server thread` określa proces, a `INFO` **to rodzaj wpisu do dziennika**.

**Znając typy wpisów łatwo znajdziemy powód problemu!**
* `INFO` - to wpis informacyjny. Zazwyczaj informuje nas, że dana akcja przebiegła pomyślnie. Dlatego w większości przypadków będziemy pomijać linijki **INFO** przy troubleshootingu.
* `WARN` - to inaczej ostrzeżenie. Najczęściej taka linijka pojawi się w momencie, gdy serwer napotka jakiś wyjątek, ale może działać dalej (patrz **przykład 2.** - Authme - protectInventory).
* `ERROR` - serwer napotkał błąd który uniemożliwił jego (lub pluginu) dalsze działanie (patrz **przykłady 4. oraz 5.**).


Jeśli nasz serwer nie działa tak jak powinien, pierwszym co powinniśmy zrobić, to otworzyć plik **latest.log** (bez uruchamiania serwera - **każde jego uruchomienie nadpisuje latest.log**) i poszukać (**CTRL + F**) wpisów poprzedzonych `WARN` lub `ERROR`

<a name="bledy"><h2>Najczęstsze błędy i jak je rozpoznać w logach</h2></a>

<h5>Przykład 2. WARN - AuthMeReloaded i niedziałające protectInventory</h5>

Załóżmy, że udało nam się zainstalować AuthMe, sam plugin poprawnie obsługuje rejestrację, ale jedna z jego funkcji - protectInventory - nie działa. W rezultacie ekwipunek postaci przed zalogowaniem nie jest chroniony. Jeśli uśmiercimy taką postać, to straci ona swój dobytek (co nie powinno mieć miejsca).

Szukając wyrażen zawierających `WARN` natrafiamy na:

    [17:23:17] [Server thread/INFO]: [AuthMe] Enabling AuthMe v5.6.0-SNAPSHOT-b2325
    [17:23:18] [Server thread/INFO]: [AuthMe] SQLite Setup finished
    [17:23:18] [Server thread/INFO]: [AuthMe] No supported rmissions system found! Permissions are disabled!
    [17:23:19] [Server thread/INFO]: [AuthMe] [LICENSE] This product includes GeoLite2 data created by MaxMind, available at https://www.maxmind.com
    [17:23:19] [Server thread/INFO]: [AuthMe] Essentials spawn file not found: '/home/servers/683508/plugins/Essentials/spawn.yml'
    [17:23:19] [Server thread/WARN]: [AuthMe] WARNING! The protectInventory feature requires ProtocolLib! Disabling it...

Jak widzimy w ostatniej linijce, tej oznaczonej tagiem `WARN`, protectInventory do działania wymaga pluginu ProtocolLib. Wystarczy go zainstalować, a ekwipunek niezalogowanych postaci będzie bezpieczny!

<h5>Przykład 3. WARN - AuthMe i nieuruchomiający się serwer</h5>

Wgraliśmy na nasz serwer AuthMeReloaded, lecz ten nie chce się uruchomić. Szukając `WARN` znajdujemy:

    [10:52:08] [Server thread/INFO]: [AuthMe] Enabling AuthMe v5.6.0-beta1-b2226
    [10:52:09] [Server thread/INFO]: [AuthMe] SQLite Setup finished
    [10:52:09] [Server thread/INFO]: [AuthMe] Hooked into LuckPerms!
    [10:52:09] [Server thread/INFO]: [AuthMe] Hooked successfully into Essentials  
    [10:52:09] [Server thread/WARN]: [AuthMe] Aborting initialization of AuthMe: [InjectorReflectionException]: Could not invoke constructor of class 'class fr.xephi.authme.command.CommandHandler'
    [10:52:09] [Server thread/WARN]: [AuthMe] THE SERVER IS GOING TO SHUT DOWN AS DEFINED IN THE CONFIGURATION!

Przedostatnia z grubsza wyjaśniają nam w czym problem. AuthMe nie mógł wywołać konstruktora (metody inicjującej) obiektu obsługującego komendy, przez co dalsze ładowanie pluginu było niemożliwe (a raczej bezcelowe).

Ostatnia linijka mówi nam, natomiast, że by zabezpieczyć nasz serwer przed grieferami, AuthMe nie mogąc obsługiwać rejestracji i logowania po prostu go wyłączyło.

Jako, że całe zajście jest rezultatem błędu programisty, w tym wypadku wystarczy zainstalować nowszą wersję AuthMeReloaded.

<h5>Przykład 4. ERROR - Nieskonfigurowany plugin</h5>

Wgraliśmy na nasz serwer plugin LogBlock żeby jeszcze lepiej zabezpieczyć nasz kwadratowy świat przed złośliwymi graczami. Niestety, plugin nie ładuje się i komenda `/plugins` wyświetla go na czerwono.

Szukając `ERROR` natriafiamy na:

    [22:50:03] [Server thread/INFO]: [LogBlock] Enabling LogBlock v1.14.1-SNAPSHOT (build #65)
    [22:50:03] [Server thread/INFO]: [LogBlock] Connecting to username@jdbc:mysql://localhost:3306/minecraft...
    [22:50:03] [Server thread/INFO]: LogBlock-Connection-Pool - Starting...
    [22:50:04] [Server thread/ERROR]: LogBlock-Connection-Pool - Exception during pool initialization.
    com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure

Linijka oznaczona tagiem `ERROR` (ostatnia) informuje nasz, że nastąpił wyjątek podczas inicjalizacji puli połączeń, a czytając kilka linijek wyżej dowiadujemy się, że podać danych do bazy MySQL, przez co LogBlock próbował połączyć się z nią korzystając z przykładowych danych `username@jdbc:mysql://localhost:3306/minecraft`.

<h5>Przykład 5. ERROR - Błędy mapy</h5>

Przez jakiś czas graliśmy na wersji 1.14.4, ale ponieważ były duże lagi, zmieniliśmy wersję na 1.12.2, ale teraz serwer nie chce się uruchomić. W logach znajdujemy:

    [17:31:36] [Server thread/INFO] [net.minecraft.server.MinecraftServer]: Preparing start region for level 0
    [17:31:36] [Server thread/WARN] [net.minecraft.world.chunk.Chunk]: Could not set level chunk heightmap, array length is 0 instead of 256
    [17:31:36] [Server thread/ERROR] [net.minecraft.server.MinecraftServer]: Encountered an unexpected exception
    java.lang.IllegalArgumentException: ChunkNibbleArrays should be 2048 bytes not: 0
    	at net.minecraft.world.chunk.NibbleArray.<init>(SourceFile:16) ~[axs.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.func_75823_a(AnvilChunkLoader.java:450) ~[aye.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.checkedReadChunkFromNBT__Async(AnvilChunkLoader.java:129) ~[aye.class:?]
    	at net.minecraft.world.chunk.storage.AnvilChunkLoader.loadChunk__Async(AnvilChunkLoader.java:93) ~[aye.class:?]
    	at net.minecraftforge.common.chunkio.ChunkIOProvider.run(ChunkIOProvider.java:70) ~[ChunkIOProvider.class:?]
    	at net.minecraftforge.common.chunkio.ChunkIOExecutor.syncChunkLoad(ChunkIOExecutor.java:92) ~[ChunkIOExecutor.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.loadChunk(ChunkProviderServer.java:118) ~[on.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.func_186028_c(ChunkProviderServer.java:89) ~[on.class:?]
    	at net.minecraft.world.gen.ChunkProviderServer.func_186025_d(ChunkProviderServer.java:135) ~[on.class:?]
    	at net.minecraft.server.MinecraftServer.func_71222_d(MinecraftServer.java:344) ~[MinecraftServer.class:?]
    	at net.minecraft.server.MinecraftServer.func_71247_a(MinecraftServer.java:314) ~[MinecraftServer.class:?]
    	at net.minecraft.server.dedicated.DedicatedServer.func_71197_b(DedicatedServer.java:270) ~[nz.class:?]
    	at net.minecraft.server.MinecraftServer.run(MinecraftServer.java:486) [MinecraftServer.class:?]
    	at java.lang.Thread.run(Thread.java:748) [?:1.8.0_201]

Tym razem wpis zawiera fragment stacktrace'u Javy. Widzimy, że powtarzają się w nim wyrażenia takie jak `world.chunk`, `AnvilChunkLoader`, `ChunkProviderServer` etc., co pozwala nam sądzić, że nasza mapa jest popsuta.

W naszym przypadku jednak, zapomnieliśmy usunąć mapę z wersji 1.14.4. Zawiera ona bloki nie istniejące w 1.12.2, przez co serwer traktuje ją jako popsutą. Wystarczy usunąć stary świat, a serwer uruchomi się bez problemów.

<h5>Przykład 6. ERROR - Niespełnione zależności</h5>

Wgraliśmy plugin na serwer, ale ten nie chce się załadować. W logach znajdujemy:

    [19:23:19] [Server thread/ERROR]: Could not load 'plugins/Modifyworld.jar' in folder 'plugins'
    org.bukkit.plugin.UnknownDependencyException: PermissionsEx

`UnknownDependencyException` oznacza, że nasz Modifyworld do poprawnego działania wymaga PermissionsEx. Po zainstalowaniu, plugin ładuje się bez błędów.

<h3>Zakończenie</h3>

Jak zobaczyliśmy w przykładach, diagnostyka problemów z pomocą logów nie jest trudna. Wystarczy znać podstawy angielskiego, a jeśli mamy jakiś problem, jest niemal pewne, że ktoś już go wcześniej miał oraz, że **kopiując linijkę błędu do Google**, znajdziemy rozwiązanie. A w razie trudności, zapraszamy z plikiem **lastest.log** na Discord **Craftserve**.
