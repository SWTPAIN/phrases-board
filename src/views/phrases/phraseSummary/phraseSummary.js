import { Component } from 'src/utils';
import template from './phraseSummary.html';
import './phraseSummary.scss';

@Component({
  bindings: {
    displayingPhraseType: '<',
    phrases: '<',
    handleFilterTabClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseSummaryComponent {

  $onChanges() {
    this.phraseCounts = this.phrases.reduce((acc, phrase) => {
      if (phrase.get('isVisible')) {
        return {
          ...acc,
          visible: (acc.visible + 1),
        };
      } else {
        return {
          ...acc,
          hidden: (acc.hidden + 1),
        };
      }
    }, {visible: 0, hidden: 0});
  }
}
