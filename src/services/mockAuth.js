export const mockAuthAPI = {
  async register({ login, password, name }) {
    console.log("Mock register:", { login, name });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser = {
      user: {
        id: Date.now(),
        login,
        name,
        password,
        token: "mock_token_" + Date.now(),
      },
    };

    localStorage.setItem(
      "mock_users",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("mock_users") || "[]"),
        { login, name, password, token: mockUser.user.token },
      ]),
    );

    return mockUser;
  },

  async login({ login, password }) {
    console.log("Mock login:", { login });

    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
    const user = users.find(
      (u) => u.login === login && u.password === password,
    );

    if (!user) {
      throw new Error("Неверный логин или пароль");
    }

    return {
      user: {
        id: Date.now(),
        login: user.login,
        name: user.name,
        token: user.token,
      },
    };
  },
};
