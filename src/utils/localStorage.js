import _ from 'lodash';
import data from 'json!../data.json';

const KEY = 'phrase-board-data';

export function savePhraseNotes(phraseId, notes) {
  localStorage.setItem(KEY + phraseId, JSON.stringify(notes));
}

export function getPhraseNotes(phraseId) {
  return JSON.parse(localStorage.getItem(KEY + phraseId)) || [];
}

export function getData() {
  return {
    phrases: _.map(data.phrases, phrase => ({
      ...phrase,
      notes: getPhraseNotes(phrase.id),
    }))
  };
}
