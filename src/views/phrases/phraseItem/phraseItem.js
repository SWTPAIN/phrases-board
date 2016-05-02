import { Component } from 'src/utils';
import template from './phraseItem.html';
import './phraseItem.scss';

@Component({
  bindings: {
    model: '<',
    handleAddNoteClick: '&',
    handleSelectCheckboxClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseItemComponent {

}
