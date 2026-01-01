import React from 'react';
import Card from '../Card/Card';
import {
  MainColumn,
  ColumnTitle,
  CardsContainer
} from '../Main/Main.styled';

function Column({ title = '', cards = [] }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards && cards.length > 0 ? (
          cards.map(card => (
            <Card key={card.id} card={card} />
          ))
        ) : (
          <div style={{ padding: '20px', color: '#94A6BE', textAlign: 'center' }}>
            Нет задач
          </div>
        )}
      </CardsContainer>
    </MainColumn>
  );
}
						
export default Column;