import { useState, useCallback, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { signIn as apiSignIn, signUp as apiSignUp } from "../services/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUserInfo = localStorage.getItem("userInfo");
      const storedToken = localStorage.getItem("token");
      if (storedUserInfo && storedToken) {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        return { ...parsedUserInfo, token: storedToken };
      }
    } catch (error) {
    }
    return null;
  });

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const updateUserInfo = useCallback((userData) => {
    setUser(userData);
    if (userData && userData.token) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
      localStorage.setItem("token", userData.token);
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    }
  }, []);

  const login = async ({ login: userLogin, password }) => {
    try {
      const data = await apiSignIn({ login: userLogin, password });
      updateUserInfo(data.user);
      return true;
    } catch (error) {
      updateUserInfo(null);
      throw error;
    }
  };

  const register = async ({ name, login: userLogin, password }) => {
    try {
      const data = await apiSignUp({ name, login: userLogin, password });
      updateUserInfo(data.user);
      return true;
    } catch (error) {
      updateUserInfo(null);
      throw error;
    }
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateUserInfo, isAuthChecked }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
