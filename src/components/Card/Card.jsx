import { useNavigate } from "react-router-dom";
import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate,
} from "../Card/Card.styled";

export const Card = ({ _id, topic, title, date }) => {
  let themeClass = "";
  switch (topic) {
    case "Web Design":
      themeClass = "orange";
      break;
    case "Research":
      themeClass = "green";
      break;
    case "Copywriting":
      themeClass = "purple";
      break;
  }

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${_id}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}.${month}.${year}`;
  };

  return (
    <CardsItem>
      <CardsCard id={`card-${_id}`}>
        <CardGroup>
          <CardTheme className={`_${themeClass}`}>
            <p className={`_${themeClass}`}>{topic}</p>
          </CardTheme>
          <>
            <CardBtn onClick={handleCardClick}>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </>
        </CardGroup>
        <CardContent>
          <div>
            <CardTitle>{title}</CardTitle>
          </div>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{formatDate(date)}</p>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};
