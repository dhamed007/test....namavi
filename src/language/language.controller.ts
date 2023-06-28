import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLangDto, UpdateLangDto } from './dto/create-language.dto';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) { }

  @Get()
  async findAll() {
    return await this.languageService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.languageService.findById(id);
  }

  @Post()
  async create(@Body() createLangDto: CreateLangDto) {
    const createdLanguage = await this.languageService.create(createLangDto);
    return createdLanguage;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return await this.languageService.update(id, updateLangDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.languageService.delete(id);
  }
}
