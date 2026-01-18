import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { useParams, useOutletContext } from "react-router-dom";

export const CardPage = () => {
  const { tasks, fetchTasks } = useOutletContext(); 
  const { id } = useParams(); 

  const task = tasks.find((t) => t._id === id); 

  if (!task) return <div>Задача не найдена</div>;
  return <PopBrowse task={task} onUpdate={fetchTasks} />;
};
