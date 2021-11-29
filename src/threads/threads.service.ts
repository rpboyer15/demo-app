import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createThreadDto } from "./dto/create-thread.dto";
import { Threads } from "./threads.entity";

@Injectable()
export class ThreadsService {
    constructor(
        @InjectRepository(Threads)
        private readonly threadsRepository: Repository<Threads>
    ) {}

    async create(createThreadDto: createThreadDto): Promise<Threads> {
        const thread = new Threads();
        thread.subject = createThreadDto.subject;
        thread.body = createThreadDto.body;
        thread.ownerId = createThreadDto.ownerId;

        return this.threadsRepository.save(thread);
    }

    async findAll(): Promise<Threads[]> {
        return this.threadsRepository.find()
    }

    findOne(id: number): Promise<Threads> {
        return this.threadsRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.threadsRepository.delete(id);
    }

}