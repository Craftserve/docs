# Polecenia CraftserveAgent

CraftserveAgent to wbudowany plugin Craftserve, działający na każdym serwerze z silnikiem, który obsługuje pluginy (jak Spigot, Paper, czy Purpur). Upraszcza on znacznie zarządzanie serwerem, a także wprowadza dodatkowe zabezpieczenia, jak logowanie i weryfikacja na serwerach offline-mode (tzw. "non-premium").

Poszczególne funkcje Agenta aplikowane są w formie modułów, które możesz włączać i wyłączać w panelu (w zakładce Ustawienia Minecraft -> Ustawienia CraftserveAgent).


# Moduły:

## Przywracanie skinów

Umozliwia przywracanie skinów na serwerach offline-mode, co nie jest domyślnym zachowaniem. Prosty zamiennik popularnego pluginu SkinRestorer.

**Użycie:**

`/skin` - przywraca skina gracza.

## Autoryzacja (logowanie)

Wymusza rejestrację i logowanie podczas dołączania na serwer, zabezpieczając nieautoryzowany dostęp do kont z wyższymi uprawnieniami na serwerach offline-mode. Prostsza alternatywa dla popularnego AuthMe.

**Użycie:**

`/register <hasło>` - rejestruje konto na aktualngo gracza ze wskazanym hasłem.
`/login <hasło>` - loguje na konto aktualnego gracza z użyciem podanego hasła.

## Domy (homes)

Znana funkcja z wielu serwerów Minecraft w prostej implementacji. Pozwala na tworzenie swoich punktów domowych (tzw. "homes") i teleportację do nich w dowolnym momencie za pomocą komendy.

**Komendy:**
`/home` - teleportuje do ustawionego domu (home). Jeśli żaden dom nie jest ustawiony, powstanie nowy. Uprawnienie: `craftserve-agent.home`.
`/delhome` - usuwa aktualny dom (home). Uprawnienie: `craftserve-agent.home`.

## TPA

TPA umożliwia wysyłanie próśb o teleportację do innych graczy. Pozwala także na teleportowanie ich do siebie za pomocą próśb.

**Komendy:**
`/tpa <nick>` - wysyła prośbę o teleportację do wskazanego gracza. Uprawnienie: `craftserve-agent.tpa.to-others`.
`/tpahere <nick>` - wysyła prośbę o teleportację innego gracza do siebie. Uprawnienie: `craftserve-agent.tpa.to-me`.
`/tpaaccept` - akceptuje prośbę o teleportację.
`/tpadeny` odrzuca prośbę o teleportację.
`/tpacancel` - anuluje wysłaną prośbę o teleportację.

## Spawn

Pozwala na ustawienie spawnu na mapie i teleportację do niego w dowolnym momencie.

**Komendy:**
`/spawn` - teleportuje na spawn. Uprawnienie: `craftserve-agent.spawn`.
`/setspawn` - ustawia spawn. Uprawnienie: `craftserve-agent.spawn.set`.


## Warpy

Warpy to znany od zawsze system pozwalający na ustalenie punktów zainteresowania na mapie (warpów) i teleportację do nich w dowolnym momencie za pomocą komendy.


**Komendy:**
`/warp <nazwa>` teleportuje na warp. Uprawnienie: ` craftserve-agent.warp`.
`/setwarp <nazwa>` - ustawia warp. Uprawnienie: `craftserve-agent.warp.set`.
`/delwarp <nazwa>` - usuwa warp. Uprawnienie: `craftserve-agent.warp.set`.

## Inne

Pozostałe przydatne komendy pluginu CraftserveAgent.

**Komendy:**
`/back` - teleportuje z powrotem do poprzedniej lokacji. Uprawnienie: `craftserve-agent.back`.
`/slots <liczba>` - zmienia liczbę slotów na serwerze. Uprawnienie: `craftserve-agent.slots`.