import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  const [isAuth, setIsAuth] = useState(true);

  const PrivateRoute = () => {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />}>
            <Route path="/card/:id" element={<CardPage />} />

            <Route path="/new" element={<NewCardPage />} />

            <Route path="/exit" element={<ExitPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
