import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pradeepkumargaming966:NLVqVZYl8jJuLF1u@gamingapi.jlbb6hr.mongodb.net/gaming-api?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}