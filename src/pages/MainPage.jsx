import { Header } from "../components/header/header";
import { Main } from "../components/Main/Main";
import { PopNewCard } from "../components/PopNewCard/PopNewCard";
import "../App.css";
import { GlobalStyle } from "../components/GlobalStyles";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";

export const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isNewCardOpen = location.pathname === "/new-card";
  const closeNewCard = () => navigate(-1);

  const { tasks, loading, error, fetchTasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;

  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />
      <Main error={error} tasks={tasks} loading={loading} />
      <Outlet context={{ tasks, fetchTasks }} />
      {isNewCardOpen && (
        <PopNewCard
          onClose={closeNewCard}
          token={token}
          onTaskCreated={fetchTasks}
        />
      )}
    </div>
  );
};
