import { App } from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Create and start the application
const app = new App();
app.listen(PORT);
