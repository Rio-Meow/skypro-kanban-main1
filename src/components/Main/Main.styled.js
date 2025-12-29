import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

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
  background-color: ${theme.colors.bgSecondary};
  min-height: calc(100vh - ${theme.spacing.headerHeight});
  padding: 0;
  margin: 0;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${theme.spacing.section};
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;
  padding: 0;
  margin: 0;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const MainColumn = styled.div`
  flex: 1;
  min-width: 0;
  margin: 0;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.div`
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

export const CardsContainer = styled.div`
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

export const CardItem = styled.div`
  margin-bottom: 10px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    flex: 0 0 auto;
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled.div`
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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: ${theme.spacing.cardWidth};
    height: ${theme.spacing.cardHeight};
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

export const ThemeText = styled.p`
  font-size: ${theme.fonts.sizes.xs};
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 10px;
  color: inherit;
  margin: 0;
  white-space: nowrap;
`;

export const CardButton = styled.div`
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

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
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

export const CardDate = styled.div`
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
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.sizes.lg};
  font-weight: ${theme.fonts.weights.semibold};
  animation: ${pulse} 1.5s infinite;
  margin: 0;
`;