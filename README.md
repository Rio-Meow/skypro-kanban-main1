# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🎯 Функционал

### 📋 Управление задачами
- **Создание задач** с названием, описанием, категорией и датой
- **Редактирование** существующих задач
- **Удаление** ненужных задач

### 🗂️ Система статусов
1. **БЕЗ СТАТУСА** — новые, необработанные задачи
2. **НУЖНО СДЕЛАТЬ** — запланированные задачи
3. **В РАБОТЕ** — задачи в процессе выполнения
4. **ТЕСТИРОВАНИЕ** — задачи на проверке
5. **ГОТОВО** — выполненные задачи

### 🎨 Категории задач
- **Web Design** — задачи по дизайну (оранжевый цвет)
- **Research** — исследовательские задачи (зеленый цвет)
- **Copywriting** — задачи по копирайтингу (фиолетовый цвет)

## 🛠 Технологический стек

| Технология | Назначение |
|------------|------------|
| **React 18** | Библиотека для построения UI |
| **Vite** | Сборщик и dev-сервер |
| **Styled Components** | Стилизация компонентов |
| **React Router v6** | Навигация между страницами |
| **Context API** | Управление состоянием |
