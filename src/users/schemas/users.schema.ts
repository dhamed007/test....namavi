import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  public firstName: string;

  @Prop({ required: true })
  public lastName: string;

  @Prop({ required: true, enum: ['admin', 'user'] })
  public type: 'admin' | 'user';

  @Prop({ required: true, min: 18 })
  public age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
