import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SkeletonLoader = styled(MainContent)`
  flex-wrap: nowrap;
  height: fit-content;
  align-items: flex-start;
`;

export const SkeletonColumn = styled.div`
  width: 220px;
  min-width: 220px;
  background: #fff;
  border-radius: 10px;
  padding: 20px 15px;
  border: 1px solid #E6E6E6;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media (max-width: 768px) {
    width: 200px;
    min-width: 200px;
    padding: 15px 12px;
  }
`;

export const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #ececec 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
  border-radius: 8px;
  height: 110px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #f0f0f0;
  opacity: ${props => props.opacity || 1};
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 100px;
    padding: 12px;
    margin-bottom: 12px;
  }
`;

export const SkeletonCardTitle = styled.div`
  height: 18px;
  width: ${props => props.width || "85%"};
  border-radius: 4px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.3s;
  margin-bottom: 10px;
`;

export const SkeletonCardDescription = styled.div`
  height: 12px;
  width: ${props => props.width || "70%"};
  border-radius: 3px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.5s;
`;

export const SkeletonCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const SkeletonTag = styled.div`
  height: 20px;
  width: ${props => props.width || "60px"};
  border-radius: 10px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.7s;
`;

export const SkeletonDate = styled.div`
  height: 16px;
  width: 80px;
  border-radius: 3px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.9s;
`;