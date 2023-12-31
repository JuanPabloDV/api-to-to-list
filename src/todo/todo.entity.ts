import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string 

    @Column({ nullable: true })
    description: string 


    @Column({ default: false })
    isCompleted: boolean;
}

