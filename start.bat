@echo off
echo.
echo 🌿 Planto E-Commerce - Quick Start
echo ==================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version
echo ✅ npm is installed
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
    echo.
    
    REM Ask user what to do
    echo What would you like to do?
    echo 1) Start development server
    echo 2) Build for production
    echo 3) Exit
    set /p choice="Enter your choice (1-3): "
    
    if "%choice%"=="1" (
        echo.
        echo 🚀 Starting development server...
        echo Your site will open at http://localhost:5173
        call npm run dev
    ) else if "%choice%"=="2" (
        echo.
        echo 🏗️ Building for production...
        call npm run build
        if %errorlevel% equ 0 (
            echo ✅ Build successful! Check the 'dist' folder
        ) else (
            echo ❌ Build failed!
        )
        pause
    ) else if "%choice%"=="3" (
        echo 👋 Goodbye!
        exit /b 0
    ) else (
        echo Invalid choice!
        pause
    )
) else (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)
