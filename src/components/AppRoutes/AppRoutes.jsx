import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../contexts/AuthContext';

import MainPage from '../../pages/MainPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import CardDetailPage from '../../pages/CardDetailPage';
import EditCardPage from '../../pages/EditCardPage';
import ExitPage from '../../pages/ExitPage';
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
            <MainPage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/card/:id" 
        element={
          <ProtectedRoute>
            <CardDetailPage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/card/new" 
        element={
          <ProtectedRoute>
            <EditCardPage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/card/:id/edit" 
        element={
          <ProtectedRoute>
            <EditCardPage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/exit" 
        element={
          <ProtectedRoute>
            <ExitPage />
          </ProtectedRoute>
        } 
      />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;