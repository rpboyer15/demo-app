import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { createThreadDto } from "./dto/create-thread.dto";
import { Threads } from "./threads.entity";
import { ThreadsService } from "./threads.service";

@ApiTags('threads')
@Controller('threads')
export class ThreadsController {
    constructor(private readonly threadsService: ThreadsService) {}
    
    @Get()
    findAll(): Promise<Threads[]> {
        return this.threadsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Threads> {
        return this.threadsService.findOne(id);
    }

    @Post()
    create(@Body() createThreadDto: createThreadDto): Promise<Threads> {
        return this.threadsService.create(createThreadDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.threadsService.remove(id);
    }

}