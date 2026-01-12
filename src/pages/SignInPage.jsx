import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${theme.colors.bgMain};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.container};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.containerMobile};
  }
`;

const Modal = styled.div`
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: ${theme.spacing.borderRadius.large};
  border: 0.7px solid ${theme.colors.border};
  box-shadow: ${theme.shadows.small};
  
  @media (max-width: 375px) {
    padding: 0 16px;
    border: none;
    box-shadow: none;
  }
`;

const ModalTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  
  h2 {
    font-size: ${theme.fonts.sizes.lg};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 30px;
    letter-spacing: -0.6px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: ${theme.spacing.borderRadius.medium};
  background-color: transparent;
  border: 0.7px solid ${theme.colors.borderLight};
  outline: none;
  padding: 10px 8px;
  font-size: ${theme.fonts.sizes.sm};
  line-height: 21px;
  color: ${theme.colors.textPrimary};
  margin-bottom: 7px;
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
    font-weight: ${theme.fonts.weights.regular};
  }
`;

const Button = styled.button`
  width: 100%;
  height: ${theme.spacing.button};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.spacing.borderRadius.small};
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
  
  @media (max-width: 375px) {
    height: ${theme.spacing.buttonMobile};
  }
`;

const FormGroup = styled.div`
  text-align: center;
  
  p {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.sm};
    font-weight: ${theme.fonts.weights.regular};
    line-height: 150%;
    margin-bottom: 5px;
  }
  
  a {
    color: ${theme.colors.textSecondary};
    font-size: ${theme.fonts.sizes.sm};
    font-weight: ${theme.fonts.weights.regular};
    text-decoration: underline;
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

function SignInPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Вход</h2>
            </ModalTitle>
            <Form onSubmit={handleSubmit}>
              <Input 
                type="email" 
                name="email" 
                placeholder="Эл. почта"
                required
              />
              <Input 
                type="password" 
                name="password" 
                placeholder="Пароль"
                required
              />
              <Button type="submit" className="_hover01">
                <Link to="/" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}>
                  Войти
                </Link>
              </Button>
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/signup">Регистрируйтесь здесь</Link>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default SignInPage;