import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Страница не найдена</NotFoundText>
    </NotFoundContainer>
  );
};
