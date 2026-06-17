import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // --- ACTIVER LE CORS ICI ---

    // Option 1 : Tout autoriser (idéal pour le développement rapide)
    app.enableCors();

    /* // Option 2 : Restreindre à ton frontend React (Plus sécurisé)
    app.enableCors({
      origin: 'http://localhost:3000', // Remplace par l'URL de ton React (ex: 5173 si tu utilises Vite)
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    */
    // ---------------------------

    // Activer la validation globale
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true, // Supprime les champs non définis dans le DTO
        forbidNonWhitelisted: true, // Rejette la requête s'il y a des champs non autorisés
        transform: true, // Transforme automatiquement les payloads en objets DTO
    }));

    const config = new DocumentBuilder()
        .setTitle('Banking-WB API')
        .setDescription('API de gestion bancaire')
        .setVersion('1.0')
        .addTag('banking')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? 3001);
}
bootstrap();