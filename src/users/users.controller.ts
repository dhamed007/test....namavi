import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { CentrifugoService } from 'src/centrifugo.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(CentrifugoService) private readonly centrifugoService: CentrifugoService,
  ) { }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const createdStudent = await this.userService.create(createUserDto);

    // Publish the newly created student to Centrifugo for real-time updates
    this.centrifugoService.publish('users', createdStudent);

    return createdStudent;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}