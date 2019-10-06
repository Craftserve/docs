## Serwer w trybie offline
Jeśli na Twoim serwerze nie wyświetlają się skiny graczy premium lub nie dostają oni uprawnien OPa mimo wpisania na listę, to najprawdopodobniej jest on uruchomiony w trybie offline. Oznacza to, że Twój serwer nie łączy się z serwerami Mojangu w celu uwierzytelniania graczy. Dodatkowo warto wspomnieć o tym, że przy tej opcji łatwo można się pod kogoś podszyć, dlatego zalecamy również pobranie pluginu [AuthMe](https://www.spigotmc.org/resources/authmereloaded.6269/) który obsłuży system logowania.

## Skiny w trybie offline
Jeśli chcesz by serwer pozostał non-premium, [ten plugin](https://www.spigotmc.org/resources/skinsrestorer.2124/) pozwoli graczom mieć swoje skiny. Komendy oraz listę uprawnień znajdziecie [tutaj](https://github.com/SkinsRestorer/SkinsRestorerX/wiki/cmds-&-perms).
#### Instalacja na Bukkit/Spigot/Paperspigot
1. Wgraj plik **SkinsRestorer.jar** do folderu `plugins`.
2. Zrestartuj serwer w panelu, bądź komendami `/restart` lub `/stop`. Używanie komendy `/reload` **nie jest zalecane** ponieważ może spowodować różne błędy lub niektóre pluginy mogą się źle załadować.
3. I gotowe! Jeśli plugin jest widoczny pod komendą `/plugins` na serwerze, oznacza to że został poprawnie załadowany.
#### Instalacja na BungeeCord/Waterfall
1. Wgraj plik **SkinsRestorer.jar** do folderu `plugins` **w każdym serwerze ze spigotem**.
2. Wgraj plik **SkinsRestorer.jar** do folderu `plugins` w każdym serwerze proxy, czyli w tym przypadku do BungeeCorda.
3. Pamiętaj żeby opcja `bungeecord:` po stronie serwera ze spigotem była zaznaczona na `true`.
4. Zrestartuj oba serwery (spigot oraz bungeecord).
5. Gotowe! Teraz serwer plugin powinien być zintegrowany prawidłowo.
### Instalacja Sponge
1. Wgraj plugin do folderu `mods`.
2. Zrestartuj serwer i gotowe!

Serwer online
---
Jeśli jednak masz [zakupioną wersję Minecrafta](https://minecraft.net), to zalecamy zmienić opcję `online-mode: false` na `online-mode: true`. Dzięki temu nie jest potrzebny żaden plugin na skiny, biała lista oraz ta dla operatorów zawsze działa jak powinna oraz nie potrzeba żadnego pluginu na autoryzację za pomocą hasła (np. AuthMe).



