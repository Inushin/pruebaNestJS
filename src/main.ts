import { NestFactory } from '@nestjs/core';
import { addPath } from 'graphql/jsutils/Path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors();
  await app.listen(3000)
}
bootstrap()
