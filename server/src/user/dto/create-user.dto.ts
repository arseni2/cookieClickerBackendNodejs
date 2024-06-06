import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    tg_id: string;

    @ApiProperty()
    username: string;
}
