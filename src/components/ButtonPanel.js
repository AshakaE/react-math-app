import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="flex w-[700px] h-[100px] justify-around">
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="+/-" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] h-[100px] justify-around">
      <Button className="h-[100px]" name="7" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="8" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="9" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="*" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] h-[100px] justify-around">
      <Button className="h-[100px]" name="4" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="5" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="6" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="-" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] h-[100px] justify-around">
      <Button className="h-[100px]" name="1" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="2" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="3" clickHandler={clickHandler} />
      <Button className="h-[100px]" name="+" clickHandler={clickHandler} />
    </div>
    <div className="flex w-[700px] h-[100px] justify-between">
      <div className="flex w-2/4 justify-around">
        <Button className="h-[100px]" name="0" clickHandler={clickHandler} />
      </div>
      <div className="flex w-2/4 justify-around">
        <Button className="h-[100px]" name="." clickHandler={clickHandler} />
        <Button className="h-[100px]" name="=" clickHandler={clickHandler} />
      </div>
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
