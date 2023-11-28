import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { NestFactory } from '@nestjs/core';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {
  async start() {
    const app = await NestFactory.create(AppModule);

    const corsOptions: CorsOptions = {
      origin: ['http://localhost:8080', 'http://192.168.1.2:8080'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    };
    app.enableCors(corsOptions);

    await app.listen(2020);
  }
}

const appModule = new AppModule();
appModule.start();
