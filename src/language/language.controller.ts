import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLangDto, UpdateLangDto } from './dto/create-language.dto';
import { CentrifugoService } from 'src/centrifugo.service';

@Controller('language')
export class LanguageController {
  constructor(
    private readonly userService: LanguageService,
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
  async create(@Body() createLangDto: CreateLangDto) {
    const createdStudent = await this.userService.create(createLangDto);

    // Publish the newly created student to Centrifugo for real-time updates
    this.centrifugoService.publish('language', createdStudent);

    return createdStudent;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return await this.userService.update(id, updateLangDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}

