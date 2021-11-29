import { ApiProperty } from "@nestjs/swagger";

export class createThreadDto {
    @ApiProperty()
    subject: string;

    @ApiProperty()
    body: string;

    @ApiProperty()
    ownerId: number;
}