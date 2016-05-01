import { Component } from 'src/utils';
import template from './phraseItem.html';


@Component({
  bindings: {
    model: '<',
    deleteTask: '&',
    updateTask: '&'
  },
  controllerAs: 'phraseItem',
  template
})

export class PhraseItemComponent {
  constructor() {
    this.editing = false;
    this.statusUpdated = false;
  }

  cancelEdit() {
    this.editing = false;
  }

  edit() {
    this.title = this.model.title;
    this.editing = true;
  }

  delete() {
    this.deleteTask({task: this.model});
  }

  save() {
    if (this.editing) {
      if (this.model.title !== this.title) {
        this.model.title = this.title;
        this.updateTask({task: this.model});
      }
      this.editing = false;
    }
  }

  toggleCompleted() {
    this.model.completed = !this.model.completed;
    this.updateTask({task: this.model});
    this.statusUpdated = this.model.completed;
  }
}