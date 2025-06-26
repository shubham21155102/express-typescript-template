#!/bin/bash

# Express TypeScript Template Setup Script

echo "🚀 Setting up Express TypeScript Template..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Start development server
echo "🏃 Starting development server..."
echo "Server will be available at: http://localhost:3000"
echo "Health check endpoint: http://localhost:3000/api/health"
echo ""
echo "Press Ctrl+C to stop the server"

npm run dev

