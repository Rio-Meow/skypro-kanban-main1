import { Column } from "../Column/Column";
import { MainStyle, MainBlock, MainContent } from "../Main/Main.styled";

export const Main = ({ loading, tasks, error }) => {
  const columnTitles = [
    "БЕЗ СТАТУСА",
    "НУЖНО СДЕЛАТЬ",
    "В РАБОТЕ",
    "ТЕСТИРОВАНИЕ",
    "ГОТОВО",
  ];

  return (
    <MainStyle>
      <div className="container">
        <MainBlock>
          {loading ? (
            <div className="loading-message">
              <p>Данные загружаются...</p>
            </div>
          ) : (
            <MainContent>
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  tasks={tasks}
                  loading={loading}
                  cardList={tasks.filter(
                    (task) => task.status.toLowerCase() === title.toLowerCase()
                  )}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
      <p>{error}</p>
    </MainStyle>
  );
};
