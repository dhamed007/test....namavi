// student.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';
import { CreateRoomDto, UpdateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel(Room.name) private readonly studentModel: Model<Room>) {}

  async findAll(): Promise<Room[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<Room> {
    return this.studentModel.findById(id).exec();
  }

  async create(createStudentDto: CreateRoomDto): Promise<Room> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async update(id: string, updateStudentDto: UpdateRoomDto): Promise<Room> {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Room> {
    return this.studentModel.findByIdAndRemove(id).exec();
  }
}
