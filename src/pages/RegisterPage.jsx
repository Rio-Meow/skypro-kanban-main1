import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/signup.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { register, authError, isLoading } = useAuth();

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Введите имя';
    } else if (name.length < 2) {
      newErrors.name = 'Имя должно быть не менее 2 символов';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!password) {
      newErrors.password = 'Введите пароль';
    } else if (password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const result = await register({ 
      name, 
      login: email, 
      password 
    });
    
    if (result.success) {
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    if (name && errors.name) {
      setErrors(prev => ({ ...prev, name: '' }));
    }
    if (email && errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
    if (password && errors.password) {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  }, [name, email, password]);

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            {authError && (
              <div className="error-message" style={{
                color: '#ff4444',
                backgroundColor: '#ffe6e6',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                textAlign: 'center'
              }}>
                {authError}
              </div>
            )}
            
            <form className="modal__form-login" id="formLogUp" onSubmit={handleSubmit}>
              <div>
                <input 
                  className="modal__input first-name" 
                  type="text" 
                  name="first-name" 
                  id="first-name" 
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  style={{ width: '100%' }}
                />
                {errors.name && (
                  <span style={{ color: '#ff4444', fontSize: '12px' }}>{errors.name}</span>
                )}
              </div>
              
              <div>
                <input 
                  className="modal__input login" 
                  type="email" 
                  name="login" 
                  id="loginReg" 
                  placeholder="Эл. почта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  style={{ width: '100%' }}
                />
                {errors.email && (
                  <span style={{ color: '#ff4444', fontSize: '12px' }}>{errors.email}</span>
                )}
              </div>
              
              <div>
                <input 
                  className="modal__input password-first" 
                  type="password" 
                  name="password" 
                  id="passwordFirst" 
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  style={{ width: '100%' }}
                />
                {errors.password && (
                  <span style={{ color: '#ff4444', fontSize: '12px' }}>{errors.password}</span>
                )}
              </div>
              
              <button 
                className="modal__btn-signup-ent _hover01" 
                id="SignUpEnter" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
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