import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinController } from './coins.controller';
import { CoinService } from './coins.service';
import { User, UserSchema } from './schemas/coin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [CoinController],
  providers: [CoinService],
})
export class CoinsModule {}
