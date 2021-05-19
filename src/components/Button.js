import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => (
  <button
    className={`w-1/4 border border-gray-400 text-2xl focus:outline-none ${color} ${wide}`}
    type="button"
    onClick={() => clickHandler(name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'gray',
  wide: '',
};
export default Button;
