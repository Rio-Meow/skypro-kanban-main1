import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalStyle } from "../GlobalStyles.js";
import {
  AuthBg,
  AuthModal,
  AuthWrapper,
  AuthTitle,
  AuthFormstyle,
  InputWrapper,
  AuthInput,
  ButtonEnter,
  FormGroup,
  ErrorText,
} from "./AuthForm.styled.js";
import { AuthContext } from "../../context/AuthContext.js";

export const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();

  const { login, register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      isValid = false;
    }

    setErrors(newErrors);
    console.log("Ошибки:", newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (!isSignUp) {
        await login({ login: formData.login, password: formData.password });
      } else {
        await register(formData);
      } 
    navigate("/");
    } catch {
      const serverError = isSignUp
        ? "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
        : "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.";

      setError(serverError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <GlobalStyle />
      <AuthBg>
        <AuthModal $isSignUp={isSignUp}>
          <AuthWrapper>
            <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
            <AuthFormstyle id="form" action="#" onSubmit={handleSubmit}>
              <InputWrapper>
                {isSignUp && (
                  <AuthInput
                    $error={errors.name}
                    type="text"
                    name="name"
                    id="formname"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                  />
                )}
                <AuthInput
                  $error={errors.login}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
                />
                <AuthInput
                  $error={errors.password}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
                />
              </InputWrapper>

              {error && <ErrorText>{error}</ErrorText>}

              <ButtonEnter
                type="secondary"
                disabled={
                  isSubmitting ||
                  !formData.login.trim() ||
                  !formData.password.trim() ||
                  (isSignUp && !formData.name.trim())
                }
                style={{
                  backgroundColor:
                    isSubmitting ||
                    !formData.login.trim() ||
                    !formData.password.trim() ||
                    (isSignUp && !formData.name.trim())
                      ? "#94A6BE"
                      : "#565EEF",
                  color: "#ffffff",
                  cursor:
                    isSubmitting ||
                    !formData.login.trim() ||
                    !formData.password.trim() ||
                    (isSignUp && !formData.name.trim())
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </ButtonEnter>

              {!isSignUp && (
                <FormGroup $isSignUp={isSignUp}>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </FormGroup>
              )}

              {isSignUp && (
                <FormGroup $isSignUp={isSignUp}>
                  <p>Уже есть аккаунт?</p>
                  <Link to="/sign-in">Войдите здесь</Link>
                </FormGroup>
              )}
            </AuthFormstyle>
          </AuthWrapper>
        </AuthModal>
      </AuthBg>
    </>
  );
};
