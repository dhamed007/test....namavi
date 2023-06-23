// student.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDto, UpdateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private readonly studentModel: Model<Student>) {}

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Student> {
    return this.studentModel.findByIdAndRemove(id).exec();
  }
}
