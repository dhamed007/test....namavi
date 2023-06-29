import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User, UserSchema } from './schemas/users.schema';
import { UserModule } from './user.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule, // Add UserModule import
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class StudentsModule {}
