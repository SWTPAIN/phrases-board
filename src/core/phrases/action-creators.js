import {
  ADD_NOTE_TO_PHRASE,
  SELECT_ALL_PHRASE_NUMBER
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

export function selectAllPhraseNumber() {
  return {
    type: SELECT_ALL_PHRASE_NUMBER,
  };
}
