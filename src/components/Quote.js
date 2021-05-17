import React from 'react';
import Navbar from './Navbar';

const Quote = () => (
  <>
    <div>
      <Navbar />
    </div>
    <div className="m-auto px-56 mt-60 text-center">
      <p className="text-3xl font-light italic">Be the chief but never the lord.</p>
      <h4 className="text-4xl pt-3">Lao Tzu</h4>
    </div>
  </>
);

export default Quote;
