import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/docs/swagger.config';
import { ValidateInputPipe } from './config/pipe/validate.pipe';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  origin: [
    'https://week-7-8-blogia-client.vercel.app',
    'https://week-7-blogia-admin.vercel.app',
    'https://challenge-8-frontend.vercel.app',
    'http://localhost:3001',
    'http://localhost:3000',
  ], // or specify your frontend URL(s) here
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with options
  app.enableCors(corsOptions);
  // Swagger configuration
  SwaggerConfig.config(app);

  // DTO validation pipe configuration
  app.useGlobalPipes(new ValidateInputPipe());
  console.log(`The server is running at port ${process.env.PORT}`);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
