import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor( @InjectRepository(UserEntity)
   private readonly userRepository : Repository<UserEntity>) {}
  async create(user: any) {
    const findUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (findUser){
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return {
      message : ' Đăng kí thành công !!',
    }
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations : {
        cart : true}
    });
    return {
      data : users
    }
  }

  async findOne(user: any) {
    const findUser = await this.userRepository.findOne({
      where : {
        email : user.email
      },
      relations : {
        cart : true
      }
    })
    if(!findUser){
      return {
        message : 'Email không chính xác'
        }
      }else if(findUser.password !== user.password){
        return {
          message : 'Mật khẩu không chính xác'
        }
      }else{
        return {
          message : 'Đăng nhập thành công !!',
          data : findUser
        }
      }
    }
  
   async getOne(id: number) {
    const user = await this.userRepository.findOne({
      where : {user_id : id},
      relations : {
        cart : true
      }
    })
    return {
      data : user
    }
   }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = await this.userRepository
    .createQueryBuilder()
    .update(UserEntity)
    .set(updateUserDto)
    .where('users.user_id = :id', {id : id})
    .execute()

    return {
      message : 'Cap nhap thanh cong',
      data : data
    }
}

  async remove(id: number) {
    const data = await this.userRepository
    .createQueryBuilder()
    .delete()
    .from(UserEntity)
    .where('users.user_id = :id', {id : id})
    .execute()

    return {
      message : 'Xoa thanh cong'
    }
  }
}
