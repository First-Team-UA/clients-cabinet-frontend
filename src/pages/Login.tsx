
import { useNavigate } from "react-router-dom";
import { Button, ForgotPassword, Input, LoginContainer, LoginMenuContainer, Logo } from "./pages.styles/Login.styles";


const Login = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); 
    navigate("/dashboard"); 
  };

  return (
    <LoginContainer className="login-page">
      <Logo>VseTV</Logo>
      <LoginMenuContainer className="login-container">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>Log In</Button>
        <ForgotPassword>Forgot Password</ForgotPassword>
      </LoginMenuContainer>
    </LoginContainer>
  );
};

export default Login;
