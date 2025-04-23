import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted:true,
  }));
  
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: [(configService.get("AUTHORIZED_URLS") as string).split(',') ],
    credentials: true,
    methods: ['OPTIONS','POST','DELETE','GET']
  })

  const config = new DocumentBuilder()
    .setTitle('Courses API')
    .setDescription('The Courses API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(configService.get("PORT"));
}
bootstrap();
