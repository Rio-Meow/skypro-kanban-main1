import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.bgMain};
  padding: 20px;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const ErrorMessage = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  margin: 20px 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ErrorDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
  }
`;

const Illustration = styled.div`
  width: 300px;
  height: 200px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.purple}20);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: "404";
    font-size: 80px;
    font-weight: 700;
    color: ${theme.colors.primary}30;
    position: absolute;
  }

  &:after {
    content: "🚧";
    font-size: 60px;
    position: relative;
    z-index: 1;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Illustration />
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Страница не найдена</ErrorMessage>
      <ErrorDescription>
        К сожалению, запрашиваемая страница не существует или была перемещена. 
        Возможно, вы перешли по неработающей ссылке или ввели неверный адрес.
      </ErrorDescription>
      <HomeButton to="/">
        Вернуться на главную
      </HomeButton>
    </NotFoundContainer>
  );
}

export default NotFoundPage;