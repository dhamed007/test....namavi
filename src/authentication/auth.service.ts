// student.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/auth.schema';
import { AuthDto } from './dto/create-auth.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly studentModel: Model<User>) { }

  async findAll(): Promise<User[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.studentModel.findById(id).exec();
  }

  async create(createStudentDto: AuthDto): Promise<User> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async update(id: string, updateStudentDto: AuthDto): Promise<User> {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.studentModel.findByIdAndRemove(id).exec();
  }
}
