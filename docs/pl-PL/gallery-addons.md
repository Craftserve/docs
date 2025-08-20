# 📦 Jak stworzyć paczkę na Craftserve Dodatki?

> Uwaga: Tworzenie projektów i wersji wymaga zakupionej usługi. Zakup
> usługę już na teraz na
> [craftserve.com](https://craftserve.com/#offers)

Oto propozycja przejrzystego i estetycznego **spisu treści** w stylu dokumentacji technicznej, który możesz dodać na początek dokumentu (np. zaraz pod tytułem):

## 📚 Spis treści

1. [🔧 Tworzenie nowego projektu](#tworzenie-projektu)

    - 1.1 [📋 Pola formularza, ikony i multimedia](#form_fields)
    - 1.2 [🌐 Widoczność i kategoria](#visibility)
    - 1.3 [📝 Opis i tłumaczenia](#translations)

2. [📦 Tworzenie wersji](#tworzenie-wersji)

    - 2.1 [📁 Dodawanie plików i wybór serwera](#files)
    - 2.2 [🔢 Wersjonowanie i semver](#semver)
    - 2.3 [📎 Wybór zależności](#depends_on)
    - 2.4 [⚙️ Operatory wersji: `^`, `~`, `=`](#selectors)

3. [🧪 Opcje zaawansowane](#advanced)
    - 3.1 [🧩 Niestandardowe zależności i tagi](#advanced)
    - 3.2 [🏷️ Etykiety i manifest paczki](#advanced)

## Tworzenie projektu 🔨

#### Aby Twój projekt był możliwy do pobrania, oraz aby użytkownicy mogli go zobaczyć w galerii dodatków należy najpierw utworzyć nowy projekt.

Wejdź do panelu zarządzania serwerem, następnie w Galerie Dodatków, oraz kliknij odnośnik **“Utwórz projekt”**

![Tworzenie projektu](./img/marketplace_form/marketplace_create_project_button.png)

<a  id="form_fields"></a>

2. W kreatorze projektu wypełnij poszczególne pola

-   **Nazwa projektu** – Wyświetla się w marketplace, oraz dzięki temu polu użytkownicy będą mogli wyszukiwać Twój projekt po nazwie.

-   **Skrót** - te pole wypełnia się automatycznie względem nazwy którą wypełnisz, odpowiada ono za identyfikacje projektu w linku.

-   **Krótki opis** – Pojawia się po kliknięciu w projekt nad przyciskiem "Zagraj teraz" lub "Zainstaluj najnowszą wersję" (w zależności od typu projektu). Wyświetla się również w kafelku w liście zainstalowanych paczek w widoku ustawień serwera.

-   **Ikona projektu** - przyciąga uwagę i jest niejako wizytówką Twojej paczki! Pojawia się w kafelku w liście zainstalowanych paczek w widoku ustawień.

<a  id="visibility"></a> 3. **Widoczność projektu**

-   **Publiczny** : Dostępny dla każdego, wyświetla się w liście paczek

w galerii dodatków

-   **Niepubliczny** : Nie wyświetla się w liście paczek w galerii dodatków, ale jest możliwy

do udostępnienia przez link.

-   **Prywatny** : Dostępny tylko dla Ciebie.

> Aby znaleźć projekt niepubliczny, lub prywatny skorzystaj z przycisku "Moje projekty" w [ galerii dodatków](https://craftserve.com/m). Przycisk jest dostępny po zalogowaniu na konto.

3.  **Kategoria projektu** – powinna jak najbliżej precyzować czym jest Twoja paczka. Służy do wyszukiwania paczek w galerii dodatków przez użytkowników.

-   **Gra** - Określa do jakiej gry jest przeznaczona Twoja paczka.

-   **Wideo** (opcjonalne) - Odtwarza się po najechaniu na kafelek projektu, oraz po kliknięciu w projekt. Powinno być w formacie WebM, być w maksymalnej rozdzielczości 720p, maks. 30fps, oraz rozmiar pliku nie powinien przekraczać 50 MiB.

-   **Miniatura** - Wyświetla się na kafelku projektu w galerii dodatków, oraz w widoku wybranego projektu, gdy nie zostało dodane wideo.

-   **Galeria** - Wyświetla się na podstronie Twojego projektu. Możesz skorzystać z galerii jeśli chcesz zamieścić w swoim projekcie np. zrzuty ekranu z swojego dodatku.

<a id="translations"></a>

-   **Szczegółowy opis projektu**

    -   **Tłumaczenia**  
        W Craftserve oferujemy dwa sposoby tłumaczenia opisów paczek na inne języki:

        1.  **Ręczne tłumaczenie** – wybierz preferowany język, klikając odpowiedni przycisk, a następnie edytuj treść w tym języku. Możesz przełączać się między językami i dodawać tłumaczenia ręcznie.
        2.  **Automatyczne tłumaczenie przez AI** – wystarczy, że przygotujesz opis w domyślnym języku projektu. Po 30 minutach od publikacji, tłumaczenia zostaną automatycznie wygenerowane i będą aktualizowane za każdym razem, gdy zaktualizujesz projekt. Aby zmienić język źródłowy dla tłumaczeń, skorzystaj z opcji **"Domyślny język projektu"**, dostępnej pod polami do wprowadzania tłumaczeń.

        > **Uwaga:** Automatyczne tłumaczenia zostaną wygenerowane tylko dla tych języków, dla których pole tłumaczenia jest puste. Jeśli w danym języku został wprowadzony jakikolwiek znak (np. w angielskim, polskim czy niemieckim), tłumaczenie nie zostanie nadpisane.

    -   **Konstruowanie opisu**  
        W opisie uwzględnij:

        -   wymagania Twojej paczki,
        -   funkcje i możliwości, jakie oferuje.

        Jeśli tworzysz paczkę modów, dodaj również instrukcję instalacji modyfikacji po stronie użytkownika — tak, aby po instalacji paczki na serwerze użytkownicy mogli łatwo do niego dołączyć.  
        Staraj się pisać w sposób przystępny, tak aby także osoby nietechniczne mogły bez problemu przeprowadzić instalację.

4.  Gdy uzupełnisz swój projekt, kliknij przycisk “Opublikuj”, aby zatwierdzić zmiany.

### Gotowe! 🚀

Aby zobaczyć swój projekt, przejdź do zakładki **„Dodatki”**, a następnie wybierz **„Moje projekty”**.  
Pamiętaj, że jeśli Twój projekt nie jest publiczny lub nie ma dodanej wersji do zainstalowania, **nie pojawi się w głównym widoku galerii dodatków**. W takim przypadku skorzystaj z zakładki **„Moje projekty”**, gdzie zawsze znajdziesz wszystkie swoje publikacje.

&nbsp;

# Tworzenie wersji 📦

#### Masz już swój projekt, ale brakuje w nim wersji, czyli brakuje dodanych plików do projektu, które zostaną pobrane w momencie gdy użytkownik będzie chciał ją zainstalować na swoim serwerze. Aby dodać wersję wejdź w swój projekt, następnie kliknij “Lista wersji”

1. Kliknij **“Lista wersji”**
2. Kliknij **"Dodaj wersję"**
3. Uzupełnij **typ wersji** - te pole oznacza w jakiej fazie rozwoju jest dane wydanie wersji. - **Stable** oznacza wersję stabilną, która przeszła pełne testy. Jest ona skierowana do użytkowników którzy oczekują w pełni działającego dodatku. - **Private** oznacza, że wersja jest prywatna, skierowana dla danej grupy odbiorców np. Programistów, lub Twoich testerów. Nie musi być stabilna, może wymagać np. Dodatkowych testów. - **Latest** to najnowsza wersja, może być stabilna lub nie. Kierowana dla użytkowników, którzy chcą najnowszych funkcji.

4. Wybierz **Sposób instalacji**. Rozróżniamy dwa sposoby instalacji:

    - **Wymaż dane serwera i zainstaluj paczkę** - Przed zainstalowaniem Twojego dodatku domyślnie będziemy rekomendować użytkownikowi wymazanie danych swojego serwera, a następnie na czystej instancji zainstalować Twój dodatek.
    - **Dodaj do istniejącego serwera** - Dodamy pliki z Twojej paczki do aktualnego stanu serwera użytkownika.

5. **Wersja pakietu** <a  id="semver"></a>
   To pole powinno zawierać numer wersji Twojego projektu w formacie **SemVer** (ang. _Semantic Versioning_), np. `1.2.3`. System instalacji korzysta z tego pola, aby automatycznie rozwiązywać konflikty podczas instalacji projektów.  
   Format składa się z trzech liczb oddzielonych kropkami:

    **MAJOR.MINOR.PATCH**, czyli:

    - `1` – **MAJOR**: zmienia się, gdy wprowadzasz niekompatybilne zmiany (np. usuwasz lub zmieniasz działanie istniejących funkcji),

    - `2` – **MINOR**: zmienia się, gdy dodajesz nowe, kompatybilne funkcje,

    - `3` – **PATCH**: zmienia się, gdy naprawiasz błędy bez wprowadzania nowych funkcji ani zmian w działaniu.

    **Przykłady poprawnych wersji**:

    - `1.0.0` – pierwsze wydanie,
    - `1.2.0` – dodano nowe funkcje,
    - `1.2.1` – poprawiono drobne błędy,
    - `2.0.0` – wprowadzono zmiany łamiące kompatybilność z wcześniejszą wersją.

> **Uwaga:** Użycie poprawnego formatu wersji pomaga użytkownikom rozpoznać, jak istotna była zmiana w paczce i ułatwia zarządzanie aktualizacjami. Aby dowiedzieć się więcej na temat semantycznego wersjonowania skorzystaj z [dokumentacji semver](https://semver.org/lang/pl/)

6.  **Wersja zawartości** - Ta wartość będzie wyświetlać się użytkownikowi jako wersja zainstalowanego dodatku. Możesz wpisać tu taką samą wartość jak w polu **Wersja pakietu**, lub zastosować swoje **niestandardowe wersjonowanie** (np. `beta`, `dev-2025-06-11`, `v2-poprawki`, itp.). Pole to **nie podlega walidacji** – możesz wpisać dowolną wartość, która najlepiej opisuje wersję zawartości projektu z Twojej perspektywy.

> **Uwaga:** Pole to jest opcjonalne i służy jedynie do dodatkowego oznaczania zmian treści – nie wpływa na techniczne działanie paczki.

<a  id="files"></a> 7. **Serwer** Wybierz serwer, z którego chcesz udostępnić pliki do swojej paczki. Pliki te zostaną zainstalowane na serwerze użytkownika, który zainstaluje Twoją paczkę. - W zależności od rodzaju paczki: - Jeśli tworzysz **paczkę modyfikacji**, wybierz pliki, które mają zostać zainstalowane na serwerze użytkownika (np. mody, pluginy). - Jeśli chcesz udostępnić **świat z gry**, wybierz odpowiedni folder ze światem.

> **Uwaga:** Zwróć szczególną uwagę na strukturę katalogów przy zaznaczaniu plików.  
> Przykład: jeśli zaznaczysz tylko pliki `.jar` z folderu `plugins`, zostaną one zainstalowane w katalogu głównym serwera.  
> Aby poprawnie zainstalować je w folderze `plugins`, zaznacz również sam folder `plugins` wraz z jego zawartością. Twoja ścieżka plików docelowych na serwerze musi pokrywać się z poprawną ścieżką plików.

---

### 8. **Wybierz paczki**

<a  id="depends_on"></a>
Wybierz inne paczki, które mają zostać automatycznie zainstalowane **przed** Twoją paczką. System automatycznie wykryje, jakie paczki masz zainstalowane na serwerze, z którego przesyłasz pliki.

Zaznacz wymagane zależności, jeśli Twoja paczka ich potrzebuje. Domyślnie pokażemy zależności używane przez inne Twoje dodatki – możesz je wybrać klikając nazwę paczki, co rozwinie listę opcji.

#### Przykłady:

-   `Wymagaj paper^1.21`
    – wymaga, by na serwerze był zainstalowany **Paper** w wersji **`>= 1.21.0` i `< 2.0.0`**
-   `Wymagaj game-engine`
    – wymaga **jakiegokolwiek silnika gry**, niezależnie od wersji czy platformy
-   `Wymagaj minecraft-java-server`
    – wymaga **dowolnego silnika serwera Minecraft Java**, niezależnie od wersji
-   `Wymagaj paper-api=1.20.1`
    – wymaga obecności **jakiejkolwiek paczki**, która udostępnia `paper-api` w dokładnie wersji `1.20.1`
-   `Wymagaj paper=1.21.5`
    – wymaga, by paczka `paper` była obecna **w dokładnie wersji `1.21.5`**
-   `Nie wymagaj`
    – Twoja paczka nie ma żadnych zależności i może działać samodzielnie

#### Automatyczne instalowanie zależności:

Niektóre paczki jak np. Paper mogą wymagać Javy, która zostanie zainstalowana na serwerze użytkownika.

-   **Automatyczna instalacja Javy:**  
    Jeśli zaznaczysz Paper, system automatycznie zainstaluje odpowiednią wersję Javy wymaganą przez Paper.

-   **Wersje Javy:**  
    Paper może wymagać Javy w zakresie np. **11–17**. Domyślnie instalowana jest **najnowsza dostępna wersja w tym zakresie** (np. Java 17). Zainstalowana może zostać inna kompatybilna wersja jeśli na serwerze użytkownika jest już jakaś paczka wymagająca javy w zakresie np. **11–14**. Wtedy zainstalowana zostanie **Java 14**.

-   **Dodanie niestandardowej wersji Javy:**  
    Jeśli chcesz użyć innej wersji Javy (nadpisać ją), możesz to zrobić, dodając **zaawansowany selector**, np.:
    ```bash
    java~11
    ```

---

### 🔎 Czym się różni `^`, `=`, i `~`?

<a  id="selectors"></a>
Przypominjmy sobie na starcie jak działa semantyczne wersjonowanie:

**MAJOR.MINOR.PATCH**, czyli:

-   `1` – **MAJOR**: zmienia się, gdy wprowadzasz niekompatybilne zmiany (np. usuwasz lub zmieniasz działanie istniejących funkcji),
-   `2` – **MINOR**: zmienia się, gdy dodajesz nowe, kompatybilne funkcje,
-   `3` – **PATCH**: zmienia się, gdy naprawiasz błędy bez wprowadzania nowych funkcji ani zmian w działaniu.

    **Przykłady poprawnych wersji**:

-   `1.0.0` – pierwsze wydanie,
-   `1.2.0` – dodano nowe funkcje,
-   `1.2.1` – poprawiono drobne błędy,
-   `2.0.0` – wprowadzono zmiany łamiące kompatybilność z wcześniejszą wersją.

Znając tę teorię możemy tworzyć następujące wymagania względem wersji paczek:

| Operator           | Znaczenie                                                        | Przykład        | Zakres wersji         |
| ------------------ | ---------------------------------------------------------------- | --------------- | --------------------- |
| `^` (caret)        | **Aktualizacje kompatybilne** w obrębie wersji głównej (`major`) | `^1.2.3`        | `>=1.2.3 <2.0.0`      |
| `~` (tilde)        | **Poprawki (`patch`)** w obrębie tej samej wersji `minor`        | `~1.2.3`        | `>=1.2.3 <1.3.0`      |
| `=` (równość)      | **Dokładna wersja**                                              | `=1.2.3`        | tylko `1.2.3`         |
| `*` (gwiazdka)     | **Dowolna wersja**                                               | `*`             | pasuje do wszystkiego |
| `-` (hyphen range) | **Zakres wersji od–do (włącznie)**                               | `1.2.3 - 1.4.0` | `>=1.2.3 <=1.4.0`     |

#### Przykład:

-   `^1.20.0` → pasuje do `1.20.1`, `1.21.0`, `1.99.99`, ale **nie** do `2.0.0`
-   `~1.20.0` → pasuje do `1.20.1`, `1.20.9`, ale **nie** do `1.21.0`
-   `=1.20.0` → pasuje tylko do `1.20.0`

Aby dowiedzieć się więcej na ten temat skorzystaj z
[dokumentacji 📋](https://github.com/Masterminds/semver?tab=readme-ov-file#caret-range-comparisons-major)

<a  id="advanced"></a> 9. **Opcje zaawansowane (opcjonalne)** - W tym punkcie będziemy tworzyć niestandardowe zależności do Twojego projektu. Po kliknięciu w **"Pokaż opcje zaawansowane"** pojawi się przycisk "Dodaj zależność". Po kliknięciu masz możliwość **dodania własnej zależności**. Formularz składa się z 3 pól.

-   Każde pole jest ze sobą związane. Zależność będzie konstruowana na podstawie `NAZWA+TAG`

-   **Nazwa** - Powinna określać nazwę zależności do której będziesz konfigurował niestandardowe wymagania np. `paper-api`, lub `paper`.

-   **tag** - Służy do ustalenia niestandardowego selectora. Jeśli wiesz, że Twój dodatek będzie wymagał paper (wartość z pola **nazwa**) w niestandardowym zakresie np. `paper^1.20.1` wtedy użyj `^1.20.1` dla wartości tego pola. Uzupełniając pola **nazwa** i **tag** otrzymujemy następujący rezultat: `paper^1.20.1`

-   **Etykiety (opcjonalne)** Każda paczka zawiera swój manifest. Możesz uwzględnić dodatkowo jakie etykiety muszą się w nim znajdować. Przykładowo chce, aby nie dość, że wymagana paczka do działania spełniała zależność `paper` w wersjach `^1.20.1` to posiadała w polu `labels` etykiete o kluczu `craftserve.com/mod-loader` i wartości `minecraft-java`.

-   <details>
      <summary>Kliknij tutaj, aby zobaczyć przykładowe etykiety paczek</summary>

      <br/>

    | Klucz                                         | Przykładowa wartość     | Opis                                                           |
    | --------------------------------------------- | ----------------------- | -------------------------------------------------------------- |
    | `"craftserve.com/game"`                       | `"minecraft-java"`      | Gra, dla której przeznaczony jest dodatek (tu: Minecraft Java) |
    | `"craftserve.com/type"`                       | `"plugin"`              | Typ paczki (np. `plugin`, `mod`, `map`)                        |
    | `"craftserve.com/package/time"`               | `"2025-04-11 15:25:15"` | Data i godzina utworzenia paczki                               |
    | `"craftserve.com/release/time"`               | `"2025-04-11 15:25:15"` | Data i godzina publikacji paczki                               |
    | `"craftserve.com/require-empty-workspace"`    | `"yes"`                 | Czy paczka wymaga czystej instancji serwera (`yes` / `no`)     |
    | `"craftserve.com/suggested-install-selector"` | `"forge=1.21.8-58.0.0"` | Sugerowany selector używany podczas tworzenia paczki           |

    </details>

<details>
<summary>Przykładowy manifest paczki</summary>

```json
{
    "manifestVersion": "v3",
    "ManifestHash": "sha256-5f5f4ce426d77a86581d7e5bd2109981eba1c64df0c226b39684a5f970a228e0",
    "subdir": "marketplace/paper/sha256-5f5f4ce426d77a86581d7e5bd2109981eba1c64df0c226b39684a5f970a228e0",
    "name": "paper",
    "packageVersion": "1.21.8-11",
    "contentVersion": "1.21.8-11",
    "dependencies": ["java>=17 <=21"],
    "provides": [
        "game-engine",
        "minecraft-java-server=1.21.8",
        "paper-api=1.21.8",
        "spigot-api=1.21.8",
        "bukkit-api=1.21.8",
        "paper=1.21.8"
    ],
    "suggestedDependencies": ["java~21"],
    "set-env": [
        {
            "key": "MINECRAFT_VERSION",
            "value": "1.21.8"
        }
    ],
    "labels": {
        "craftserve.com/game": "minecraft-java",
        "craftserve.com/minecraft-java/version": "1.21.8",
        "craftserve.com/mod-loader": "paper",
        "craftserve.com/package/time": "2025-07-23 00:17:40.965514",
        "craftserve.com/release/time": "2025-07-22 08:54:27.185000",
        "craftserve.com/require-empty-workspace": "yes",
        "craftserve.com/suggested-selector": "paper~1.21.8-11",
        "craftserve.com/type": "mod_loader",
        "craftserve.com/version-group": "1.21"
    },
    "fileshash": "k1:1488116ffdc37691af21a53e7d0eeb9cb1468c9aca3a41b0084705195ad41789",
    "downloadfiles": [
        {
            "name": "minecraft_server.jar",
            "url": "https://api.papermc.io/v2/projects/paper/versions/1.21.8/builds/11/downloads/paper-1.21.8-11.jar",
            "hash": "sha256-9457d1279efcc2094e818cacb2f17670d9479e5f6b4ea2517eb93a6a3face51f",
            "size": 0
        }
    ]
}
```

</details>

10. **Szczegółowy opis** : Tutaj możesz opisać dokładnie czego wymaga Twoja wersja, oraz opisać co zmieniło się np. Względem starszej wersji. Pamiętaj, aby dokładnie uzupełniać swoje opisy.

11. Gdy wszystkie pola zostały uzupełnione, kliknij przycisk “**Dodaj wersję**”.

### Wersja została utworzona i jest teraz dostępna do pobrania. **Gratulacje** 🚀
