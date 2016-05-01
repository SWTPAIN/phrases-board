import {
  ADD_NOTE_TO_PHRASE
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
