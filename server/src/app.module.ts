import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CartEntity } from './entities/cart.entity';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { ProductEntity } from './entities/product.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : '07062000',
    database : 'demo-project',
    entities : [UserEntity, CartEntity, ProductEntity],
    synchronize : true
  }), UserModule, CartModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
