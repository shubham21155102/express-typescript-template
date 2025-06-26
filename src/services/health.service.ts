import { HealthResponse } from '../types/health.types';
import { logger } from '../utils';

export class HealthService {
  /**
   * Get health status of the application
   * @returns {HealthResponse} Health status information
   */
  public getHealthStatus(): HealthResponse {
    logger.info('Health status requested');
    
    const healthData = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    };
    
    logger.debug('Health status data generated', healthData);
    return healthData;
  }

  /**
   * Check if the application is healthy
   * @returns {boolean} True if healthy, false otherwise
   */
  public isHealthy(): boolean {
    logger.debug('Health check performed');
    // Add your health checks here (database connection, external services, etc.)
    return true;
  }
}
