import { Module } from '@nestjs/common';
import { FavoritesModule } from './favorites/favorites.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,
      validationSchema: Joi.object({
        AUTHORIZED_URLS: Joi.string().required(),
        PORT: Joi.number().port().default(3000),
      }),

     }),
    FavoritesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
