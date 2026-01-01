import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cardList } from '../data.js';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const MainContainer = styled.main`
  width: 100%;
  background-color: ${theme.colors.bgSecondary};
  min-height: calc(100vh - 70px);
  padding: 0;
  margin: 0;
`;

const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;
  padding: 0;
  margin: 0;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

const MainColumn = styled.div`
  flex: 1;
  min-width: 0;
  margin: 0;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 0 0 15px 0;

  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.sm};
    font-weight: ${theme.fonts.weights.semibold};
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  min-height: 150px;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 10px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${theme.colors.bgSecondary};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.textSecondary};
      border-radius: 3px;
    }
  }
`;

const CardItem = styled.div`
  margin-bottom: 10px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    flex: 0 0 auto;
    margin-bottom: 0;
  }
`;

const CardWrapper = styled.div`
  width: ${theme.spacing.cardWidth};
  height: ${theme.spacing.cardHeight};
  background-color: ${theme.colors.bgCard};
  border-radius: ${theme.spacing.borderRadius.large};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: ${theme.spacing.card};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: ${theme.spacing.cardWidth};
    height: ${theme.spacing.cardHeight};
  }
`;

const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: ${theme.spacing.borderRadius.circle};
  background-color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return theme.colors.orangeBg;
      case 'Research': return theme.colors.greenBg;
      case 'Copywriting': return theme.colors.purpleBg;
      default: return theme.colors.grayBg;
    }
  }};
  color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return theme.colors.orangeText;
      case 'Research': return theme.colors.greenText;
      case 'Copywriting': return theme.colors.purpleText;
      default: return theme.colors.grayText;
    }
  }};
`;

const ThemeText = styled.p`
  font-size: ${theme.fonts.sizes.xs};
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 10px;
  color: inherit;
  margin: 0;
  white-space: nowrap;
`;

const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;
  
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${theme.colors.textSecondary};
  }
`;

const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  line-height: 18px;
  color: ${theme.colors.textPrimary};
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  svg {
    width: 13px;
    height: 13px;
    
    path {
      stroke: ${theme.colors.textSecondary};
    }
  }
  
  p {
    margin-left: 6px;
    font-size: ${theme.fonts.sizes.xs};
    line-height: 13px;
    color: ${theme.colors.textSecondary};
    letter-spacing: 0.2px;
    margin: 0;
  }
`;

const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-right: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.primary};
  position: relative;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${theme.colors.primary};
    border-bottom: 1.9px solid ${theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color 0.3s ease;
  }
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleCardClick = (cardId) => {
    navigate(`/card/${cardId}`);
  };

  const handleNewCard = () => {
    navigate('/card/new');
  };

  const handleExit = () => {
    navigate('/exit');
  };

  const statuses = [
    { title: "Без статуса", key: "Без статуса" },
    { title: "Нужно сделать", key: "Нужно сделать" },
    { title: "В работе", key: "В работе" },
    { title: "Тестирование", key: "Тестирование" },
    { title: "Готово", key: "Готово" }
  ];

  if (isLoading) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
              <p style={{ color: theme.colors.primary, fontSize: '20px', fontWeight: '600', animation: 'pulse 1.5s infinite' }}>
                Данные загружаются...
              </p>
            </div>
          </MainBlock>
        </Container>
      </MainContainer>
    );
  }

  return (
    <>
      <Header>
        <Container>
          <HeaderBlock>
            <HeaderLogo>
              <img src="images/logo.png" alt="logo" />
            </HeaderLogo>
            <HeaderNav>
              <HeaderButton onClick={handleNewCard}>
                Создать новую задачу
              </HeaderButton>
              <HeaderUser onClick={handleExit}>
                Ivan Ivanov
              </HeaderUser>
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </Header>
      
      <MainContainer>
        <Container>
          <MainBlock>
            <MainContent>
              {statuses.map((status) => (
                <MainColumn key={status.key}>
                  <ColumnTitle>
                    <p>{status.title}</p>
                  </ColumnTitle>
                  <CardsContainer>
                    {getCardsByStatus(status.key).map(card => (
                      <CardItem key={card.id} onClick={() => handleCardClick(card.id)}>
                        <CardWrapper>
                          <CardGroup>
                            <CardTheme $theme={card.theme}>
                              <ThemeText>{card.theme}</ThemeText>
                            </CardTheme>
                            <CardButton onClick={(e) => {
                              e.stopPropagation();
                              handleCardClick(card.id);
                            }}>
                              <div></div>
                              <div></div>
                              <div></div>
                            </CardButton>
                          </CardGroup>
                          <CardContent>
                            <CardTitle>{card.title}</CardTitle>
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
        </Container>
      </MainContainer>
    </>
  );
}

export default MainPage;