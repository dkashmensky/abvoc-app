/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { placeholder, onChange, forwardedRef } = props;

  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      ref={forwardedRef}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.object,
};

Input.defaultProps = {
  placeholder: '...type here',
  onChange: () => {},
  forwardedRef: {},
};

export default Input;
