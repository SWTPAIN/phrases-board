import _ from 'lodash';
import { Component, denormalize } from 'src/utils';
import template from './phraseCenter.html';

function populatePhrasesSelected(phrases, isAllSelected, selectedIds) {
  // when isAllSelected, make all phrases selected to true
  if (isAllSelected) {
    return _.map(phrases, phrase => (
      {
        ...phrase,
        selected: true
      }
    ));
  }
  return _.map(phrases, phrase => {
    if (_.includes(selectedIds, phrase.id)) {
      return {
        ...phrase,
        selected: true,
        context: '111'
      };
    } else {
      return {
        ...phrase,
        selected: false
      };
    }
  });
}

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
      this.isAllPhraseSelected = state.phrase.ui.isAllPhraseSelected;
      this.selectedPhraseIds = state.phrase.ui.selectedPhraseIds;
      this.phrases = populatePhrasesSelected(denormalize(state.phrase.data.phrases), this.isAllPhraseSelected, this.selectedPhraseIds);
      this.selectedPhraseNumber = state.phrase.ui.selectedPhraseIds.length;
    });

    $scope.$on('$destroy', disconnect);

  }

  showAddNoteModal(phraseId) {
    this.actions.showAddNoteModal(phraseId);
  }

  selectAllPhraseNumber() {
    this.actions.selectAllPhraseNumber();
  }
}
