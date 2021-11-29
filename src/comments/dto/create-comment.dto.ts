import { ApiProperty } from "@nestjs/swagger";

export class createCommentDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    comment: string;

    @ApiProperty()
    threadId: number;
}