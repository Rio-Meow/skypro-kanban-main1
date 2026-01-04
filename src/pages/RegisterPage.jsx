import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/signup.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name && email && password) {
      login();
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" onSubmit={handleSubmit}>
              <input 
                className="modal__input first-name" 
                type="text" 
                name="first-name" 
                id="first-name" 
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input 
                className="modal__input login" 
                type="email" 
                name="login" 
                id="loginReg" 
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input 
                className="modal__input password-first" 
                type="password" 
                name="password" 
                id="passwordFirst" 
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="modal__btn-signup-ent _hover01" id="SignUpEnter" type="submit">
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;