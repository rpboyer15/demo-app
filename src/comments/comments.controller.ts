import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Comments } from "./comments.entity";
import { CommentsService } from "./comments.service";
import { createCommentDto } from "./dto/create-comment.dto";

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    
    @Get()
    findAll(): Promise<Comments[]> {
        return this.commentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Comments> {
        return this.commentsService.findOne(id);
    }

    @Post()
    create(@Body() createCommentDto: createCommentDto): Promise<Comments> {
        return this.commentsService.create(createCommentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.commentsService.remove(id);
    }

}