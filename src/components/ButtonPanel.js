import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="flex w-[700px] justify-around">
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="+/-" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] justify-around">
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="*" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] justify-around">
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] justify-around">
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] justify-around">
      <div className="flex w-3/5 justify-around">
        <Button name="0" clickHandler={clickHandler} />
        <Button name="." clickHandler={clickHandler} />
      </div>
      <Button name="=" clickHandler={clickHandler} />
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
