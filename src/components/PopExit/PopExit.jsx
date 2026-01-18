import { useNavigate } from "react-router-dom";
import {
  PopExitStyle,
  PopExitContainer,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitYesButton,
  PopExitNoButton,
} from "../PopExit/PopExit.styled";

export const PopExit = ({ setIsAuth, $isVisible }) => {
  const navigate = useNavigate();

  const handleYesExit = (e) => {
    e.preventDefault();
    setIsAuth(false);
    navigate("/sign-in");
  };

  const handleNoExit = () => {
    navigate("/");
  };

  return (
    <PopExitStyle id="popExit" $isVisible={$isVisible}>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYesButton
                type="button"
                id="exitYes"
                onClick={handleYesExit}
              >
                Да, выйти
              </PopExitYesButton>
              <PopExitNoButton type="button" id="exitNo" onClick={handleNoExit}>
                Нет, остаться
              </PopExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitStyle>
  );
};
