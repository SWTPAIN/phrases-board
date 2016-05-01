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
  ];

  constructor($ngRedux, $scope, modalActions) {
    const disconnect = $ngRedux.connect(state => ({
      modal: state.modal
    }), modalActions)((state, actions) => {
      this.actions = actions;
      this.isOpen = state.modal.ui.isOpen;
    });

    $scope.$on('$destroy', disconnect);
  }

  handleCloseModalClick() {
    this.actions.closeModal();
  }

}
