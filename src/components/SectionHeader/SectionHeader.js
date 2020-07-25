import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.scss';

const SectionHeader = (props) => {
  const { title } = props;

  return (
    <>
      <h1 className="header">{title}</h1>
    </>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

SectionHeader.defaultProps = {
  title: 'This is a header',
};

export default SectionHeader;
