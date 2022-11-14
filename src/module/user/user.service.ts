import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    const data = await this.prisma.user.findMany();
    console.log(data);
    return data;
  }

  async findOne(id: number) {
    // const user = await this.prisma.user.findFirst({
    //   where: {
    //     id
    //   },
    // });
    // return user;
  }
  async findOneByName(username: string) {
    // const user = await this.prisma.user.findFirst({
    //   where: {
    //     username: username
    //   }
    // }
    // )
    const user = await this.prisma.user.findMany({ where: { username: username } })
    console.log(user)
    return user
  }
  async getAllUsersInfo() {
    return await this.prisma.user.findMany()
  }

}
