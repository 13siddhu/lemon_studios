#!/bin/bash

echo "🌿 Planto E-Commerce - Quick Start"
echo "=================================="
echo ""

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    
    # Ask user what to do
    echo "What would you like to do?"
    echo "1) Start development server"
    echo "2) Build for production"
    echo "3) Exit"
    read -p "Enter your choice (1-3): " choice
    
    case $choice in
        1)
            echo ""
            echo "🚀 Starting development server..."
            echo "Your site will open at http://localhost:5173"
            npm run dev
            ;;
        2)
            echo ""
            echo "🏗️ Building for production..."
            npm run build
            if [ $? -eq 0 ]; then
                echo "✅ Build successful! Check the 'dist' folder"
            else
                echo "❌ Build failed!"
            fi
            ;;
        3)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice!"
            ;;
    esac
else
    echo "❌ Failed to install dependencies!"
    exit 1
fi
