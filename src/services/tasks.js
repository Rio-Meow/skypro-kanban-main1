import { fetchWithAuth, KANBAN_API_BASE_URL } from "./api";

export const tasksAPI = {
  async getAllTasks() {
    try {
      const data = await fetchWithAuth(KANBAN_API_BASE_URL);

      if (data && data.tasks && Array.isArray(data.tasks)) {

        return data.tasks.map((task) => ({
          id: task._id,
          _id: task._id,
          theme: task.topic,
          title: task.title,
          date: formatDateForCard(task.date),
          status: task.status,
          description: task.description,
        }));
      }

      return [];
    } catch (error) {
      throw error;
    }
  },

  async getTaskById(id) {
    try {
      const data = await fetchWithAuth(`${KANBAN_API_BASE_URL}/${id}`);

      if (data && data.task) {
        return {
          id: data.task._id,
          _id: data.task._id,
          theme: data.task.topic,
          title: data.task.title,
          date: formatDateForCard(data.task.date),
          status: data.task.status,
          description: data.task.description,
        };
      }

      return null;
    } catch (error) {
      throw error;
    }
  },

  async createTask(taskData) {
    try {
      const apiTaskData = {
        title: taskData.title || "Новая задача",
        topic: taskData.theme || taskData.topic || "Research",
        status: taskData.status || "Без статуса",
        description: taskData.description || "",
        date: taskData.date
          ? new Date(taskData.date).toISOString()
          : new Date().toISOString(),
      };

      const data = await fetchWithAuth(KANBAN_API_BASE_URL, {
        method: "POST",
        body: JSON.stringify(apiTaskData),
      });

      if (data && data.tasks && Array.isArray(data.tasks)) {
        return data.tasks.map((task) => ({
          id: task._id,
          _id: task._id,
          theme: task.topic,
          title: task.title,
          date: formatDateForCard(task.date),
          status: task.status,
          description: task.description,
        }));
      }

      return [];
    } catch (error) {
      throw error;
    }
  },

  async updateTask(id, taskData) {
    try {
      const apiTaskData = {
        title: taskData.title,
        topic: taskData.theme || taskData.topic,
        status: taskData.status,
        description: taskData.description || "",
        date: taskData.date
          ? new Date(taskData.date).toISOString()
          : new Date().toISOString(),
      };

      const data = await fetchWithAuth(`${KANBAN_API_BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(apiTaskData),
      });

      if (data && data.tasks && Array.isArray(data.tasks)) {
        return data.tasks.map((task) => ({
          id: task._id,
          _id: task._id,
          theme: task.topic,
          title: task.title,
          date: formatDateForCard(task.date),
          status: task.status,
          description: task.description,
        }));
      }

      return [];
    } catch (error) {
      throw error;
    }
  },

  async deleteTask(id) {
    try {
      const data = await fetchWithAuth(`${KANBAN_API_BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (data && data.tasks && Array.isArray(data.tasks)) {
        return data.tasks.map((task) => ({
          id: task._id,
          _id: task._id,
          theme: task.topic,
          title: task.title,
          date: formatDateForCard(task.date),
          status: task.status,
          description: task.description,
        }));
      }

      return [];
    } catch (error) {
      throw error;
    }
  },
};

function formatDateForCard(dateString) {
  if (!dateString) return new Date().toLocaleDateString("ru-RU");

  try {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, ".");
  } catch (e) {
    return dateString;
  }
}
