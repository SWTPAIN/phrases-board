import _ from 'lodash';
import immutable from 'immutable';
import { createReducer } from 'src/utils';
import {
  ADD_NOTE_TO_PHRASE,
  SELECT_ALL_PHRASE_NUMBER
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
  [SELECT_ALL_PHRASE_NUMBER](state) {
    return state.setIn(['ui', 'isAllPhraseSelected'], !state.getIn(['ui', 'isAllPhraseSelected']));
  }
});
