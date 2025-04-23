import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { CustomResponse } from 'src/interfaces/custom-response.interface';
import { UserFavorites } from 'src/interfaces/user-favorites.interface';

@Injectable()
export class FavoritesService {
  favorites: UserFavorites[] = [];

  add({ productId }: CreateFavoriteDto, userId: string) {
    const productIndex = this.favorites.findIndex(
      x => x.productId == productId && x.userId == userId
    );

    if (productIndex >= 0) {
      return { productId, userId }
    }

    this.favorites.push({ productId, userId });

    return {
      data: this.favorites[this.favorites.length - 1]
    };
  }

  remove({ productId, userId }: UserFavorites): CustomResponse<null> {
    this.favorites = this.favorites.filter(x => !(x.productId === productId && x.userId === userId));
    return {
      data: null
    };
  }

  findAll(userId: string): CustomResponse<number[]> {
    return {
      data: this.favorites.filter(x => x.userId === userId).map(x => x.productId)
    };
  }

  isFavorite(userId: string, id: number): CustomResponse<Boolean> {
    return {
      data: this.favorites.some(
        x => x.productId == id && x.userId == userId
      )
    };
  }
}
