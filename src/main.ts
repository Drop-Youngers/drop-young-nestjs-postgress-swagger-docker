import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Clique')
    .setDescription('The Clique api documentation ')
    .setVersion('1.0')
    .addTag('clique')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.SERVER_PORT || 3031);
}
bootstrap();
