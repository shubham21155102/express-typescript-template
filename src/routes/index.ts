import { Router } from 'express';
import { HealthRoutes } from './health.routes';

export class Routes {
  public router: Router;
  private healthRoutes: HealthRoutes;

  constructor() {
    this.router = Router();
    this.healthRoutes = new HealthRoutes();
    this.initializeRoutes();
  }

  /**
   * Initialize all application routes
   */
  private initializeRoutes(): void {
    // Mount health routes at /api
    this.router.use('/api', this.healthRoutes.router);
  }
}
