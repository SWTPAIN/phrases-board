import { Component } from 'src/utils';
import template from './phraseFilter.html';
import './phraseFilter.scss';

@Component({
  bindings: {
    displayingPhraseType: '<',
    filterKeyword: '<',
    handleSelectFilter: '&',
    handleFilterKeywordChange: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseFilterComponent {
}
