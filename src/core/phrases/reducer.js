import _ from 'lodash';
import { createReducer } from 'src/utils';
import {
  ADD_NOTE_TO_PHRASE,
  SELECT_ALL_PHRASE_NUMBER
} from './action-types';


export const INITIAL_STATE = {
  data: {
    phrases: {
      1: {
        id: 1,
        context: 'Start a petition',
        value: `
          <p>
            This is some <strong>random html code</strong>
          </p>
        `,
        notes: []
      },
      2: {
        id: 2,
        context: 'Start a petition',
        value: `
          <p>
            CEO <strong>random html coderrrrr</strong>
          </p>
        `,
        notes: []
      },
    }
  },
  ui: {
    isAllPhraseSelected: false,
    selectedPhraseIds: []
  }
};


export const phraseReducer = createReducer(INITIAL_STATE, {
  [ADD_NOTE_TO_PHRASE](state, action) {
    return {
      ...state,
      data: _.merge(state.data, {}, {
        phrases: {
          [action.payload.phraseId]: {
            notes: [
              ...state.data.phrases[action.payload.phraseId].notes,
              action.payload.note
            ]
          }
        }
      })
    };
  },
  [SELECT_ALL_PHRASE_NUMBER](state) {
    return {
      ...state,
      ui: {
        ...state.ui,
        isAllPhraseSelected: true,
      }
    };
  }
});
