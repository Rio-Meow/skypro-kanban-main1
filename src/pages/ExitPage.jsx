import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ExitContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ExitBlock = styled.div`
  background-color: ${theme.colors.white};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.small};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const ButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

const ButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;

function ExitPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <ExitContainer>
      <ExitBlock>
        <Title>Выйти из аккаунта?</Title>
        <ButtonGroup>
          <ButtonYes onClick={handleExit}>Да, выйти</ButtonYes>
          <ButtonNo onClick={handleCancel}>Нет, остаться</ButtonNo>
        </ButtonGroup>
      </ExitBlock>
    </ExitContainer>
  );
}

export default ExitPage;