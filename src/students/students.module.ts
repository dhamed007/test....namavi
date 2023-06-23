import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './students.controller';
import { StudentService } from './students.service';
import { Student, StudentSchema } from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentsModule {}