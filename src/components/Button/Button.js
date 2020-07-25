import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { name, type, onClick } = props;

  return (
    <div>
      <button type="button" className={`button button--${type}`} onClick={onClick}>{ name }</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  name: 'Button',
  type: 'light',
  onClick: () => {},
};

export default Button;
