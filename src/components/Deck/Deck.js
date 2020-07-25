import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';
import * as API from '../../api/api';
import './Deck.scss';

const Deck = (props) => {
  const {
    id,
    title,
    showLink,
    onDeckDelete,
  } = props;

  const deleteDeck = () => {
    API.deleteDeck(id);
    onDeckDelete();
  };

  return (
    <section>
      <SectionHeader title={title} />
      <div className="buttons-wrapper">
        <Link to={showLink ? `/deck/${id}` : '/decks'}>
          <Button name={showLink ? 'View deck' : 'Back'} type="light" />
        </Link>
        <Button name="Delete" type="light" onClick={deleteDeck} />
      </div>
    </section>
  );
};

Deck.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  showLink: PropTypes.bool,
  onDeckDelete: PropTypes.func,
};

Deck.defaultProps = {
  title: 'Deck Title',
  id: '0',
  showLink: true,
  onDeckDelete: () => {},
};

export default Deck;
