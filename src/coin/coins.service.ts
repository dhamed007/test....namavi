// student.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/coin.schema';
import { CreateCoinDto, UpdateCoinDto } from './dto/create-coin.dto';

@Injectable()
export class CoinService {
  constructor(@InjectModel(User.name) private readonly studentModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.studentModel.findById(id).exec();
  }

  async create(createStudentDto: CreateCoinDto): Promise<User> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async update(id: string, updateStudentDto: UpdateCoinDto): Promise<User> {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.studentModel.findByIdAndRemove(id).exec();
  }
}
