import { Component } from 'src/utils';
import template from './phraseCenter.html';

function populatePhrasesSelected(phrases, isAllSelected, selectedIds) {
  // when isAllSelected, make all phrases selected to true
  if (isAllSelected) {
    return phrases.map(phrase => phrase.set('selected', true));
  }
  return phrases.map(phrase => {
    if (selectedIds.has(phrase.id)) {
      return phrase.set('selected', true);
    } else {
      return phrase.set('selected', false);
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
      phrases: state.getIn(['phrase', 'data', 'phrases']),
      isAllPhraseSelected: state.getIn(['phrase', 'ui', 'isAllPhraseSelected']),
      selectedPhraseIds: state.getIn(['phrase', 'ui', 'selectedPhraseIds'])
    }), {...phraseActions, ...modalActions})((state, actions) => {
      this.actions = actions;
      this.isAllPhraseSelected = state.isAllPhraseSelected;
      this.selectedPhraseIds = state.selectedPhraseIds;
      this.phrases = populatePhrasesSelected(state.phrases, this.isAllPhraseSelected, this.selectedPhraseIds);
      this.selectedPhraseNumber = this.selectedPhraseIds.size;
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
