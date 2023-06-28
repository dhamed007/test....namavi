import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoinService } from './coins.service';
import { CreateCoinDto, UpdateCoinDto } from './dto/create-coin.dto';

@Controller('coins')
export class CoinController {
  constructor(private readonly coinService: CoinService) { }

  @Get()
  async findAll() {
    return await this.coinService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.coinService.findById(id);
  }

  @Post()
  async create(@Body() createCoinDto: CreateCoinDto) {
    const createdCoin = await this.coinService.create(createCoinDto);
    return createdCoin;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCoinDto: UpdateCoinDto) {
    return await this.coinService.update(id, updateCoinDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.coinService.delete(id);
  }
}
