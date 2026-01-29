import { Calendar } from "../Calendar/Calendar";
import {
  PopNewCardStyled,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  Categories,
  CategoriesP,
  CategoriesThemes,
  CategoriesTheme,
  Subtitle,
} from "./PopNewCard.styled";
import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { AuthContext } from "../../context/AuthContext";

export const PopNewCard = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [error, setError] = useState(""); 

  const { createTask, fetchTasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const handleCreate = async () => {
    setError("");
    
    const titleValue = title.trim();
    const textValue = text.trim();
    
    if (!titleValue) {
      setError("Введите название задачи");
      return;
    }
    
    if (!textValue) {
      setError("Введите описание задачи");
      return;
    }
    
    if (titleValue.length < 3) {
      setError("Название должно быть не менее 3 символов");
      return;
    }
    
    if (textValue.length < 5) {
      setError("Описание должно быть не менее 5 символов");
      return;
    }
    
    const newTask = {
      title: titleValue,
      description: textValue,
      topic: category,
    };

    try {
      await createTask(newTask);
      fetchTasks();
      onClose();
      setTitle("");
      setText("");
      setCategory("Web Design");
    } catch (err) {
      if (err.message.includes("400")) {
        setError("Ошибка: Проверьте правильность заполнения полей");
      } else if (err.message.includes("401") || err.message.includes("403")) {
        setError("Ошибка авторизации");
      } else if (err.message.includes("500")) {
        setError("Ошибка сервера. Попробуйте позже");
      } else {
        setError(err.message || "Ошибка при создании задачи");
      }
    }
  };

  return (
    <PopNewCardStyled id="popNewCard">
      <PopNewCardContainer onClick={onClose}>
        <PopNewCardBlock onClick={(e) => e.stopPropagation()}>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose onClick={onClose}>&#10006;</PopNewCardClose>

            {error && (
              <div style={{
                backgroundColor: "#ffe6e6",
                border: "1px solid #ff9999",
                borderRadius: "4px",
                color: "#cc0000",
                padding: "10px 15px",
                margin: "0 0 15px 0",
                fontSize: "14px"
              }}>
                {error}
              </div>
            )}
            
            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <Subtitle htmlFor="formTitle">Название задачи</Subtitle>
                  <FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      setError(""); 
                    }}
                  />
                  {title.trim().length > 0 && title.trim().length < 3 && (
                    <small style={{ 
                      color: "orange", 
                      fontSize: "12px",
                      display: "block",
                      marginTop: "5px"
                    }}>
                      Минимум 3 символа (осталось: {3 - title.trim().length})
                    </small>
                  )}
                </FormNewBlock>
                <FormNewBlock>
                  <Subtitle htmlFor="textArea">Описание задачи</Subtitle>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      setError(""); 
                    }}
                  />
                  {text.trim().length > 0 && text.trim().length < 5 && (
                    <small style={{ 
                      color: "orange", 
                      fontSize: "12px",
                      display: "block",
                      marginTop: "5px"
                    }}>
                      Минимум 5 символов (осталось: {5 - text.trim().length})
                    </small>
                  )}
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
            <Categories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                <CategoriesTheme
                  className={`_orange ${
                    category === "Web Design" ? "_active-category" : ""
                  }`}
                  onClick={() => setCategory("Web Design")}
                >
                  <p className="_orange">Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme
                  className={`_green ${
                    category === "Research" ? "_active-category" : ""
                  }`}
                  onClick={() => setCategory("Research")}
                >
                  <p className="_green">Research</p>
                </CategoriesTheme>
                <CategoriesTheme
                  className={`_purple ${
                    category === "Copywriting" ? "_active-category" : ""
                  }`}
                  onClick={() => setCategory("Copywriting")}
                >
                  <p className="_purple">Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </Categories>
            <FormNewCreate
              className="_hover01"
              id="btnCreate"
              onClick={handleCreate}
              disabled={!title.trim() || !text.trim()}
            >
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyled>
  );
};