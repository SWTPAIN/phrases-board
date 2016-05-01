import { Component, denormalize } from 'src/utils';
import template from './phraseCenter.html';


@Component({
  controllerAs: 'vm',
  template
})

export class PhraseCenterComponent {
  static $inject = [
    '$ngRedux',
    '$scope',
    'phraseActions',
    'modalActions',
  ];

  constructor($ngRedux, $scope, phraseActions, modalActions) {
    const disconnect = $ngRedux.connect(state => ({
      phrase: state.phrase
    }), {...phraseActions, ...modalActions})((state, actions) => {
      this.actions = actions;
      this.phrases = denormalize(state.phrase.data.phrases);
    });

    $scope.$on('$destroy', disconnect);

  }

  showAddNoteModal(phraseId) {
    this.actions.showAddNoteModal(phraseId);
  }
}
