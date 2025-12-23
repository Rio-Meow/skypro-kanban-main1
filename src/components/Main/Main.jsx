import React, { useState, useEffect } from 'react';
import { cardList } from '../../data.js';
import Column from '../Column/Column'; 
import Card from '../Card/Card';  

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const getCardsByStatus = (status) => {
    return cards.filter(card => card.status === status);
  };

  const getThemeClass = (theme) => {
    switch (theme) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_gray';
    }
  };

  if (isLoading) {
    return (
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content loading">
              <div className="loading__content">
                <p className="loading__text">Данные загружаются...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map(status => (
              <Column
                key={status}
                title={status}
                cards={getCardsByStatus(status)}
                getThemeClass={getThemeClass}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;