import { createReducer } from 'src/utils';

import {
  ADD_NOTE_TO_PHRASE
} from './action-types';


export const INITIAL_STATE = {
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
    },
  ]
};


export const phraseReducer = createReducer(INITIAL_STATE, {
  [ADD_NOTE_TO_PHRASE](state, action) {
    debugger;
    return {
      phrases: [1, 2, 3]
    };
  }
});
