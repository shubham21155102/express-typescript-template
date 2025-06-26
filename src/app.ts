import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { Routes } from './routes';

export class App {
  public app: Application;
  private routes: Routes;

  constructor() {
    this.app = express();
    this.routes = new Routes();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  /**
   * Initialize Express middlewares
   */
  private initializeMiddlewares(): void {
    // Security middleware
    this.app.use(helmet());
    
    // CORS middleware
    this.app.use(cors());
    
    // Logging middleware
    this.app.use(morgan('combined'));
    
    // Body parsing middleware
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  /**
   * Initialize application routes
   */
  private initializeRoutes(): void {
    // Mount all routes
    this.app.use('/', this.routes.router);
    
    // Default route
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Express TypeScript Template API',
        version: '1.0.0',
        endpoints: {
          health: '/api/health'
        }
      });
    });
  }

  /**
   * Initialize error handling middleware
   */
  private initializeErrorHandling(): void {
    // 404 handler
    this.app.use('*', (req: Request, res: Response) => {
      res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.originalUrl
      });
    });

    // Global error handler
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error('Global error handler:', error);
      
      res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { error: error.message })
      });
    });
  }

  /**
   * Start the Express server
   */
  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`📊 Health check available at: http://localhost:${port}/api/health`);
    });
  }
}
