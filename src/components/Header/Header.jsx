import { useNavigate } from "react-router-dom";
import { PopUser } from "../PopUser/PopUser";
import { useState } from "react";
import {
  HeaderStyle,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
  PopUserOverlay,
} from "../Header/Header.styled";

export const Header = ({ setIsAuth }) => {
  const [isPopUserVisible, setIsPopUserVisible] = useState(false);

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

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";

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

            {isPopUserVisible &&
              location.pathname !== "/exit" && ( 
                <PopUserOverlay onClick={closePopUser}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <PopUser
                      $isVisible={isPopUserVisible}
                      setIsAuth={setIsAuth}
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
