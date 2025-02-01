
import { useNavigate } from "react-router-dom";


const Login = ({ onLogin }: { onLogin: () => void }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); 
    navigate("/dashboard"); 
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to VseTV</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default Login;
