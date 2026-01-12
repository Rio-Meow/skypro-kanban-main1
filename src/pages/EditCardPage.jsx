import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { cardList } from '../data.js';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const EditCardContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.textPrimary};
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const Option = styled.option``;

const ThemeOptions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ThemeOption = styled.div`
  padding: 8px 16px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  background-color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return props.$selected ? theme.colors.orangeText : theme.colors.orangeBg;
      case 'Research': return props.$selected ? theme.colors.greenText : theme.colors.greenBg;
      case 'Copywriting': return props.$selected ? theme.colors.purpleText : theme.colors.purpleBg;
      default: return props.$selected ? theme.colors.grayText : theme.colors.grayBg;
    }
  }};
  color: ${props => {
    switch(props.$theme) {
      case 'Web Design': return props.$selected ? theme.colors.white : theme.colors.orangeText;
      case 'Research': return props.$selected ? theme.colors.white : theme.colors.greenText;
      case 'Copywriting': return props.$selected ? theme.colors.white : theme.colors.purpleText;
      default: return props.$selected ? theme.colors.white : theme.colors.grayText;
    }
  }};
  border-color: ${props => props.$selected ? theme.colors.textPrimary : 'transparent'};

  &:hover {
    transform: translateY(-2px);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const SaveButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: ${theme.colors.textSecondary};
  border: 1px solid ${theme.colors.border};
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.bgSecondary};
    border-color: ${theme.colors.textSecondary};
  }
`;

function EditCardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({
    title: '',
    theme: 'Web Design',
    status: 'Без статуса',
    date: '',
    description: ''
  });

  const themes = ['Web Design', 'Research', 'Copywriting'];
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  useEffect(() => {
    if (id) {
      const foundCard = cardList.find(card => card.id === parseInt(id));
      if (foundCard) {
        setCard({
          ...foundCard,
          description: 'Описание задачи будет здесь',
          date: foundCard.date || new Date().toLocaleDateString('ru-RU')
        });
      }
    } else {
      setCard({
        ...card,
        date: new Date().toLocaleDateString('ru-RU')
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Save card:', card);
    navigate(id ? `/card/${id}` : '/');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleThemeSelect = (theme) => {
    setCard({ ...card, theme });
  };

  return (
    <PageContainer>
      <EditCardContainer>
        <Header>
          <Title>{id ? 'Редактирование задачи' : 'Создание новой задачи'}</Title>
          {id && <CardId>ID: {id}</CardId>}
        </Header>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Название задачи *</Label>
            <Input
              id="title"
              type="text"
              value={card.title}
              onChange={(e) => setCard({ ...card, title: e.target.value })}
              placeholder="Введите название задачи"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Категория</Label>
            <ThemeOptions>
              {themes.map(themeOption => (
                <ThemeOption
                  key={themeOption}
                  $theme={themeOption}
                  $selected={card.theme === themeOption}
                  onClick={() => handleThemeSelect(themeOption)}
                >
                  {themeOption}
                </ThemeOption>
              ))}
            </ThemeOptions>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="status">Статус</Label>
            <Select
              id="status"
              value={card.status}
              onChange={(e) => setCard({ ...card, status: e.target.value })}
            >
              {statuses.map(status => (
                <Option key={status} value={status}>
                  {status}
                </Option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="date">Дата</Label>
            <Input
              id="date"
              type="text"
              value={card.date}
              onChange={(e) => setCard({ ...card, date: e.target.value })}
              placeholder="ДД.ММ.ГГ"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Описание задачи</Label>
            <TextArea
              id="description"
              value={card.description}
              onChange={(e) => setCard({ ...card, description: e.target.value })}
              placeholder="Введите подробное описание задачи..."
            />
          </FormGroup>

          <ActionButtons>
            <SaveButton type="submit">
              {id ? 'Сохранить изменения' : 'Создать задачу'}
            </SaveButton>
            <CancelButton type="button" onClick={handleCancel}>
              Отмена
            </CancelButton>
          </ActionButtons>
        </Form>
      </EditCardContainer>
    </PageContainer>
  );
}

export default EditCardPage;