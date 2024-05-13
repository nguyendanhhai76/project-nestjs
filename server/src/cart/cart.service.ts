import { UserController } from './../user/user.controller';

import { Injectable } from '@nestjs/common';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from 'src/entities/cart.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CartService {
  constructor (@InjectRepository(CartEntity) 
  private readonly cartRepository: Repository<CartEntity>) {}
  async create(createCartDto: any) {
    const findUser = await this.cartRepository.findOne({
      where : {
        user_id : createCartDto.user_id
      },
      relations : {
        user_id : true
      }
    })
    console.log(findUser);
    
    if (findUser){
      return {
        message : 'User đã có giỏ hàng'
      }
    }
    const newCart = this.cartRepository.create(createCartDto);
    await this.cartRepository.save(newCart);
    return {
      message : 'Đã tạo giỏ hàng',
      data : newCart
    }
  }

  async findAll() {
    const cartUser = await this.cartRepository.find({
      relations : {
        user_id : true 
      }
    })
    return {
      data : cartUser
    }
  }

  async findOne(id: number) {
    const cart = await this.cartRepository.findOne({
      where : {
        cart_id : id
      },
      relations : {
        user_id : true,
        product : true
      }
    })
    return {
      data : cart
    }
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const data = await this.cartRepository
    .createQueryBuilder()
    .update(CartEntity)
    .set(updateCartDto) 
    .where('cart.cart_id = :id', {id : id})
    .execute()

    return {
      message : 'Cap nhap thanh cong',
      data : data
    }
  }

  async remove(id: number) {
    const data = await this.cartRepository
    .createQueryBuilder()
    .delete()
    .from(CartEntity)
    .where('cart.cart_id = :id', {id : id})
    .execute()

    return {
      message : 'Xoa thanh cong'  
    }
  }
}
