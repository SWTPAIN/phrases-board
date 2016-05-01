import {
  ADD_NOTE_TO_PHRASE,
  TOGGLE_ALL_PHRASE,
  SELECT_ONE_PHRASE,
  UNSELECT_ALL_PHRASE,
} from './action-types';
import {
  modalActions
} from '../modal';

export function addNoteToPhrase(phraseId, note) {
  return dispatch => {
    dispatch({
      type: ADD_NOTE_TO_PHRASE,
      payload: {
        phraseId,
        note
      }
    });
    dispatch(modalActions.closeModal());
  };
}

export function toggleAllPhrase() {
  return {
    type: TOGGLE_ALL_PHRASE,
  };
}

export function unselectAllPhrase() {
  return {
    type: UNSELECT_ALL_PHRASE,
  };
}

export function selectOnePhrase(phraseId) {
  return dispatch => {
    dispatch(unselectAllPhrase());
    dispatch({
      type: SELECT_ONE_PHRASE,
      payload: {
        phraseId
      }
    });
  };
}
