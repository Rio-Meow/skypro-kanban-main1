import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../contexts/AuthContext'; 
import Header from '../Header/Header';
import Main from '../Main/Main';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage';

function AppRoutes() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          isAuth ? <Navigate to="/" replace /> : <LoginPage />
        } 
      />
      <Route 
        path="/register" 
        element={
          isAuth ? <Navigate to="/" replace /> : <RegisterPage />
        } 
      />
      
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <>
              <Header />
              <Main />
            </>
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;