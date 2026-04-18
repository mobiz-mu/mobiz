@echo off
title MoBiz.mu Clean Dev Reset
color 0A

echo.
echo ==========================================
echo   MoBiz.mu - Clean Cache and Restart
echo ==========================================
echo.

if exist .next (
  echo Deleting .next cache...
  rmdir /s /q .next
) else (
  echo .next folder not found, skipping...
)

echo.
echo Starting dev server...
echo.

npm run dev
pause