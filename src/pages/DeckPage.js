import React from 'react';
import { useParams } from 'react-router-dom';
import Deck from '../components/Deck/Deck';
import * as API from '../api/api';

const DeckPage = () => {
  const { id } = useParams();
  const deck = API.getDeck(id);

  return (
    <>
      <Deck title={deck.title} showLink={false} key={id} />
    </>
  );
};

export default DeckPage;
