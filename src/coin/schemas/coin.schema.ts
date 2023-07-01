import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CoinDocument = Coin & Document;

@Schema()
export class Coin {
  @Prop({ required: true })
  languagePack: String;

  @Prop({ required: true })
  status: string;

  @Prop()
  createdBy: number;

  @Prop()
  updateBy: number;
}

export const CoinSchema = SchemaFactory.createForClass(Coin);
