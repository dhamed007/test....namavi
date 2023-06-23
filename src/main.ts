// main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CentrifugoService } from './centrifugo.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Connect to Centrifugo
  const centrifugoService = app.get(CentrifugoService);
  await centrifugoService.connect();
  
  // Start the NestJS application
  await app.listen(3001);
}
bootstrap();
