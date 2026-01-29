import { useState, useEffect, useCallback, useContext } from "react";
import { TaskContext } from "./TaskContext";
import {
  fetchTasks as apiFetchTasks,
  postTask as apiPostTask,
  editTask as apiEditTask,
  deleteTask as apiDeleteTask,
} from "../services/api";
import { AuthContext } from "./AuthContext";

const TaskProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTasks = useCallback(async () => {
    if (!token) {
      setTasks([]);
      setLoading(false);
      setError("Пользователь не авторизован или токен отсутствует.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await apiFetchTasks({ token });
      if (data) {
        setTasks(data);
      }
    } catch (err) {
      setError(err.message || "Не удалось загрузить задачи.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getTasks();
    }
  }, [token, getTasks]);
  const createTask = async (newTaskData) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiPostTask({ token, task: newTaskData });
      await getTasks();
      return true;
    } catch (err) {
      setError(err.message || "Не удалось создать задачу.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (id, updatedTaskData) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiEditTask({ token, id, task: updatedTaskData });
      await getTasks();
      return true;
    } catch (err) {
      setError(err.message || "Не удалось обновить задачу.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeTask = async (id) => {
    if (!token) {
      setError("Пользователь не авторизован.");
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await apiDeleteTask({ token, id });
      await getTasks();
      return true;
    } catch (err) {
      setError(err.message || "Не удалось удалить задачу.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    tasks,
    loading,
    error,
    fetchTasks: getTasks,
    createTask,
    updateTask,
    deleteTask: removeTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
