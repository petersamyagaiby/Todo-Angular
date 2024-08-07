import { Component } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css',
})
export class TodoWrapperComponent {
  todoList: Todo[] = [
    { id: 1, title: 'todo 1', status: true },
    { id: 2, title: 'todo 2', status: false },
    { id: 3, title: 'todo 3', status: true },
  ];

  addTodo(title: string) {
    const id = this.todoList.length + 1;
    this.todoList.push({
      id: id,
      title: title,
      status: false,
    });
    console.log('🚀 ~ TodoWrapperComponent ~ todoList:', this.todoList);
  }
}
interface Todo {
  id: number;
  title: string;
  status: boolean;
}
