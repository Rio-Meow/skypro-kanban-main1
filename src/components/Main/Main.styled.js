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
  padding: 15px 10px;
  border: 1px solid #E6E6E6;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  height: fit-content;

  @media (max-width: 768px) {
    width: 200px;
    min-width: 200px;
    padding: 12px 8px;
  }
`;

export const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #f5f5f5 25%, #ececec 50%, #f5f5f5 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
  width: 220px;
  height: 130px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px 13px 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;

  @media (max-width: 1200px) {
    width: 220px;
    height: 130px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 120px;
    padding: 12px 10px 16px;
  }
`;

export const SkeletonCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SkeletonCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.3s;
`;

export const SkeletonCardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const SkeletonCardBtnDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.5s;
`;

export const SkeletonCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const SkeletonCardTitle = styled.div`
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.7s;
  height: 18px;
  width: ${props => props.width || "150px"};
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SkeletonCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const SkeletonDateIcon = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 2px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 0.9s;
`;

export const SkeletonDateText = styled.div`
  margin-left: 6px;
  height: 13px;
  width: 60px;
  border-radius: 2px;
  background: linear-gradient(90deg, #e8e8e8 25%, #e0e0e0 50%, #e8e8e8 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out 1.1s;
`;

export const EmptyStateContainer = styled.div`
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding: 40px 15px;
  }
`;

export const EmptyStateTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #000000; 
  margin-bottom: 12px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const EmptyStateText = styled.p`
  font-size: 16px;
  color: #94a6be; 
  line-height: 1.5;
  max-width: 400px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;