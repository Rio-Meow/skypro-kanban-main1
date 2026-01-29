import { Column } from "../Column/Column";
import { 
  MainStyle, 
  MainBlock, 
  MainContent,
  SkeletonLoader,
  SkeletonColumn,
  SkeletonCard,
  SkeletonCardGroup,
  SkeletonCardTheme,
  SkeletonCardBtn,
  SkeletonCardBtnDot,
  SkeletonCardContent,
  SkeletonCardTitle,
  SkeletonCardDate,
  SkeletonDateIcon,
  SkeletonDateText,
  EmptyStateContainer,
  EmptyStateTitle,
  EmptyStateText
} from "../Main/Main.styled";

export const Main = ({ loading, tasks, error }) => {
  const columnTitles = [
    "БЕЗ СТАТУСА",
    "НУЖНО СДЕЛАТЬ",
    "В РАБОТЕ",
    "ТЕСТИРОВАНИЕ",
    "ГОТОВО",
  ];

  const isEmptyState = !loading && (!tasks || tasks.length === 0);

  return (
    <MainStyle>
      <div className="container">
        <MainBlock>
          {loading ? (
            <SkeletonLoader>
              <SkeletonColumn>
                {[1, 2].map((task) => (
                  <SkeletonCard key={task}>
                    <SkeletonCardGroup>
                      <SkeletonCardTheme />
                      <SkeletonCardBtn>
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                      </SkeletonCardBtn>
                    </SkeletonCardGroup>
                    <SkeletonCardContent>
                      <SkeletonCardTitle width={task === 1 ? "160px" : "140px"} />
                      <SkeletonCardDate>
                        <SkeletonDateIcon />
                        <SkeletonDateText />
                      </SkeletonCardDate>
                    </SkeletonCardContent>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
              
              <SkeletonColumn>
                {[1, 2].map((task) => (
                  <SkeletonCard key={task}>
                    <SkeletonCardGroup>
                      <SkeletonCardTheme />
                      <SkeletonCardBtn>
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                      </SkeletonCardBtn>
                    </SkeletonCardGroup>
                    <SkeletonCardContent>
                      <SkeletonCardTitle width={task === 1 ? "170px" : "150px"} />
                      <SkeletonCardDate>
                        <SkeletonDateIcon />
                        <SkeletonDateText />
                      </SkeletonCardDate>
                    </SkeletonCardContent>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
              
              <SkeletonColumn>
                <SkeletonCard>
                  <SkeletonCardGroup>
                    <SkeletonCardTheme />
                    <SkeletonCardBtn>
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                    </SkeletonCardBtn>
                  </SkeletonCardGroup>
                  <SkeletonCardContent>
                    <SkeletonCardTitle width="165px" />
                    <SkeletonCardDate>
                      <SkeletonDateIcon />
                      <SkeletonDateText />
                    </SkeletonCardDate>
                  </SkeletonCardContent>
                </SkeletonCard>
                <SkeletonCard>
                  <SkeletonCardGroup>
                    <SkeletonCardTheme />
                    <SkeletonCardBtn>
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                    </SkeletonCardBtn>
                  </SkeletonCardGroup>
                  <SkeletonCardContent>
                    <SkeletonCardTitle width="155px" />
                    <SkeletonCardDate>
                      <SkeletonDateIcon />
                      <SkeletonDateText />
                    </SkeletonCardDate>
                  </SkeletonCardContent>
                </SkeletonCard>
              </SkeletonColumn>
              
              <SkeletonColumn>
                <SkeletonCard>
                  <SkeletonCardGroup>
                    <SkeletonCardTheme />
                    <SkeletonCardBtn>
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                      <SkeletonCardBtnDot />
                    </SkeletonCardBtn>
                  </SkeletonCardGroup>
                  <SkeletonCardContent>
                    <SkeletonCardTitle width="175px" />
                    <SkeletonCardDate>
                      <SkeletonDateIcon />
                      <SkeletonDateText />
                    </SkeletonCardDate>
                  </SkeletonCardContent>
                </SkeletonCard>
              </SkeletonColumn>
              
              <SkeletonColumn>
                {[1, 2, 3].map((task) => (
                  <SkeletonCard key={task}>
                    <SkeletonCardGroup>
                      <SkeletonCardTheme />
                      <SkeletonCardBtn>
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                        <SkeletonCardBtnDot />
                      </SkeletonCardBtn>
                    </SkeletonCardGroup>
                    <SkeletonCardContent>
                      <SkeletonCardTitle width={
                        task === 1 ? "180px" : 
                        task === 2 ? "165px" : 
                        "150px"
                      } />
                      <SkeletonCardDate>
                        <SkeletonDateIcon />
                        <SkeletonDateText />
                      </SkeletonCardDate>
                    </SkeletonCardContent>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
            </SkeletonLoader>
          ) : isEmptyState ? (
            <EmptyStateContainer>
              <EmptyStateTitle>Новых задач нет</EmptyStateTitle>
              <EmptyStateText>
                Создайте первую задачу, чтобы начать работу над проектом
              </EmptyStateText>
            </EmptyStateContainer>
          ) : (
            <MainContent>
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  tasks={tasks}
                  loading={loading}
                  cardList={tasks.filter(
                    (task) => task.status.toLowerCase() === title.toLowerCase(),
                  )}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
      
      {error && (
        <div style={{
          textAlign: "center",
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#ffe6e6",
          border: "1px solid #ff9999",
          borderRadius: "6px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <p style={{ 
            color: "#cc0000", 
            fontWeight: "500",
            margin: 0 
          }}>
            {error}
          </p>
        </div>
      )}
    </MainStyle>
  );
};