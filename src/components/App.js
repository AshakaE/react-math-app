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
    <div>
      <Display result={`${total} ${operation} ${next}`} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
