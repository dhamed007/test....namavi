import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNotEmpty, IsInt, Min, Max, Length, IsEmail } from 'class-validator';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  firstName: string;

  @Prop({ required: true, trim: true })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  lastName: string;

  @Prop({ required: true, trim: true, unique: true })
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  type: string;

  @Prop({ required: true })
  @IsInt()
  @Min(0)
  @Max(150)
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
