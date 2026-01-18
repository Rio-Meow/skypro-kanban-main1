import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Calendar } from "../Calendar/Calendar";
import {
  PopBrowseStyled,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseArea,
  Status,
  StatusP,
  StatusThemes,
  StatusTheme,
  PopBrowseButtons,
  ThemeCategory,
  CategoryTheme,
} from "./PopBrowse.styled";
import { TaskContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";

export const PopBrowse = ({ task }) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false); 
  const [editedStatus, setEditedStatus] = useState(task.status); 
  const [editedText, setEditedText] = useState(task.text); 
  const [editDate, setEditDate] = useState(task.date || "");

  const {
    updateTask,
    deleteTask: removeTask,
    fetchTasks,
  } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;

  if (!task) {
    return null;
  }

  const handleClose = () => navigate("/");

  const getThemeClass = (topic) => {
    switch (topic) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      case "Copywriting":
        return "purple";
      default:
        return "gray"; 
    }
  };

  const themeClass = getThemeClass(task.topic);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const handleSave = async () => {
    if (!token) {
      console.error(
        "Токен пользователя отсутствует. Невозможно сохранить задачу."
      );
      return;
    }
    try {
      const updatedTask = {
        title: task.title,
        text: editedText,
        topic: task.topic,
        status: editedStatus,
      };
      console.log("Отправляем задачу на сервер:", updatedTask);
      await updateTask(task._id, updatedTask);
      setIsEditMode(false);
      fetchTasks(); 
      handleClose();
    } catch (err) {
      console.error("Ошибка при сохранении:", err);
    }
  };

  const handleDelete = async () => {
    if (!token) {
      console.error(
        "Токен пользователя отсутствует. Невозможно удалить задачу."
      );
      return;
    }
    try {
      await removeTask(task._id);
      fetchTasks();
      handleClose();
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  const handleCancel = () => {
    setEditedStatus(task.status);
    setEditedText(task.text);
    setIsEditMode(false);
  };

  return (
    <PopBrowseStyled onClick={handleClose} id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock onClick={(e) => e.stopPropagation()}>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>{task.title}</PopBrowseTitle>
              <CategoryTheme className={`_${themeClass} _active-category`}>
                <p className={`_${themeClass}`}>{task.topic}</p>
              </CategoryTheme>
            </PopBrowseTopBlock>
            <Status>
              <StatusP>Статус</StatusP>
              <StatusThemes>
                {isEditMode ? (
                  statuses.map((status) => (
                    <StatusTheme
                      key={status}
                      onClick={() => setEditedStatus(status)}
                      style={{
                        backgroundColor:
                          editedStatus === status ? "#94A6BE" : "#ffffff",
                        borderColor:
                          editedStatus === status ? "#94A6BE" : "#94A6BE",
                        color: editedStatus === status ? "#ffffff" : "#94A6BE",
                        cursor: "pointer",
                      }}
                    >
                      <p>{status}</p>
                    </StatusTheme>
                  ))
                ) : (
                  <StatusTheme
                    style={{
                      backgroundColor: "#94A6BE",
                      borderColor: "#94A6BE",
                      color: "#ffffff",
                    }}
                  >
                    <p>{task.status}</p>
                  </StatusTheme>
                )}
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly={!isEditMode}
                    placeholder="Введите описание задачи..."
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                value={editDate}
                onChange={setEditDate}
                isDisabled={!isEditMode}
              />
            </PopBrowseWrap>

            {!isEditMode ? (
              <PopBrowseButtons className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setIsEditMode(true)}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  onClick={handleClose}
                  className="btn-browse__close _btn-bg _hover01"
                >
                  Закрыть
                </button>
              </PopBrowseButtons>
            ) : (
              <PopBrowseButtons className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={handleCancel}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={handleDelete}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  onClick={handleClose}
                  className="btn-edit__close _btn-bg _hover01"
                >
                  Закрыть
                </button>
              </PopBrowseButtons>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseStyled>
  );
};
