import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #eaeef6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

export const NotFoundContent = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 40px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #E6E6E6;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
  
  @media screen and (max-width: 495px) {
    padding: 30px 16px;
  }
`;

export const NotFoundTitle = styled.h1`
  font-size: 96px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #565eef;
  line-height: 1;
  
  @media screen and (max-width: 768px) {
    font-size: 72px;
  }
  
  @media screen and (max-width: 495px) {
    font-size: 56px;
  }
`;

export const NotFoundSubtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000000;
  line-height: 1.3;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const NotFoundText = styled.p`
  font-size: 16px;
  color: #94a6be;
  margin-bottom: 40px;
  line-height: 1.5;
  max-width: 500px;
  
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

export const NotFoundButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #4a52d4;
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media screen and (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin-bottom: 20px;
  }
`;