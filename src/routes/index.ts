import { Router } from 'express';
import { HealthRoutes } from './health.routes';
import { UserRoutes } from './user.routes';

export class Routes {
  public router: Router;
  private healthRoutes: HealthRoutes;
  private userRoutes: UserRoutes;

  constructor() {
    this.router = Router();
    this.healthRoutes = new HealthRoutes();
    this.userRoutes = new UserRoutes();
    this.initializeRoutes();
  }

  /**
   * Initialize all application routes
   */
  private initializeRoutes(): void {
    // Mount health routes at /api
    this.router.use('/api', this.healthRoutes.router);
    
    // Mount user routes at /api
    this.router.use('/api', this.userRoutes.router);
  }
}
