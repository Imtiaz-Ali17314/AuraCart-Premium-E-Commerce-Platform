import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock register logic
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <main>
      <div className="auth-container">
        <h2>Join AuraCart</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required placeholder="Create a password" />
          </div>
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <div className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </main>
  );
};

export default Register;
