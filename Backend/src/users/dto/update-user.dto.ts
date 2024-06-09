import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Gender } from '../schemas/user.schemas'; // Corrected import path

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  phone_number?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  life_style_goals?: string;

  @ApiProperty()
  @IsOptional()
  interests?: string[];

  @ApiProperty({ enum: Gender })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;
}
