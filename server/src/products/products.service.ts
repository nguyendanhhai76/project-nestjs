import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor( @InjectRepository(ProductEntity)
   private readonly productRepository : Repository<ProductEntity>) {}
  async create(product: any) {
    const newProduct = this.productRepository.create(product);
    await this.productRepository.save(newProduct);
    return 'This action adds a new product';
  }

  async findAll() {
    const products = await this.productRepository.find();
    return {
      data : products
    }
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where : {
        id : id
      },
      
    })
    return {
      data : product}
  }


  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update({id : id}, {...updateProductDto})
  }

  remove(id: number) {
    return this.productRepository.delete({id : id})
  }
}
