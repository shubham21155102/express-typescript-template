import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { DatabaseService } from '../config/database';

export interface CreateUserDto {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone?: string;
  age?: number;
  city?: string;
}

export interface UpdateUserDto {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  age?: number;
  city?: string;
  isActive?: boolean;
}

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    const database = DatabaseService.getInstance();
    this.userRepository = database.dataSource.getRepository(User);
  }

  /**
   * Create a new user
   */
  public async createUser(userData: CreateUserDto): Promise<User> {
    try {
      const user = this.userRepository.create(userData);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new Error(`Failed to create user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get all users
   */
  public async getAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find({
        where: { isActive: true },
        order: { createdAt: 'DESC' }
      });
    } catch (error) {
      throw new Error(`Failed to fetch users: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get user by ID
   */
  public async getUserById(id: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({
        where: { id, isActive: true }
      });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get user by email
   */
  public async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({
        where: { email, isActive: true }
      });
    } catch (error) {
      throw new Error(`Failed to fetch user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Update user
   */
  public async updateUser(id: string, userData: UpdateUserDto): Promise<User | null> {
    try {
      const user = await this.getUserById(id);
      if (!user) {
        return null;
      }

      Object.assign(user, userData);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new Error(`Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Soft delete user (set isActive to false)
   */
  public async deleteUser(id: string): Promise<boolean> {
    try {
      const result = await this.userRepository.update(id, { isActive: false });
      return result.affected ? result.affected > 0 : false;
    } catch (error) {
      throw new Error(`Failed to delete user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get user count
   */
  public async getUserCount(): Promise<number> {
    try {
      return await this.userRepository.count({
        where: { isActive: true }
      });
    } catch (error) {
      throw new Error(`Failed to count users: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Check if email exists
   */
  public async emailExists(email: string): Promise<boolean> {
    try {
      const user = await this.userRepository.findOne({
        where: { email, isActive: true }
      });
      return !!user;
    } catch (error) {
      throw new Error(`Failed to check email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
