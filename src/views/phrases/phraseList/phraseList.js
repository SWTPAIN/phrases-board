import { Component } from 'src/utils';
import template from './phraseList.html';


@Component({
  bindings: {
    model: '<',
    deleteTask: '&',
    updateTask: '&'
  },
  controllerAs: 'vm',
  template
})

export class PhraseListComponent {
  constructor() {
    this.phrases = [1, 2];
  }
}
