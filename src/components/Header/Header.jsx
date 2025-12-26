import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  ThemeButton
} from './Header.styled';

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserClick = (e) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self" rel="noreferrer">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser 
              href="#user-set-target" 
              className="_hover02"
              onClick={handleUserClick}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUserSet 
              $isOpen={isUserMenuOpen}
              id="user-set-target"
            >
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </PopUserTheme>
              <ThemeButton type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </ThemeButton>
            </PopUserSet>
          </HeaderNav>          
        </HeaderBlock>
      </div>      
    </HeaderContainer>
  );  
}
export default Header;