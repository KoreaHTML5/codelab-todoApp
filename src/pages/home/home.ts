import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import todos from '../../data/todos';
import { TodoPage } from '../todo/todo';
import { NewTodoPage } from '../new-todo/new-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  todos: {
    id: number,
    title: string,
    description: string,
    complete: boolean
  }[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.todos = todos;
  }

  openTodo(todoId) {
    this.navCtrl.push(TodoPage, { id: todoId });
  }

  openNewTodo() {
    let modal = this.modalCtrl.
      create(NewTodoPage);
    modal.present();
  }

  deleteTodo(todoId) {
    todos.splice(todoId - 1, 1);
  }
}
