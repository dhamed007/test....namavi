import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { User, UserSchema } from './schemas/language.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [LanguageController],
  providers: [LanguageService],
})
export class StudentsModule {}