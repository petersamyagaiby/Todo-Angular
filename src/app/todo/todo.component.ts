import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo: any;
  @Output() sendCompleteTodoId = new EventEmitter<number>();
  @Output() sendDeleteTodoId = new EventEmitter<number>();
  completeTodo(id: number) {
    this.sendCompleteTodoId.emit(id);
  }
  deleteTodo(id: number) {
    this.sendDeleteTodoId.emit(id);
  }
}
