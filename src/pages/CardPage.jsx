import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const CardPage = () => {
  const { tasks, fetchTasks } = useContext(TaskContext);
  const { id } = useParams();

  const task = tasks.find((t) => t._id === id);

  if (!task) return <div>Задача не найдена</div>;
  return <PopBrowse task={task} onUpdate={fetchTasks} />;
};
