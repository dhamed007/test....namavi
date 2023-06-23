// user.controller.ts

import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CentrifugoService } from 'src/centrifugo.service';
import { AuthDto } from './dto/create-auth.dto';

@Controller('users')
export class UserController {
  constructor(@Inject(CentrifugoService) private readonly centrifugoService: CentrifugoService) { }

  @Post('login')
  async login(@Body() loginDto: AuthDto) {
    // Perform user login logic

    // Publish a message to Centrifugo
    await this.centrifugoService.publish('user-login', { username: loginDto.username, password: loginDto.password });

    // Return the login result
    return { message: 'Login successful' };
  }
}
