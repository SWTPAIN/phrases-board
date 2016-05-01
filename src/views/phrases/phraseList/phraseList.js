import { Component } from 'src/utils';
import template from './phraseList.html';


@Component({
  bindings: {
    model: '<',
  },
  controllerAs: 'vm',
  template
})

export class PhraseListComponent {
  constructor() {
    this.phrases = this.model;
  }
}
