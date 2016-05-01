import { Component } from 'src/utils';
import template from './phraseCenter.html';


function populatePhrasesSelected(phrases, selectedIds) {
  return phrases.map(phrase => {
    if (selectedIds.includes(phrase.get('id'))) {
      return phrase.set('selected', true);
    } else {
      return phrase.set('selected', false);
    }
  });
}

function filterPhrasesByDisplayingType(phrases, type) {
  if (type === 'visible') {
    return phrases.filter(phrase => {
      return phrase.get('isVisible');
    });
  } else if (type === 'hidden') {
    return phrases.filter(phrase => !phrase.get('isVisible'));
  } else {
    return phrases;
  }
}

function filterPhrasesByKeyword(phrases, keyword) {
  if (keyword === '') {
    return phrases;
  }
  return phrases.filter(phrase => {
    if (phrase.get('id') === Number(keyword)) {
      return true;
    }
    if (phrase.get('context').match(new RegExp(`${keyword}`, 'i'))) {
      return true;
    }
    if (phrase.get('value').match(new RegExp(`${keyword}`, 'i'))) {
      return true;
    }
    if (isKeywordInNotes(keyword, phrase.get('notes').toJS())) {
      return true;
    }
    return false;
  });
}

function isKeywordInNotes(keyword, notes) {
  for (const note of notes) {
    if (note.match(new RegExp(keyword, 'i'))) {
      return true;
    }
  }
  return false;
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
      selectedPhraseIds: state.getIn(['phrase', 'ui', 'selectedPhraseIds']),
      displayingPhraseType: state.getIn(['phrase', 'ui', 'displayingPhraseType']),
      filterKeyword: state.getIn(['phrase', 'ui', 'filterKeyword']),
    }), {...phraseActions, ...modalActions})((state, actions) => {
      this.actions = actions;
      this.selectedPhraseIds = state.selectedPhraseIds;
      this.isAllPhraseSelected = state.selectedPhraseIds.size === state.phrases.size;
      this.displayingPhraseType = state.displayingPhraseType;
      this.phrases = state.phrases;
      this.filterKeyword = state.filterKeyword;
      this.displayingPhrases = filterPhrasesByKeyword(
        filterPhrasesByDisplayingType(
          populatePhrasesSelected(state.phrases, this.selectedPhraseIds),
          this.displayingPhraseType
        ),
        this.filterKeyword
      );
      this.selectedPhraseNumber = this.selectedPhraseIds.size;
    });

    $scope.$on('$destroy', disconnect);

  }


  showAddNoteModal(phraseId) {
    this.actions.showAddNoteModal(phraseId);
  }

  toggleAllPhrase() {
    this.actions.toggleAllPhrase();
  }

  selectOnePhrase(phraseId) {
    this.actions.selectOnePhrase(phraseId);
  }

  hideSelectedPhrase() {
    this.actions.hideSelectedPhrase();
  }

  setVisibleButtonClick() {
    this.actions.setVisibleButtonClick();
  }

  updateDisplayingPhraseType(type) {
    this.actions.updateDisplayingPhraseType(type);
  }

  updateFilterKeyword(keyword) {
    this.actions.updateFilterKeyword(keyword);
  }

}
