import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

import {
  Wrapper,
  Container,
  Modal,
  ModalBlock,
  ModalTitle,
  Form,
  Input,
  Button,
  FormGroup,
} from "../login/Login.styled";

function Register() {
  const [name, setName] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !loginValue || !password || !passwordRepeat) {
      setError("Заполните все поля");
      return;
    }

    if (password !== passwordRepeat) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      const user = await signUp({ name, login: loginValue, password });
      login(user); 
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Modal>
          <ModalBlock>
            <ModalTitle>
              <h2>Регистрация</h2>
            </ModalTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />
              <Input
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                name="passwordRepeat"
                placeholder="Повторите пароль"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button type="submit">Зарегистрироваться</Button>
              <FormGroup>
                <p>Уже есть аккаунт?</p>
                <a href="/login">Войдите здесь</a>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default Register;
