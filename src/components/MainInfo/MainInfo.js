import React, { useState } from 'react';
import './MainInfo.scss';
import Button from '../Button/Button';
import SectionHeader from '../SectionHeader/SectionHeader';
import * as API from '../../api/api';

const MainInfo = () => {
  const title = 'Abvoc';
  const [state, setState] = useState({
    decksTotal: 0,
    decksLearned: 0,
    recordsTotal: 0,
    recordsLearned: 0,
  });

  const resetApp = () => {
    API.resetApp();
  };

  return (
    <section>
      <SectionHeader title={title} />
      <p>
        { state.decksLearned }
        /
        { state.decksTotal }
        <span> decks learned</span>
      </p>
      <p>
        { state.recordsLearned }
        /
        { state.recordsTotal }
        <span> records learned</span>
      </p>
      <Button name="Reset" type="light" onClick={resetApp} />
    </section>
  );
};

export default MainInfo;
