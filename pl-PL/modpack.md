# Instalacja modpacka

### Wymagania

* Serwer Minecraft wspierający modyfikacje Fabric / Forge (w przypadku Craftserve: pakiet Diamond)

### Instalacja

1. Usuń obecne pliki map z serwera. Można posłużyć się funkcją **Formatuj** -> **Wszystkie pliki**, znajdziesz ją w ustawieniach.
*Uwaga: Formatowanie serwera spowoduje utratę wszystkich plików, w tym wszystkich elementów zapisanych na mapie.*

    ![image](img/bettermc/format.png)
2. Wybierz zalecaną przez autora paczki wersję silnika Forge lub Fabric.
   - Silnik Forge możesz ustawić w zakładce **Ustawienia** -> **Silniki** -> **Minecraft Forge** panelu Craftserve.
   
     ![image](img/modpack/select_engine_forge.png)
   - Silniki Fabric znajdują się w zakładce **Ustawienia** -> **Silniki** -> **Cauldron** panelu Craftserve.
   
     ![image](img/bettermc/select_engine.png)
   - Należy pamiętać o zapisaniu silnika po jego wyborze. W tym celu udaj się na dół strony i kliknij przycisk **Zapisz**. 
   
     ![image](img/bettermc/save_engine.png)
3. Pobierz **serwerową** wersję przykładowo z [tej strony](https://www.curseforge.com/minecraft/modpacks).

    ![image](img/bettermc/download_serverpack.png)
4. Pobranego zipa wgraj na serwer przy użyciu [FTP](ftp.md).
5. Przejdź do panelu Craftserve i wybierz zakładkę **Pliki**.
6. Odszukaj wgrany plik zip oraz wybierz przy nim opcję **Rozpakuj**.

    ![image](img/bettermc/unzip.png)
    - Jako folder docelowy wybierz **/**.

      ![image](img/bettermc/operation_destination.png)
7. Po rozpakowaniu możesz usunąć plik zip.
8. W głównym folderze serwera powinien pojawić się rozpakowany folder z paczką, otwórz go.
9. Przenieś pliki znajdujące się w tym folderze do głównego folderu serwera. Głównie chodzi o foldery **mods**, **config**, **defaultconfigs** oraz plik **server.properties**.
    - Możesz skorzystać z funkcji **Przenieś** przy każdym z tych elementów, wybierając **/** jako folder docelowy.

      ![image](img/bettermc/move.png)
10. Usuń folder z rozpakowaną paczką, nie ma w nim już ważnych elementów.
11. Uruchom serwer i poczekaj na jego uruchomienie.

### Uwagi
- Wejście na serwer możliwe jest tylko jeśli gracz ma wgraną u siebie w grze tę samą wersję modpacka(ale przeznaczoną dla klienta). 
- W przypadku problemów z uruchomieniem serwera, sprawdź czy wersja silnika Fabric/Forge jest zgodna z wersją modpacka.
