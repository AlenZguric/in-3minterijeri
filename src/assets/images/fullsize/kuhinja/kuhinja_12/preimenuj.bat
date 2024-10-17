@echo off
setlocal enabledelayedexpansion

REM Definiraj početni broj
set "counter=1"

REM Idi u folder gdje se nalaze .webp slike
cd /d "E:\PROJEKTI\in-3m\in-3minterijeri\src\assets\images\fullsize\kuhinja\kuhinja_12"

REM Petlja kroz sve .webp datoteke u folderu
for %%f in (*.webp) do (
    REM Preimenuj datoteku u broj.webp
    ren "%%f" "!counter!.webp"
    set /a counter+=1
)

echo Preimenovanje završeno!
pause
