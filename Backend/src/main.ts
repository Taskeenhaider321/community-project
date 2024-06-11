import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplicationContext } from '@nestjs/common';
import { ServerOptions } from 'socket.io';
import { SwaggerConfig } from './config/docs/swagger.config';
import { ValidateInputPipe } from './config/pipe/validate.pipe';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

// Custom WebSocket Adapter
class CustomSocketIoAdapter extends IoAdapter {
  private options: Partial<ServerOptions>;

  constructor(app: INestApplicationContext, options?: Partial<ServerOptions>) {
    super(app);
    this.options = options;
  }

  createIOServer(port: number, options?: Partial<ServerOptions>): any {
    return super.createIOServer(port, { ...options, ...this.options });
  }
}

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

  // Configure Socket.IO with CORS
  const socketIoOptions: Partial<ServerOptions> = {
    cors: {
      origin: ['*'],
      methods: ['GET', 'POST'],
    },
  };

  // Use the custom WebSocket adapter
  app.useWebSocketAdapter(new CustomSocketIoAdapter(app, socketIoOptions));

  // Swagger configuration
  SwaggerConfig.config(app);

  // DTO validation pipe configuration
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(process.env.PORT || 3000);
  console.log(`The server is running at port ${process.env.PORT}`);
}
bootstrap();
