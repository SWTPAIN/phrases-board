import { Component } from 'src/utils';
import template from './actionBar.html';
import './actionBar.scss';


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
