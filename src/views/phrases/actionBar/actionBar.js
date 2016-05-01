import { Component } from 'src/utils';
import template from './actionBar.html';


@Component({
  bindings: {
    isSelectAllOn: '<',
    selectedPhraseNumber: '<',
    handleSelectAllClick: '&',
    handleHideButtonClick: '&',
    handleSetVisibleButtonClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class ActionBarComponent {
  constructor() {
  }
}
