import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderBlock = styled.div`
  height: ${theme.spacing.headerHeight};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled.button`
  width: 178px;
  height: ${theme.spacing.button};
  border-radius: ${theme.spacing.borderRadius.small};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  line-height: 1;
  margin-right: 20px;
  transition: background-color 0.3s ease;

  a {
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fonts.sizes.sm};
  line-height: 20px;
  color: ${theme.colors.primary};
  position: relative;
  transition: color 0.3s ease;
  
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

export const PopUserSet = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: ${theme.spacing.borderRadius.large};
  border: 0.7px solid ${theme.colors.borderLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  padding: 34px;
  text-align: center;
  z-index: 2;
  animation: fadeIn 0.3s ease;
`;

export const PopUserName = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.fonts.sizes.sm};
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fonts.sizes.sm};
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${theme.colors.bgSecondary};
    outline: none;
    appearance: none;
    
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${theme.colors.textSecondary};
      transition: 0.5s;
    }
    
    &:checked::before {
      left: 12px;
    }
  }
`;

export const ThemeButton = styled.button`
  width: 72px;
  height: ${theme.spacing.button};
  background: transparent;
  color: ${theme.colors.primary};
  border-radius: ${theme.spacing.borderRadius.small};
  border: 1px solid ${theme.colors.primary};
  font-size: ${theme.fonts.sizes.sm};
  font-weight: ${theme.fonts.weights.medium};
  transition: all 0.3s ease;
  
  a {
    color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: color 0.3s ease;
  }
`;