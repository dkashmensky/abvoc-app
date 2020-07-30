import React from 'react';
import { useParams } from 'react-router-dom';
import Deck from '../components/Deck/Deck';
import Button from '../components/Button/Button';
import * as API from '../api/api';
import ElementsSearch from '../components/ElementsSearch/ElementsSearch';

const DeckPage = () => {
  const { id } = useParams();
  const deck = API.getDeck(id);

  return (
    <>
      <Deck title={deck.title} showLink={false} key={id} />
      <Button name="TRAIN" type="dark" size="large" />
      <ElementsSearch type="record" />
    </>
  );
};

export default DeckPage;
