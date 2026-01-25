import apiClient from "./api.js";

export const fetchTasks = async () => {
  try {
    console.log("Fetching tasks...");
    const response = await apiClient.get("/");

    const tasks = response.data.задачи || response.data.tasks || [];
    console.log(`Fetched ${tasks.length} tasks`);

    return { success: true, tasks };
  } catch (error) {
    console.error("Error fetching tasks:", error);

    let errorMessage = "Не удалось загрузить задачи";

    if (error.response?.data?.error) {
      errorMessage = error.response.data.error;
    } else if (error.message.includes("401")) {
      errorMessage = "Требуется авторизация";
    }

    return { success: false, error: errorMessage };
  }
};

export const createTask = async (taskData) => {
  try {
    console.log("Creating task:", taskData);

    const response = await apiClient.post("/", taskData);

    const tasks = response.data.задачи || response.data.tasks || [];
    console.log("Task created successfully");

    return { success: true, tasks };
  } catch (error) {
    console.error("Error creating task:", error);

    let errorMessage = "Не удалось создать задачу";

    if (error.response?.data?.error) {
      errorMessage = error.response.data.error;
    }

    return { success: false, error: errorMessage };
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await apiClient.put(`/${id}`, taskData);
    const tasks = response.data.задачи || response.data.tasks || [];
    return { success: true, tasks };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || "Не удалось обновить задачу",
    };
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await apiClient.delete(`/${id}`);
    const tasks = response.data.задачи || response.data.tasks || [];
    return { success: true, tasks };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || "Не удалось удалить задачу",
    };
  }
};
