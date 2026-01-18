import { Card } from "../Card/Card";
import { MainColumn, ColumnTitle, Cards } from "../Column/Column.styled";

export const Column = ({ title, cardList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            key={card._id}
            _id={card._id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}
      </Cards>
    </MainColumn>
  );
};
