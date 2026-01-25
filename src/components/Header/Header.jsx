import { useNavigate, useLocation } from "react-router-dom";
import { PopUser } from "../PopUser/PopUser";
import { useState, useContext } from "react";
import {
  HeaderStyle,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  PopUserOverlay,
} from "../Header/Header.styled";

import { AuthContext } from "../../context/AuthContext";

export const Header = () => {
  const location = useLocation();

  const [isPopUserVisible, setIsPopUserVisible] = useState(false);

  const { user, logout } = useContext(AuthContext);

  const togglePopUserVisibility = () => {
    setIsPopUserVisible(!isPopUserVisible);
  };

  const closePopUser = () => {
    setIsPopUserVisible(false);
  };

  const navigate = useNavigate();

  const openPopNewCardModal = () => {
    navigate("/new-card");
  };

  const userName = user?.name || "Пользователь";

  return (
    <HeaderStyle>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew" onClick={openPopNewCardModal}>
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser onClick={togglePopUserVisibility}>
              {userName}
            </HeaderUser>

            {isPopUserVisible && location.pathname !== "/exit" && (
              <PopUserOverlay onClick={closePopUser}>
                <div onClick={(e) => e.stopPropagation()}>
                  <PopUser
                    $isVisible={isPopUserVisible}
                    onLogout={logout}
                    onClose={closePopUser}
                  />
                </div>
              </PopUserOverlay>
            )}
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderStyle>
  );
};
