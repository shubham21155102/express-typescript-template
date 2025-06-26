# Express TypeScript Template

A modern Express.js TypeScript template with health check endpoint, organized with controllers, routes, and services in class-based architecture.

## Features

- ✅ Express.js with TypeScript
- ✅ Class-based architecture (Controllers, Routes, Services)
- ✅ Health check endpoint (`/api/health`)
- ✅ Error handling middleware
- ✅ Security middleware (Helmet, CORS)
- ✅ Logging (Morgan)
- ✅ ESLint configuration
- ✅ Development and production builds

## Project Structure

```
src/
├── controllers/          # Request handlers (class-based)
│   └── health.controller.ts
├── routes/              # Route definitions (class-based)
│   ├── health.routes.ts
│   └── index.ts
├── services/            # Business logic (class-based)
│   └── health.service.ts
├── types/               # TypeScript type definitions
│   └── health.types.ts
├── app.ts              # Express app configuration
└── index.ts            # Application entry point
```

## Installation

1. Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## API Endpoints

### Health Check

- **GET** `/api/health` - Returns application health status

Example response:

```json
{
  "success": true,
  "data": {
    "status": "OK",
    "timestamp": "2025-06-26T10:30:00.000Z",
    "uptime": 123.456,
    "environment": "development"
  }
}
```

## Development

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Architecture

This template follows a class-based architecture:

- **Controllers**: Handle HTTP requests and responses
- **Routes**: Define API endpoints and connect them to controllers
- **Services**: Contain business logic and data processing
- **Types**: TypeScript interfaces and type definitions
