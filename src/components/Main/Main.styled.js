import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  
  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return '#FFE4C2';
      case 'Research': return '#B4FDD1';
      case 'Copywriting': return '#E9D4FF';
      default: return '#94A6BE';
    }
  }};
  color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return '#FF6D00';
      case 'Research': return '#06B16E';
      case 'Copywriting': return '#9A48F1';
      default: return '#FFFFFF';
    }
  }};
`;

export const ThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: inherit;
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  svg {
    width: 13px;
  }
  
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
`;

export const LoadingContent = styled.div`
  text-align: center;
`;

export const LoadingText = styled.p`
  color: #565EEF;
  font-size: 20px;
  font-weight: 600;
  animation: ${pulse} 1.5s infinite;
`;