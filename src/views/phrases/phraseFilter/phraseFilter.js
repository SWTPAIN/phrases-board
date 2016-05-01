import { Component } from 'src/utils';
import template from './phraseFilter.html';
import './phraseFilter.scss';

@Component({
  bindings: {
    displayingPhraseType: '<',
    handleSelectFilter: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseFilterComponent {
}
