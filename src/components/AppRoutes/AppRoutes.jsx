import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useAuth } from "../../contexts/AuthContext";
import Main from "../Main/Main";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import CardDetailPage from "../../pages/CardDetailPage";
import EditCardPage from "../../pages/EditCardPage";
import ExitPage from "../../pages/ExitPage";

function AppRoutes() {
  const { isAuth } = useAuth();

  console.log("=== APP ROUTES RENDER ===");
  console.log("isAuth:", isAuth);

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuth ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={isAuth ? <Navigate to="/" replace /> : <RegisterPage />}
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

      <Route
        path="/card/:id"
        element={
          <ProtectedRoute>
            <CardDetailPage />
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
        path="/card/new"
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

      <Route
        path="/test-route"
        element={
          <div>
            <h1>✅ TEST ROUTE WORKS!</h1>
          </div>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
