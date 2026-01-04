import React, { useState, useEffect } from 'react';
import { cardList } from '../../data.js';
import {
  MainContainer,
  MainBlock,
  MainContent,
  MainColumn,
  ColumnTitle,
  CardsContainer,
  CardItem,
  CardWrapper,
  CardGroup,
  CardTheme,
  ThemeText,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
  LoadingContainer,
  LoadingContent,
  LoadingText
} from './Main.styled';

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

  if (isLoading) {
    return (
      <MainContainer>
        <div className="container">
          <MainBlock>
            <MainContent as="div" className="loading">
              <LoadingContainer>
                <LoadingContent>
                  <LoadingText>Данные загружаются...</LoadingText>
                </LoadingContent>
              </LoadingContainer>
            </MainContent>
          </MainBlock>
        </div>
      </MainContainer>
    );
  }

  const statuses = [
    { title: "Без статуса", key: "Без статуса" },
    { title: "Нужно сделать", key: "Нужно сделать" },
    { title: "В работе", key: "В работе" },
    { title: "Тестирование", key: "Тестирование" },
    { title: "Готово", key: "Готово" }
  ];

  return (
    <MainContainer>
      <div className="container">
        <MainBlock>
          <MainContent>
            {statuses.map((status) => (
              <MainColumn key={status.key}>
                <ColumnTitle>
                  <p>{status.title}</p>
                </ColumnTitle>
                <CardsContainer>
                  {getCardsByStatus(status.key).map(card => (
                    <CardItem key={card.id}>
                      <CardWrapper>
                        <CardGroup>
                          <CardTheme $theme={card.theme}>
                            <ThemeText>{card.theme}</ThemeText>
                          </CardTheme>
                          <a href="#popBrowse">
                            <CardButton>
                              <div></div>
                              <div></div>
                              <div></div>
                            </CardButton>
                          </a>
                        </CardGroup>
                        <CardContent>
                          <a href="#">
                            <CardTitle>{card.title}</CardTitle>
                          </a>
                          <CardDate>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                              <g clipPath="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_415">
                                  <rect width="13" height="13" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            <p>{card.date}</p>
                          </CardDate>
                        </CardContent>
                      </CardWrapper>
                    </CardItem>
                  ))}
                </CardsContainer>
              </MainColumn>
            ))}
          </MainContent>
        </MainBlock>
      </div>
    </MainContainer>
  );
}

export default Main;