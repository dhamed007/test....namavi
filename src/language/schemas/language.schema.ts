import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  accountNo: string;

  @Prop({ required: true })
  coin: number;

  @Prop({ required: true })
  status: number;
}

export const UserSchema = SchemaFactory.createForClass(User);