import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) { }

  @Get()
  async findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.roomService.findById(id);
  }

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    const createdRoom = await this.roomService.create(createRoomDto);
    return createdRoom;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(id, updateRoomDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roomService.delete(id);
  }
}
