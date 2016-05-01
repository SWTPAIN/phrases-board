import {
  ADD_NOTE_TO_PHRASE,
  TOGGLE_ALL_PHRASE,
  SELECT_ONE_PHRASE,
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
  return (dispatch, getState) =>
    dispatch({
      type: TOGGLE_ALL_PHRASE,
      payload: {
        phraseIds: getState().getIn(['phrase', 'data', 'phrases']).map(phrase =>
          phrase.get('id')
        )
      }
    });
}

export function selectOnePhrase(phraseId) {
  return dispatch => {
    dispatch({
      type: SELECT_ONE_PHRASE,
      payload: {
        phraseId
      }
    });
  };
}
