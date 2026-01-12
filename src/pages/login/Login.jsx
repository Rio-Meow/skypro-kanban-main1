import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/auth";
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
} from "./Login.styled";

function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginValue || !password) {
      setError("Заполните все поля");
      return;
    }

    try {
      const user = await signIn({ login: loginValue, password });
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
              <h2>Вход</h2>
            </ModalTitle>
            <Form onSubmit={handleSubmit}>
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
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button type="submit">Войти</Button>
              <FormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </FormGroup>
            </Form>
          </ModalBlock>
        </Modal>
      </Container>
    </Wrapper>
  );
}

export default Login;
