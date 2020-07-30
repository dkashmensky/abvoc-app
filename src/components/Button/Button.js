import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { name, type, onClick, size } = props;

  return (
    <div>
      <button type="button" className={`button button--${type}${size ? ` button--${size}` : ''}`} onClick={onClick}>{ name }</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: 'Button',
  type: 'light',
  size: '',
  onClick: () => {},
};

export default Button;
