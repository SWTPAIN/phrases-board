import { createReducer } from 'src/utils';

import {
  ADD_NOTE_TO_PHRASE
} from './action-types';


export const INITIAL_STATE = {
  phrase: [
    {
      id: 1,
      notes: []
    },
    {
      id: 2,
      notes: []
    }
  ]
};


export const taskReducer = createReducer(INITIAL_STATE, {
  [ADD_NOTE_TO_PHRASE](state, action) {
    debugger;
    return {
      notes: [ ...state.notes, action.payload ]
    };
  }
});
