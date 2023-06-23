import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  languagePack: String;

  @Prop({ required: true })
  status: string;

  @Prop()
  createdBy: number;

  @Prop()
  updateBy: number;
}

export const UserSchema = SchemaFactory.createForClass(User);