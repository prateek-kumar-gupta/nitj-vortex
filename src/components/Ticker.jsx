import React from 'react';

export default function Ticker() {
  const items = [
    'ARENA-X',
    'BGMI SHOWDOWN',
    'CAMPUS UNLEASHED',
    'KREO AERO KLASH',
    'TEZ FFMIC SPRINGS'
  ];

  return (
    <section className="ticker">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
}
