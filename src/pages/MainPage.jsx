import { Header } from "../components/header/header";
import { Main } from "../components/Main/Main";
import { PopNewCard } from "../components/PopNewCard/PopNewCard";
import "../App.css";
import { GlobalStyle } from "../components/GlobalStyles";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchTasks } from "../services/api";

export const MainPage = ({ setIsAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewCardOpen = location.pathname === "/new-card";
  const closeNewCard = () => navigate(-1);

  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const [token, setToken] = useState("");

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        if (parsedUserInfo.token) {
          setToken(parsedUserInfo.token);
        }
      } catch (e) {
        console.error("Ошибка парсинга userInfo:", e);
      }
    }
  }, []);

  const getTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks({
        token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [getTasks, token]);

  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header setIsAuth={setIsAuth} />
      <Main error={error} tasks={tasks} loading={loading} />
      <Outlet context={{ tasks, fetchTasks: getTasks }} />
      {isNewCardOpen && (
        <PopNewCard
          onClose={closeNewCard}
          token={token}
          onTaskCreated={getTasks}
        />
      )}
    </div>
  );
};
