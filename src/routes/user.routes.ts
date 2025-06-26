import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  /**
   * Initialize user routes
   */
  private initializeRoutes(): void {
    // GET /api/users - Get all users
    this.router.get('/users', this.userController.getAllUsers);

    // GET /api/users/stats - Get user statistics
    this.router.get('/users/stats', this.userController.getUserStats);

    // GET /api/users/:id - Get user by ID
    this.router.get('/users/:id', this.userController.getUserById);

    // POST /api/users - Create new user
    this.router.post('/users', this.userController.createUser);

    // PUT /api/users/:id - Update user
    this.router.put('/users/:id', this.userController.updateUser);

    // DELETE /api/users/:id - Delete user (soft delete)
    this.router.delete('/users/:id', this.userController.deleteUser);
  }
}
