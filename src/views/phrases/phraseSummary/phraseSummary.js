import { Component } from 'src/utils';
import template from './phraseSummary.html';
import './phraseSummary.scss';

@Component({
  bindings: {
    displayingPhraseType: '<',
    handleFilterTabClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseSummaryComponent {
}
