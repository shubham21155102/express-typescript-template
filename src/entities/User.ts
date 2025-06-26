import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  firstName!: string;
  
  @Column({ type: 'varchar', length: 100, nullable: true })
  middleName?: string;
  
  @Column({ type: 'varchar', length: 100, nullable: false })
  lastName!: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'int', nullable: true })
  age?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  city?: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // Method to get full name
  getFullName(): string {
    const parts = [this.firstName];
    if (this.middleName) {
      parts.push(this.middleName);
    }
    parts.push(this.lastName);
    return parts.join(' ');
  }

  // Method to sanitize user data (remove sensitive info)
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      age: this.age,
      city: this.city,
      isActive: this.isActive,
      fullName: this.getFullName(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}
