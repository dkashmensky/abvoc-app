const getNewId = (decks) => {
  if (!decks || !decks.length) {
    return '1';
  }

  decks.sort((a, b) => Number(b.id) - Number(a.id));
  return Number(decks[0].id) + 1;
};

export const resetApp = () => {
  localStorage.clear();
};

export const getDecks = (searchString) => {
  let decks = [];
  try {
    decks = JSON.parse(localStorage.getItem('data')).decks;
  } catch (e) {
    console.log('API error: ', e);
  }

  return decks.filter((deck) => deck.title.toLowerCase().includes(searchString));
};

export const getDeck = (id) => {
  const decks = getDecks('');
  return decks.find((deck) => deck.id === id);
};

export const createDeck = (name) => {
  let data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    data.decks.push({
      id: String(getNewId(data.decks)),
      title: name,
    });
  } else {
    data = {};
    data.decks = [{
      id: String(getNewId()),
      title: name,
    }];
  }

  localStorage.setItem('data', JSON.stringify(data));
};

export const deleteDeck = (id) => {
  const data = JSON.parse(localStorage.getItem('data'));
  const deckIndex = data.decks.findIndex((deck) => deck.id === id);
  if (deckIndex < 0) {
    return;
  }
  data.decks.splice(deckIndex, 1);
  localStorage.setItem('data', JSON.stringify(data));
};
