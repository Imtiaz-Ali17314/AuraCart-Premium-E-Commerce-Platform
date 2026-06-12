import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login logic
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <main>
      <div className="auth-container">
        <h2>Login to AuraCart</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required placeholder="Enter your password" />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <div className="auth-switch">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
