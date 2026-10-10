@echo off
cd /d "%~dp0"
echo.
echo Nidhin portfolio is running at http://127.0.0.1:4173
echo Press Ctrl+C in this window to stop it.
echo.
start "" http://127.0.0.1:4173
python -m http.server 4173 --bind 127.0.0.1
