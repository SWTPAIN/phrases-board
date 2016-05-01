import { Component } from 'src/utils';
import template from './actionBar.html';


@Component({
  bindings: {
    isSelectAllOn: '<',
    selectedPhraseNumber: '<',
    handleSelectAllClick: '&',
    handleHideButtonClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class ActionBarComponent {
  constructor() {
  }
}
