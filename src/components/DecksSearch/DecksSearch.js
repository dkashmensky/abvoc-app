import React, { useState, useRef } from 'react';
import './DecksSearch.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import Input from '../Input/Input';
import DecksList from '../DecksList/DecksList';

const DecksSearch = () => {
  const title = 'To search or create decks...';
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
      <DecksList searchString={searchString} onCreateNewDeck={clearSearch} />
    </>
  );
};

export default DecksSearch;
