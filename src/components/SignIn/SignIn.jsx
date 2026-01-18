import { AuthForm } from "../AuthForm/AuthForm";

export const SignIn = ({ setIsAuth }) => {
  return <AuthForm isSignUp={false} setIsAuth={setIsAuth} />;
};
