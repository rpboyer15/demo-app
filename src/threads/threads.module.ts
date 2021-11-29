import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ThreadsController } from "./threads.controller";
import { Threads } from "./threads.entity";
import { ThreadsService } from "./threads.service";

@Module({
    imports: [TypeOrmModule.forFeature([Threads])],
    providers: [ThreadsService],
    controllers: [ThreadsController]
})


export class ThreadsModule {}