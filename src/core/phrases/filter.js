function isKeywordInNotes(keyword, notes) {
  for (const note of notes) {
    if (note.match(new RegExp(keyword, 'i'))) {
      return true;
    }
  }
  return false;
}

export function filterPhrasesByDisplayingType(phrases, type) {
  if (type === 'visible') {
    return phrases.filter(phrase => {
      return phrase.get('isVisible');
    });
  } else if (type === 'hidden') {
    return phrases.filter(phrase => !phrase.get('isVisible'));
  } else {
    return phrases;
  }
}

export function filterPhrasesByKeyword(phrases, keyword) {
  if (keyword === '') {
    return phrases;
  }
  return phrases.filter(phrase => {
    if (phrase.get('id') === Number(keyword)) {
      return true;
    }
    if (phrase.get('context').match(new RegExp(`${keyword}`, 'i'))) {
      return true;
    }
    if (phrase.get('value').match(new RegExp(`${keyword}`, 'i'))) {
      return true;
    }
    if (isKeywordInNotes(keyword, phrase.get('notes').toJS())) {
      return true;
    }
    return false;
  });
}
