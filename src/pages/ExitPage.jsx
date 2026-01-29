import { PopExit } from "../components/PopExit/PopExit";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const ExitPage = () => {
  const { logout } = useContext(AuthContext);
  return <PopExit onLogout={logout} />;
};
