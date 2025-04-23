import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, Min } from "class-validator";

export class CreateFavoriteDto {
    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    productId: number;
}
