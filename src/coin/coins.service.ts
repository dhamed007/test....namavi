import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coin, CoinDocument } from './schemas/coin.schema';
import { CreateCoinDto, UpdateCoinDto } from './dto/create-coin.dto';

@Injectable()
export class CoinService {
  constructor(@InjectModel(Coin.name) private readonly coinModel: Model<CoinDocument>) { }

  async findAll(): Promise<Coin[]> {
    return this.coinModel.find().exec();
  }

  async findById(id: string): Promise<Coin> {
    return this.coinModel.findById(id).exec();
  }

  async create(createCoinDto: CreateCoinDto): Promise<Coin> {
    const createdCoin = new this.coinModel(createCoinDto);
    return createdCoin.save();
  }

  async update(id: string, updateCoinDto: UpdateCoinDto): Promise<Coin> {
    return this.coinModel.findByIdAndUpdate(id, updateCoinDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Coin> {
    return this.coinModel.findByIdAndRemove(id).exec();
  }
}

