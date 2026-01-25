import { Column } from "../Column/Column";
import { 
  MainStyle, 
  MainBlock, 
  MainContent,
  SkeletonLoader,
  SkeletonColumn,
  SkeletonCard,
  SkeletonCardTitle,
  SkeletonCardDescription,
  SkeletonCardFooter,
  SkeletonTag,
  SkeletonDate
} from "../Main/Main.styled";

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
            <SkeletonLoader>
              <SkeletonColumn>
                {[1, 2].map((task) => (
                  <SkeletonCard key={task} opacity={task === 1 ? 1 : 0.9}>
                    <div>
                      <SkeletonCardTitle width={task === 1 ? "90%" : "80%"} />
                      <SkeletonCardDescription width={task === 1 ? "75%" : "65%"} />
                    </div>
                    <SkeletonCardFooter>
                      <SkeletonTag width="50px" />
                      <SkeletonDate />
                    </SkeletonCardFooter>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
              
              <SkeletonColumn>
                {[1, 2].map((task) => (
                  <SkeletonCard key={task} opacity={task === 1 ? 1 : 0.9}>
                    <div>
                      <SkeletonCardTitle width={task === 1 ? "90%" : "80%"} />
                      <SkeletonCardDescription width={task === 1 ? "75%" : "65%"} />
                    </div>
                    <SkeletonCardFooter>
                      <SkeletonTag width="50px" />
                      <SkeletonDate />
                    </SkeletonCardFooter>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
              
              <SkeletonColumn>
                <SkeletonCard opacity={1}>
                  <div>
                    <SkeletonCardTitle width="85%" />
                    <SkeletonCardDescription width="70%" />
                  </div>
                  <SkeletonCardFooter>
                    <SkeletonTag width="60px" />
                    <SkeletonDate />
                  </SkeletonCardFooter>
                </SkeletonCard>
                <SkeletonCard opacity={0.9}>
                  <div>
                    <SkeletonCardTitle width="80%" />
                    <SkeletonCardDescription width="65%" />
                  </div>
                  <SkeletonCardFooter>
                    <SkeletonTag width="55px" />
                    <SkeletonDate />
                  </SkeletonCardFooter>
                </SkeletonCard>
              </SkeletonColumn>
              
              <SkeletonColumn>
                <SkeletonCard opacity={1}>
                  <div>
                    <SkeletonCardTitle width="88%" />
                    <SkeletonCardDescription width="72%" />
                  </div>
                  <SkeletonCardFooter>
                    <SkeletonTag width="65px" />
                    <SkeletonDate />
                  </SkeletonCardFooter>
                </SkeletonCard>
              </SkeletonColumn>
              
              <SkeletonColumn>
                {[1, 2, 3].map((task) => (
                  <SkeletonCard key={task} opacity={task === 1 ? 1 : task === 2 ? 0.9 : 0.8}>
                    <div>
                      <SkeletonCardTitle width={task === 1 ? "92%" : task === 2 ? "85%" : "78%"} />
                      <SkeletonCardDescription width={task === 1 ? "80%" : task === 2 ? "70%" : "60%"} />
                    </div>
                    <SkeletonCardFooter>
                      <SkeletonTag width={task === 1 ? "70px" : task === 2 ? "65px" : "50px"} />
                      <SkeletonDate />
                    </SkeletonCardFooter>
                  </SkeletonCard>
                ))}
              </SkeletonColumn>
            </SkeletonLoader>
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
      <p>{error}</p>
    </MainStyle>
  );
};