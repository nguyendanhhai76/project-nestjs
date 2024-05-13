import { JoinTable, ManyToMany } from 'typeorm';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { UserEntity } from './user.entity';
import { ProductEntity } from './product.entity';
  
  @Entity({ name: 'cart' })
  export class CartEntity {
    @PrimaryGeneratedColumn({
      type: 'int',
    })
    cart_id: number;
    
    @Column({
      type: 'tinyint',
      default: 0,
    })
    quantity: number;
    
  
    /** xác định mối quan hệ */
    @OneToOne(() => UserEntity, (user) => user.cart)
    @JoinColumn({
      name: 'user_id',
    })
    user_id: UserEntity | number;

    @ManyToMany (() => ProductEntity, ( product ) => product)
   @JoinTable({name: 'cart_product'})
    product: ProductEntity[]
   
}