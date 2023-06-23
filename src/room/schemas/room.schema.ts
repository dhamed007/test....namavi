import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop({ required: true })
  userId: String;

  @Prop({ required: true })
  type: string;

  @Prop()
  chatInitiator: string;

 
}

export const RoomSchema = SchemaFactory.createForClass(Room);