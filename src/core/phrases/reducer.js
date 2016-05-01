import immutable from 'immutable';
import { createReducer } from 'src/utils';
import {
  ADD_NOTE_TO_PHRASE,
  TOGGLE_ALL_PHRASE,
  SELECT_ONE_PHRASE,
  UNSELECT_ALL_PHRASE
} from './action-types';

export const INITIAL_STATE = immutable.fromJS({
  data: {
    phrases: [
      {
        id: 1,
        context: 'Start a petition',
        value: `
          <p>
            This is some <strong>random html code</strong>
          </p>
        `,
        notes: []
      },
      {
        id: 2,
        context: 'Start a petition',
        value: `
          <p>
            CEO <strong>random html coderrrrr</strong>
          </p>
        `,
        notes: []
      }
    ]
  },
  ui: {
    isAllPhraseSelected: false,
    selectedPhraseIds: []
  }
});
export const phraseReducer = createReducer(INITIAL_STATE, {
  [ADD_NOTE_TO_PHRASE](state, action) {
    const phrases = state.getIn(['data', 'phrases']);
    return state.setIn(['data', 'phrases'], phrases.update(
      phrases.findIndex(phrase => phrase.get('id') === action.payload.phraseId),
      phrase => phrase.set('notes', phrase.get('notes').push(action.payload.note))
    ));
  },
  [TOGGLE_ALL_PHRASE](state) {
    return state.setIn(['ui', 'isAllPhraseSelected'], !state.getIn(['ui', 'isAllPhraseSelected']));
  },
  [UNSELECT_ALL_PHRASE](state) {
    return state.setIn(['ui', 'isAllPhraseSelected'], false);
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
  }
});
