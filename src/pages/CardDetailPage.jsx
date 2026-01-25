import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { cardList } from "../data.js";
import { tasksAPI } from "../services";

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const CardDetailContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing.borderRadius.large};
  padding: 40px;
  box-shadow: ${theme.shadows.small};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.border};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
`;

const CardId = styled.div`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
  background-color: ${theme.colors.bgSecondary};
  padding: 5px 10px;
  border-radius: 4px;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const CardContent = styled.div`
  margin-bottom: 30px;
`;

const CardField = styled.div`
  margin-bottom: 20px;
`;

const FieldLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.textSecondary};
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const FieldValue = styled.div`
  font-size: 16px;
  color: ${theme.colors.textPrimary};
  padding: 12px;
  background-color: ${theme.colors.bgSecondary};
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderLight};
`;

const ThemeBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => {
    switch (props.$theme) {
      case "Web Design":
        return theme.colors.orangeBg;
      case "Research":
        return theme.colors.greenBg;
      case "Copywriting":
        return theme.colors.purpleBg;
      default:
        return theme.colors.grayBg;
    }
  }};
  color: ${(props) => {
    switch (props.$theme) {
      case "Web Design":
        return theme.colors.orangeText;
      case "Research":
        return theme.colors.greenText;
      case "Copywriting":
        return theme.colors.purpleText;
      default:
        return theme.colors.grayText;
    }
  }};
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${theme.colors.bgSecondary};
  color: ${theme.colors.textSecondary};
  border: 1px solid ${theme.colors.borderLight};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const EditButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  color: #ff4444;
  border: 1px solid #ff4444;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff4444;
    color: ${theme.colors.white};
  }
`;

function CardDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      setIsLoading(true);
      try {
        const task = await tasksAPI.getTaskById(id);
        if (task) {
          setCard(task);
        } else {
          setError("Карточка не найдена");
        }
      } catch (err) {
        console.error("Ошибка загрузки карточки:", err);
        setError(err.message || "Ошибка загрузки данных");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    navigate(`/card/${id}/edit`);
  };

  const handleDelete = () => {
    console.log("Delete card:", id);
    navigate("/");
  };

  if (!card) {
    return (
      <PageContainer>
        <CardDetailContainer>
          <Title>Карточка не найдена</Title>
          <BackButton onClick={handleBack}>Назад</BackButton>
        </CardDetailContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <CardDetailContainer>
        <Header>
          <Title>Просмотр задачи</Title>
          <CardId>ID: {card.id}</CardId>
        </Header>

        <CardContent>
          <CardField>
            <FieldLabel>Название</FieldLabel>
            <FieldValue>{card.title}</FieldValue>
          </CardField>

          <CardField>
            <FieldLabel>Категория</FieldLabel>
            <FieldValue>
              <ThemeBadge $theme={card.theme}>{card.theme}</ThemeBadge>
            </FieldValue>
          </CardField>

          <CardField>
            <FieldLabel>Статус</FieldLabel>
            <FieldValue>
              <StatusBadge>{card.status}</StatusBadge>
            </FieldValue>
          </CardField>

          <CardField>
            <FieldLabel>Дата</FieldLabel>
            <FieldValue>{card.date}</FieldValue>
          </CardField>

          <CardField>
            <FieldLabel>Описание</FieldLabel>
            <FieldValue>
              Здесь будет подробное описание задачи. В реальном приложении это
              поле будет содержать детальное описание задачи, созданное
              пользователем.
            </FieldValue>
          </CardField>
        </CardContent>

        <ActionButtons>
          <EditButton onClick={handleEdit}>Редактировать</EditButton>
          <DeleteButton onClick={handleDelete}>Удалить</DeleteButton>
          <BackButton onClick={handleBack}>Назад</BackButton>
        </ActionButtons>
      </CardDetailContainer>
    </PageContainer>
  );
}

export default CardDetailPage;
