import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer la validation globale
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Supprime les champs non définis dans le DTO
    forbidNonWhitelisted: true, // Rejette la requête s'il y a des champs non autorisés
    transform: true, // Transforme automatiquement les payloads en objets DTO
  }));

  const config = new DocumentBuilder()
    .setTitle('Banking API')
    .setDescription('API de gestion bancaire')
    .setVersion('1.0')
    .addTag('banking')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
