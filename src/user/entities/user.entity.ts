import {
    BeforeInsert,
    BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../constants/user.enum';
import { hash } from 'bcrypt';
@Entity({ name: 'user' })
export class User {
  constructor() {}
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({unique: true})
  email: string;
  @Column()
  password: string;
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  roles: UserRole[];
  @CreateDateColumn()
  createdAt: Timestamp;
  @UpdateDateColumn()
  updatedAt: Timestamp;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPasswordBeforeSave() {
    if (this.password) {
      this.password = await hash(this.password, 10);
    }
  }
}
