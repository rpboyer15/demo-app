import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsController } from "./comments.controller";
import { Comments } from "./comments.entity";
import { CommentsService } from "./comments.service";

@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    providers: [CommentsService],
    controllers: [CommentsController]
})


export class CommentsModule {}