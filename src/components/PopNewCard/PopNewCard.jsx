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

  const { createTask, fetchTasks } = useContext(TaskContext);
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const handleCreate = async () => {
    if (!title.trim()) {
      alert("Введите название задачи");
      return;
    }
    const newTask = {
      title,
      description: text,
      topic: category,
    };

    console.log("Создаётся задача:", newTask);
    console.log("Токен:", token);

    try {
      await createTask(newTask);
      fetchTasks();
      onClose();
      setTitle("");
      setText("");
      setCategory("Web Design");
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
    }
  };

  return (
    <PopNewCardStyled id="popNewCard">
      <PopNewCardContainer onClick={onClose}>
        <PopNewCardBlock onClick={(e) => e.stopPropagation()}>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose onClick={onClose}>&#10006;</PopNewCardClose>
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
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <Subtitle htmlFor="textArea">Описание задачи</Subtitle>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    onChange={(e) => setText(e.target.value)}
                  />
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
            >
              Создать задачу
            </FormNewCreate>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyled>
  );
};
