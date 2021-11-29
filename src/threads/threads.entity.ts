import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Threads {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject: string;

    @Column()
    body: string;

    @Column()
    ownerId: number
}