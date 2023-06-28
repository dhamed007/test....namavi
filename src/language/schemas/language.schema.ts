import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LanguageDocument = Language & Document;

@Schema()
export class Language {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  accountNo: string;

  @Prop({ required: true })
  coin: number;

  @Prop({ required: true })
  status: number;
}

export const CoinSchema = SchemaFactory.createForClass(Language);
