import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CentrifugoService } from './centrifugo.service';
import * as dotenv from 'dotenv';

async function bootstrap() {
  try {
    dotenv.config();
    const app = await NestFactory.create(AppModule);

    // Connect to Centrifugo
    const centrifugoService = app.get(CentrifugoService);
    await centrifugoService.connect();

    // Enable CORS
    app.enableCors();

    // Logging middleware
    app.use((req, res, next) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
    });

    // Error handling middleware
    app.use((err, req, res, next) => {
      console.error('Error:', err);
      res.status(500).json({ message: 'Internal server error' });
    });

    // Start the NestJS application
    const port = process.env.DB_PORT || 3001;
    await app.listen(port);
    console.log(`Application is running on port ${port}`);
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}
bootstrap();
