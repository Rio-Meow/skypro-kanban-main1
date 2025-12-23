import React from 'react';
import Card from '../Card/Card';  

function Column({ title, cards, getThemeClass }) {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map(card => (
          <Card key={card.id} card={card} getThemeClass={getThemeClass} />
        ))}
      </div>
    </div>
  );
}

export default Column;