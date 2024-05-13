import {  Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartEntity } from './cart.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  user_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['Admin', 'User'],
    default: 'User',
  })
  role: string;

  @OneToOne(() => CartEntity, (cart) => cart.user_id)
  
  cart: CartEntity[] | number[];
}