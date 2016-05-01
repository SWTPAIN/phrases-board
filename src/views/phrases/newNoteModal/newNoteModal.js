import { Component } from 'src/utils';
import template from './newNoteModal.html';


@Component({
  controllerAs: 'vm',
  template
})

export class NewNoteModalComponent {
  static $inject = [
    '$ngRedux',
    '$scope',
    'modalActions',
    'phraseActions'
  ];

  constructor($ngRedux, $scope, modalActions, phraseActions) {
    const disconnect = $ngRedux.connect(state => ({
      phraseId: state.getIn(['modal', 'data', 'phraseId']),
      isOpen: state.getIn(['modal', 'ui', 'isOpen']),
    }), {...modalActions, ...phraseActions})((state, actions) => {
      this.phraseId = state.phraseId;
      this.actions = actions;
      this.isOpen = state.isOpen;
      this.note = '';
    });

    $scope.$on('$destroy', disconnect);
  }

  handleCloseModalClick() {
    this.actions.closeModal();
  }

  handleSaveButtonClick() {
    this.actions.addNoteToPhrase(this.phraseId, this.note);
  }

}
