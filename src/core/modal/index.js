import { createReducer } from 'src/utils';
const SHOW_ADD_NOTE_MODAL = 'SHOW_ADD_NOTE_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

function showAddNoteModal(phraseId) {
  return {
    type: SHOW_ADD_NOTE_MODAL,
    payload: {
      phraseId
    }
  };
}

function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export const modalActions = {
  showAddNoteModal,
  closeModal,
};

const INITIAL_STATE = {
  ui: {
    isOpen: false,
  },
  data: {
    phraseId: null,
  }
};


export const modalReducer = createReducer(INITIAL_STATE, {
  [SHOW_ADD_NOTE_MODAL](state, action) {
    return {
      ui: {
        isOpen: true,
      },
      data: {
        phraseId: action.payload.phraseId
      }
    };
  },
  [CLOSE_MODAL](state) {
    return {
      ...state,
      ui: {
        isOpen: false,
      }
    };
  }
});
