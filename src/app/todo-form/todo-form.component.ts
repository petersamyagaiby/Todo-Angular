import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() sendTodoTitle = new EventEmitter<string>();
  addTodo() {
    let inputToDo = document.getElementById('todoTitle') as HTMLInputElement;

    if (inputToDo) {
      this.sendTodoTitle.emit(inputToDo.value);
      inputToDo.value = '';
    } else {
      console.log('Todo Title is empty');
    }
  }
}
