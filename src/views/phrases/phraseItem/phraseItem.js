import { Component } from 'src/utils';
import template from './phraseItem.html';


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
