import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/api';
import Deck from '../Deck/Deck';
import CreateDeck from '../CreateDeck/CreateDeck';
import './DecksList.scss';

const DecksList = (props) => {
  const { searchString, onCreateNewDeck } = props;
  const [decks, setDecks] = useState(API.getDecks(searchString.toLowerCase()));

  useEffect(() => {
    setDecks(API.getDecks(searchString.toLowerCase()));
  }, [searchString]);

  const updateDecksOnCreate = () => {
    setDecks(API.getDecks(searchString.toLowerCase()));
    onCreateNewDeck();
  };

  const updateDecksOnDelete = () => {
    setDecks(API.getDecks(searchString.toLowerCase()));
  };

  return (
    <>
      {decks.map((deck) => (
        <Deck
          title={deck.title}
          key={deck.id}
          id={deck.id}
          onDeckDelete={updateDecksOnDelete}
          showLink
        />
      ))}
      {!decks.length && searchString ? (<CreateDeck title={searchString} onCreateNewDeck={updateDecksOnCreate} />) : ''}
    </>
  );
};

DecksList.propTypes = {
  searchString: PropTypes.string,
  onCreateNewDeck: PropTypes.func,
};

DecksList.defaultProps = {
  searchString: '',
  onCreateNewDeck: () => {},
};

export default DecksList;
