import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { CartEntity } from 'src/entities/cart.entity';
import { CartService } from 'src/cart/cart.service';

@Module({
  imports : [TypeOrmModule.forFeature([UserEntity, CartEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
