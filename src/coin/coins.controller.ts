import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { CoinService } from './coins.service';
import { CreateCoinDto, UpdateCoinDto } from './dto/create-coin.dto';
import { CentrifugoService } from 'src/centrifugo.service';

@Controller('coins')
export class CoinController {
  constructor(
    private readonly userService: CoinService,
    @Inject(CentrifugoService) private readonly centrifugoService: CentrifugoService,
  ) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() createCoinDto: CreateCoinDto) {
    const createdStudent = await this.userService.create(createCoinDto);

    // Publish the newly created student to Centrifugo for real-time updates
    this.centrifugoService.publish('coins', createdStudent);

    return createdStudent;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCoinDto: UpdateCoinDto) {
    return await this.userService.update(id, updateCoinDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}

