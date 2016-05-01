import {
  ADD_NOTE_TO_PHRASE,
  TOGGLE_ALL_PHRASE,
  SELECT_ONE_PHRASE,
  HIDE_SELECTED_PHRASE,
  UPDATE_DISPLAYING_PHRASE_TYPE,
  SET_SELECTED_PHRASE_VISIBLE,
  UPDATE_FILTER_KEYWORD,
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

export function hideSelectedPhrase() {
  return {
    type: HIDE_SELECTED_PHRASE,
  };
}

export function setVisibleButtonClick() {
  return {
    type: SET_SELECTED_PHRASE_VISIBLE,
  };
}

export function updateDisplayingPhraseType(phraseType) {
  return {
    type: UPDATE_DISPLAYING_PHRASE_TYPE,
    payload: {
      phraseType
    }
  };
}

export function updateFilterKeyword(keyword) {
  return {
    type: UPDATE_FILTER_KEYWORD,
    payload: {
      keyword
    }
  };
}
