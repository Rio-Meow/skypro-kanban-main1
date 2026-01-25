import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/signin.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { login, authError, isLoading } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!password) {
      newErrors.password = "Введите пароль";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const result = await login({
      login: email,
      password,
    });

    if (result.success) {
      navigate(from, { replace: true });
    }
  };

  useEffect(() => {
    if (email && errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (password && errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  }, [email, password]);

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>

            {authError && (
              <div
                className="error-message"
                style={{
                  color: "#ff4444",
                  backgroundColor: "#ffe6e6",
                  padding: "10px",
                  borderRadius: "4px",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                {authError}
              </div>
            )}

            <form
              className="modal__form-login"
              id="formLogIn"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  className="modal__input"
                  type="email"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                {errors.email && (
                  <span style={{ color: "#ff4444", fontSize: "12px" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <input
                  className="modal__input"
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                {errors.password && (
                  <span style={{ color: "#ff4444", fontSize: "12px" }}>
                    {errors.password}
                  </span>
                )}
              </div>

              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Войти"}
              </button>

              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
