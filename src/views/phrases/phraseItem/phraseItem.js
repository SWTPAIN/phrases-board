import { Component } from 'src/utils';
import template from './phraseItem.html';


@Component({
  bindings: {
    model: '<',
  },
  controllerAs: 'vm',
  template
})

export class PhraseItemComponent {
  constructor() {
    this.editing = false;
    this.statusUpdated = false;
  }

}
