import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}

    @Get()
    findAll(){
        return this.todoService.findAll();
    }


    @Post()
    create(
        @Body('title') title: string,
        @Body('description') description: string
    ){
        return this.todoService.create(title, description);
    }

    @Put(':id')
    update(
        @Param('id') id: number, 
        @Body('isCompleted') isCompleted: boolean,
        @Body('title') title: string,
        @Body('description') description: string
    ){
        return this.todoService.update(id, isCompleted, title, description);
    }

    @Delete(':id')
    delete(
        @Param('id') id:number
    ){
        return this.todoService.delete(id);
    }
}