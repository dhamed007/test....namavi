import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoinController } from 'src/coin/coins.controller';
import { RoomService } from './room.service';
import { Room } from './schemas/room.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Room.name, schema: Room }]),
  ],
  controllers: [CoinController],
  providers: [RoomService],
})
export class StudentsModule {}
