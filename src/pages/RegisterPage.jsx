import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.bgSecondary};
`;

const RegisterBlock = styled.div`
  background-color: ${theme.colors.white};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.small};
  
  @media (max-width: 375px) {
    padding: 30px 20px;
    border: none;
    box-shadow: none;
    max-width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0.7px solid ${theme.colors.borderLight};
  outline: none;
  padding: 12px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
  
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const FormGroup = styled.div`
  text-align: center;
  margin-top: 20px;
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const LoginLink = styled(Link)`
  color: ${theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && password) {
      login();
      navigate('/', { replace: true });
    }
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <Title>Регистрация</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">
            Зарегистрироваться
          </SubmitButton>
        </Form>
        <FormGroup>
          <p>Уже есть аккаунт?</p>
          <LoginLink to="/login">
            Войдите здесь
          </LoginLink>
        </FormGroup>
      </RegisterBlock>
    </RegisterContainer>
  );
}

export default RegisterPage;