import { Entity, PrimaryGeneratedColumn, Column,  JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { CartEntity } from "./cart.entity"

@Entity({ name: 'products' })
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column()
    price: number

    @Column()
    description: string

    @Column()
    image: string

    @Column()   
    quantity: string

    @ManyToMany(() => CartEntity, (cart) => cart.product)
    cart: CartEntity

}