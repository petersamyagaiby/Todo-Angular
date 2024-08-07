import { Component, Input } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() todoList: Todo[] = [];

  receiveCompleteTodoId(id: number) {
    this.todoList = this.todoList.filter((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
  }

  receiveDeleteTodoId(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  receiveTodoTitle(title: string) {
    console.log('FROM PARENT', title);
    this.todoList = this.todoList.filter((todo: any) => todo.title !== title);
  }

  completeTodo(id: number) {
    console.log('🚀 ~ TodoListComponent ~ id:', id);
    this.todoList[this.todoList.findIndex((todo) => todo.id === id)].status =
      !this.todoList[this.todoList.findIndex((todo) => todo.id === id)].status;
  }
  deleteTodo(id: number) {
    console.log('🚀 ~ TodoListComponent ~ id:', id);
    this.todoList.splice(
      this.todoList.findIndex((todo) => todo.id === id),
      1
    );
    console.log(this.todoList);
  }
}

interface Todo {
  id: number;
  title: string;
  status: boolean;
}
