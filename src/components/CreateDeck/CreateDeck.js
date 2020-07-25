import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import * as API from '../../api/api';

const CreateDeck = (props) => {
  const { title, onCreateNewDeck } = props;

  const createDeck = () => {
    API.createDeck(title);
    onCreateNewDeck();
  };

  return (
    <section>
      <p>
        Oops, no
        &quot;
        { title }
        &quot;
        -containing decks found
      </p>
      <Button
        name={`Create "${title}" deck`}
        type="light"
        onClick={createDeck}
      />
    </section>
  );
};

CreateDeck.propTypes = {
  title: PropTypes.string,
  onCreateNewDeck: PropTypes.func,
};

CreateDeck.defaultProps = {
  title: '',
  onCreateNewDeck: () => {},
};

export default CreateDeck;
