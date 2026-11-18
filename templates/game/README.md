# Writing a game page

Every game Craftserve hosts can have one page per language. The panel reads a short summary from it and shows it to the server owner in a popup on the server's page, until they close it.

## Where the page goes

```
docs/<lang>/<game-id>/README.md   →   https://docs.craftserve.com/<lang>/<game-id>/
```

- `<lang>` is `pl-PL` or `en-US`. Write both: the panel shows `en-US` to everyone who does not use Polish.
- `<game-id>` is the game's id, not its name: `valheim`, `scpsl`, `7daystodie`. It is the `game:` label of the game's engine project on the marketplace, and the key in `https://craftserve.com/api/v1/servers/games?verification=any`. The panel builds the address from it, so a typo means the popup never shows.
- Renaming the game or its marketplace project does not move the page.

## What the page contains

Start from [`pl-PL.md`](pl-PL.md) or [`en-US.md`](en-US.md) and copy it to `docs/<lang>/<game-id>/README.md`.

The page has two parts:

1. **The summary block.** The panel shows it; the docs site hides it.
2. **The page itself**: everything a server owner may need to read in full.

## The summary block

```html
<div data-doc-summary style="display: none;">
- When joining, the game asks for the server **password**.
- The password is in `start_server.sh` (Files → main folder).
</div>
```

- Write it right after the title, exactly once per page.
- Write Markdown inside it, not HTML. The site leaves the block untouched and the panel renders it as Markdown. The panel removes HTML tags and keeps only their text.
- Keep it short: two to five bullet points, only what the player hits in the first minutes (a password, a port, a file to edit). Everything else belongs to the page.
- Use full links (`https://docs.craftserve.com/...`). A relative link does not work in the panel.
- Leave the block out if the game needs no onboarding. The panel then shows nothing.

## Adding the page to the menu

Add the page to `nav` in `mkdocs.yml`, under `Gry` in the Polish part and `Games` in the English one. The first game page creates these sections.

```yaml
- Gry:
    - Valheim: pl-PL/valheim/README.md
```

## Checking it

Run `mkdocs serve` and open `http://127.0.0.1:8000/<lang>/<game-id>/`. The summary is hidden there. To see what the panel will get, view the page source and find `data-doc-summary`.
