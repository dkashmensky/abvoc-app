import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './ElementsSearch.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import Input from '../Input/Input';
import DecksList from '../DecksList/DecksList';
import RecordsList from '../RecordsList/RecordsList';

const ElementsSearch = (props) => {
  const { type } = props;
  const title = `To search or create ${type}s...`;
  const [searchString, setSearchString] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const clearSearch = () => {
    inputRef.current.value = '';
    setSearchString('');
  };

  return (
    <>
      <section>
        <SectionHeader title={title} />
        <div className="search-wrapper">
          <Input onChange={handleChange} forwardedRef={inputRef} />
        </div>
      </section>
      {type === 'deck'
        ? <DecksList searchString={searchString} onCreateNewDeck={clearSearch} />
        : <RecordsList searchString={searchString} />}
    </>
  );
};

ElementsSearch.propTypes = {
  type: PropTypes.string,
};

ElementsSearch.defaultProps = {
  type: '',
};

export default ElementsSearch;
