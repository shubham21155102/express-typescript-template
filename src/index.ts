import { App } from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Create and start the application
async function startServer() {
  try {
    const app = new App();
    await app.listen(PORT);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
