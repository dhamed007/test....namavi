import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from './dto/create-room.dto';
import { CentrifugoService } from 'src/centrifugo.service';

@Controller('rooms')
export class CoinController {
  constructor(
    private readonly userService: RoomService,
    @Inject(CentrifugoService) private readonly centrifugoService: CentrifugoService,
  ) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    const createdStudent = await this.userService.create(createRoomDto);

    // Publish the newly created student to Centrifugo for real-time updates
    this.centrifugoService.publish('rooms', createdStudent);

    return createdStudent;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return await this.userService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}

