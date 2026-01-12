import { useNavigate } from "react-router-dom";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../PopUser/PopUser.styled";

export const PopUser = ({ $isVisible }) => {
  const navigate = useNavigate();

  const openExitModal = () => {
    navigate("/exit");
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userName = userInfo?.name || "Пользователь";
  const userLogin = userInfo?.login || "Эл. почта";

  return (
    <PopUserContainer $isVisible={$isVisible} id="user-set-target">
      <PopUserName>{userName}</PopUserName>
      <PopUserMail>{userLogin}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button" onClick={openExitModal}>
        Выйти
      </PopUserButton>
    </PopUserContainer>
  );
};
