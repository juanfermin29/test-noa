import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('favorites')
@ApiTags("Favorites")
export class FavoritesController {
  constructor(private readonly favoritosService: FavoritesService) { }

  @Post(':userId')
  add(@Param('userId') userId: string, @Body() createFavoritoDto: CreateFavoriteDto) {
    return this.favoritosService.add(createFavoritoDto, userId);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.favoritosService.findAll(userId);
  }

  @Get('is-favorite/:userId/:productId')
  isFavorite(@Param('userId') userId: string, @Param('productId', ParseIntPipe) productId: number) {
    return this.favoritosService.isFavorite(userId, productId);
  }

  @Delete(':userId/:productId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('userId') userId: string, @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.favoritosService.remove({ productId, userId });
  }
}
