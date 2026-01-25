import { Link } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundText,
  NotFoundButton,
} from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        
        <NotFoundTitle>404</NotFoundTitle>
        
        <NotFoundSubtitle>
          Страница не найдена
        </NotFoundSubtitle>
        
        <NotFoundText>
          Возможно, вы перешли по устаревшей ссылке или 
          ввели неверный адрес.
        </NotFoundText>
        
        <NotFoundButton as={Link} to="/">
          Вернуться на главную
        </NotFoundButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};