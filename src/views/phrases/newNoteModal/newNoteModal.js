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
      modal: state.modal
    }), {...modalActions, ...phraseActions})((state, actions) => {
      this.phraseId = state.modal.data.phraseId;
      this.actions = actions;
      this.isOpen = state.modal.ui.isOpen;
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
