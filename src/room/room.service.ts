import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room, RoomDocument } from './schemas/room.schema';
import { CreateRoomDto, UpdateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private readonly roomModel: Model<RoomDocument>) { }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }

  async findById(id: string): Promise<Room> {
    return this.roomModel.findById(id).exec();
  }

  async create(createRoomDto: CreateRoomDto): Promise<Room> {
    const createdRoom = new this.roomModel(createRoomDto);
    return createdRoom.save();
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    return this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Room> {
    return this.roomModel.findByIdAndRemove(id).exec();
  }
}
