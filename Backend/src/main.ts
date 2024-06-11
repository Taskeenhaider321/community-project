import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/docs/swagger.config';
import { ValidateInputPipe } from './config/pipe/validate.pipe';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Regular HTTP CORS configuration
  const corsOptions: CorsOptions = {
    origin: [
      '*',
      'http://localhost:4000',
      'http://localhost:3000',
      'http://localhost:800',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };

  // Enable CORS with options
  app.enableCors(corsOptions);

  app.useWebSocketAdapter(new WsAdapter(app));

  // Swagger configuration
  SwaggerConfig.config(app);

  // DTO validation pipe configuration
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(process.env.PORT || 3000);
  console.log(`The server is running at port ${process.env.PORT}`);
}
bootstrap();
