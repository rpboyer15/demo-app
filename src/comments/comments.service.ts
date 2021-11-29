import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comments } from "./comments.entity";
import { createCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comments)
        private readonly commentsRepository: Repository<Comments>
    ) {}

    async create(createCommentDto: createCommentDto): Promise<Comments> {
        const comment = new Comments();
        comment.userId = createCommentDto.userId;
        comment.comment = createCommentDto.comment;
        comment.threadId = createCommentDto.threadId;

        return this.commentsRepository.save(comment);
    }

    async findAll(): Promise<Comments[]> {
        return this.commentsRepository.find()
    }

    findOne(id: number): Promise<Comments> {
        return this.commentsRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.commentsRepository.delete(id);
    }

    async findAllThreadComments(threadId: number): Promise<Comments[]> {
        return this.commentsRepository.find({
            where: {
                threadId: threadId
            }
        });
    }
}