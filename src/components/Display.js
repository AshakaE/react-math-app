import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="flex w-[700px] justify-end bg-gray-600 h-[100px] text-white font-bold pt-8 pr-5 text-5xl">{result}</div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
