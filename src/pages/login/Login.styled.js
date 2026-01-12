import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 40px;
    font-weight: 400;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #d0cece;
  font-size: 18px;

  &::placeholder {
    color: #888;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 12px;
  font-size: 18px;
  background-color: #4c6ef5;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #33399b;
  }
`;

export const FormGroup = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;

  a {
    margin-left: 5px;
    color: #4c6ef5;
    text-decoration: underline;
  }
`;
