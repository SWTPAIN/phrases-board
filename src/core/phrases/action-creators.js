import {
  ADD_NOTE_TO_PHRASE
} from './action-types';


export function addNoteToPhrase(phraseId, note) {
  return {
    type: ADD_NOTE_TO_PHRASE,
    payload: {
      phraseId,
      note
    }
  };
}
