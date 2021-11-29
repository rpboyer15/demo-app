import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
import { ThreadsModule } from './threads/threads.module';
import { UsersModule } from './users/users.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'reed',
      password: 'reed',
      database: 'reed',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    ThreadsModule
  ],
})
export class AppModule {
}
