import { IsString } from "class-validator";

export class UserDto {
  email: string;

  password?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  avatarPath: string;
}
