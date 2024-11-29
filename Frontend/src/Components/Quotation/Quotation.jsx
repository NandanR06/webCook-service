import React, { useState, useEffect } from 'react';
import './Quotation.css'; // Add your CSS file for styling

const quotes = [
  "Innovating Today, Empowering Tomorrow.",
  "At WebCook Software Solutions, we deliver innovative web and software solutions that empower businesses to succeed in the digital world. Our expert team helps you build a strong online presence and stay ahead in a competitive market.",
  "Crafting Digital Solutions, Shaping Future Success.",
  "At WebCook Software Solutions, we provide innovative web and software development services alongside comprehensive training programs. Our expert team helps businesses build a strong digital presence while empowering aspiring developers with the skills they need to succeed in the tech industry."
];

const Quotation = ({ quotes, interval = 5000 }) => {
  const [currentQuoteIndex1, setCurrentQuoteIndex1] = useState(0);
  const [currentQuoteIndex2, setCurrentQuoteIndex2] = useState(1);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex1((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentQuoteIndex2((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(quoteInterval);
  }, [quotes.length, interval]);

  return (
    <div className="quotations">
      <div className="quotation">
        <p>{quotes[currentQuoteIndex1]}</p>
      </div>
      <div className="quotation">
        <p>{quotes[currentQuoteIndex2]}</p>
      </div>
    </div>
  );
};

const App = () => (
  <div className="App">
    <h1>WebCooks</h1>
    <Quotation quotes={quotes} interval={5000} /> {/* Change quotes every 5 seconds */}
  </div>
);

export default App;
