import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { StudentService } from './students.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/create-student.dto';
import { CentrifugoService } from 'src/centrifugo.service';

@Controller('students')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    @Inject(CentrifugoService) private readonly centrifugoService: CentrifugoService,
  ) {}

  @Get()
  async findAll() {
    return await this.studentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.studentService.findById(id);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const createdStudent = await this.studentService.create(createStudentDto);

    // Publish the newly created student to Centrifugo for real-time updates
    this.centrifugoService.publish('students', createdStudent);

    return createdStudent;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return await this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.studentService.delete(id);
  }
}

