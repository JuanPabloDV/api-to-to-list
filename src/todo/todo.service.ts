import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private todoReposity: Repository<Todo>
    ){}

    findAll() {
        return this.todoReposity.find();
    }

    create(title: string, description: string){
        const todo = new Todo();  
        todo.title = title;  
        todo.description  = description;    
        return this.todoReposity.save(todo);  
    }

  
    async update(id: number, isCompleted: boolean, title: string, description: string){
    
        const todo = await this.todoReposity.findOne({where: {id: id}});
        if(todo){  
            todo.isCompleted = isCompleted; 
            todo.title = title;  
            todo.description  = description; 
            return this.todoReposity.save(todo);  
        }
        return null; 
    }

    delete(id:number){
        return this.todoReposity.delete(id).then(() => {});
    }
}