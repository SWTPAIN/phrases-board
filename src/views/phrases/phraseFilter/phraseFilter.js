import { Component } from 'src/utils';
import template from './phraseFilter.html';


@Component({
  bindings: {
    model: '<',
    handleFilterTabClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseFilterComponent {
}
