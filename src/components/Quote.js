import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import getQuote from './getQuote';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuote().then((items) => {
      const random = Math.floor(Math.random() * items.length);
      const qday = items[random];
      if (quote === '') {
        setQuote(qday);
      }
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="m-auto px-56 mt-60 text-center">
        <div>
          <p className="text-4xl font-extralight italic">{quote.text}</p>
          <h4 className="text-3xl pt-3">{quote.author ?? 'Anonymous'}</h4>
        </div>
      </div>
    </>
  );
};

export default Quote;
