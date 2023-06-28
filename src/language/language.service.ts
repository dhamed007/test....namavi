import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Language, LanguageDocument } from './schemas/language.schema';
import { CreateLangDto, UpdateLangDto } from './dto/create-language.dto';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language.name) private readonly LanguageModel: Model<LanguageDocument>) { }

  async findAll(): Promise<Language[]> {
    return this.LanguageModel.find().exec();
  }

  async findById(id: string): Promise<Language> {
    return this.LanguageModel.findById(id).exec();
  }

  async create(createLangDto: CreateLangDto): Promise<Language> {
    const newLanguage = new this.LanguageModel(createLangDto);
    return newLanguage.save();
  }

  async update(id: string, updateLangDto: UpdateLangDto): Promise<Language> {
    return this.LanguageModel.findByIdAndUpdate(id, updateLangDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Language> {
    return this.LanguageModel.findByIdAndDelete(id).exec();
  }
}
