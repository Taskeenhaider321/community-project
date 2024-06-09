import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { LoginAuthDto } from './login-auth.dto';
import { Gender } from '../../users/schemas/user.schemas';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  phone_number: number;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  life_style_goals: string;

  @ApiProperty()
  interests: string[];
}
