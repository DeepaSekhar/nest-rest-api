import { IsInt, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsInt()
  quantity: number;
}