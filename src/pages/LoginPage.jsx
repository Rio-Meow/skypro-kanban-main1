import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/signin.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      login();
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" onSubmit={handleSubmit}>
              <input 
                className="modal__input" 
                type="email" 
                name="login" 
                id="formlogin" 
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input 
                className="modal__input" 
                type="password" 
                name="password" 
                id="formpassword" 
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="modal__btn-enter _hover01" id="btnEnter" type="submit">
                Войти
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