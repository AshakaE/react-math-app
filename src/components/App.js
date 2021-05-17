import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [product, setProduct] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleClick = (buttonName) => {
    const final = calculate(product, buttonName);
    setProduct(final);
  };

  const { total, next, operation } = product;

  return (
    <div className="flex flex-col justify-center w-[700px] m-auto mt-10">
      <Display
        className="flex w-[700px] justify-end"
        result={`${total} ${operation} ${next}`}
      />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
