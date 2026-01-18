import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + "/login", userData, {
      headers: {
        "Content-Type": "",
      },
    });
    const token = data.data.user.token;
    localStorage.setItem("token", token);
    return data.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    const token = data.data.user.token;
    localStorage.setItem("token", token);
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error);
  }
}
