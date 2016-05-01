import immutable from 'immutable';
import { getData, savePhraseNotes } from '../../utils/localStorage';
import { createReducer } from 'src/utils';
import {
  ADD_NOTE_TO_PHRASE,
  TOGGLE_ALL_PHRASE,
  SELECT_ONE_PHRASE,
  HIDE_SELECTED_PHRASE,
  SET_SELECTED_PHRASE_VISIBLE,
  UPDATE_DISPLAYING_PHRASE_TYPE,
  UPDATE_FILTER_KEYWORD,
} from './action-types';

export const INITIAL_STATE = immutable.fromJS({
  data: getData(),
  ui: {
    selectedPhraseIds: [],
    displayingPhraseType: 'visible', // TODO use symbol or at least constant,
    filterKeyword: ''
  }
});
export const phraseReducer = createReducer(INITIAL_STATE, {
  [ADD_NOTE_TO_PHRASE](state, action) {
    const phrases = state.getIn(['data', 'phrases']);
    const newPhrases = phrases.update(
      phrases.findIndex(phrase => phrase.get('id') === action.payload.phraseId),
      phrase => {
        const newNotes = phrase.get('notes').push(action.payload.note);
        // side-effect
        savePhraseNotes(action.payload.phraseId, newNotes.toJS());
        return phrase.set('notes', newNotes);
      }
    );
    return state.setIn(['data', 'phrases'], newPhrases);
  },
  [TOGGLE_ALL_PHRASE](state, action) {
    const selectedPhraseIds = (
      state.getIn(['ui', 'selectedPhraseIds']).isEmpty() ?
      action.payload.phraseIds :
      immutable.fromJS([])
    );
    return state.setIn(['ui', 'selectedPhraseIds'], selectedPhraseIds);
  },
  [SELECT_ONE_PHRASE](state, action) {
    const selectedPhraseIds = state.getIn(['ui', 'selectedPhraseIds']);
    const selectedPhraseIdIndex = selectedPhraseIds.findIndex(id => id === action.payload.phraseId);
    const newSelectedPhraseIds = (
      selectedPhraseIdIndex > -1 ?
      selectedPhraseIds.delete(selectedPhraseIdIndex) :
      selectedPhraseIds.push(action.payload.phraseId)
    );
    return state.setIn(['ui', 'selectedPhraseIds'], newSelectedPhraseIds);
  },
  [HIDE_SELECTED_PHRASE](state) {
    const phrases = state.getIn(['data', 'phrases']);
    return state.withMutations(state => {
      state.getIn(['ui', 'selectedPhraseIds']).forEach(id => {
        const index = phrases.findIndex(phrase => phrase.get('id') === id);
        state.updateIn(['data', 'phrases', index], phrase => phrase.set('isVisible', false));
      });
    });
  },
  [SET_SELECTED_PHRASE_VISIBLE](state) {
    const phrases = state.getIn(['data', 'phrases']);
    return state.withMutations(state => {
      state.getIn(['ui', 'selectedPhraseIds']).forEach(id => {
        const index = phrases.findIndex(phrase => phrase.get('id') === id);
        state.updateIn(['data', 'phrases', index], phrase => phrase.set('isVisible', true));
      });
    });
  },
  [UPDATE_DISPLAYING_PHRASE_TYPE](state, action) {
    return state.setIn(['ui', 'displayingPhraseType'], action.payload.phraseType);
  },
  [UPDATE_FILTER_KEYWORD](state, action) {
    return state.setIn(['ui', 'filterKeyword'], action.payload.keyword);
  }
});
