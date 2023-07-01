import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User, UserSchema } from './schemas/coin.schema';
import { User, UserSchema } from './schemas/language.schema';

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
