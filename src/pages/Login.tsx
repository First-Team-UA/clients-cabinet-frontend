
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginMenuContainer, Logo } from "./pages.styles/Login.styles";


const Login = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); 
    navigate("/dashboard"); 
  };

  return (
    <LoginContainer className="login-page">
      <LoginMenuContainer className="login-container">
        <Logo>VseTV</Logo>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Log In</button>
        <a>Forgot Password</a>
      </LoginMenuContainer>
    </LoginContainer>
  );
};

export default Login;
