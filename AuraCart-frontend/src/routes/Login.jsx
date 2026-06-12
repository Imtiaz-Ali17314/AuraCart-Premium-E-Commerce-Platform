import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-brand-dark overflow-hidden">
      {/* Left side - Visual/Brand */}
      <div className="md:w-1/2 bg-gradient-to-br from-brand-accent1 to-brand-accent2 p-12 flex flex-col justify-between relative overflow-hidden hidden md:flex">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Welcome Back</h1>
          <p className="text-white/80 text-lg max-w-md">Access your account to manage your orders, wishlist, and discover new trends.</p>
        </div>
        <div className="relative z-10 mt-auto">
          <div className="w-24 h-1 bg-white/30 rounded-full mb-8"></div>
          <p className="text-white/60 text-sm">© 2026 AuraCart. Elevating your lifestyle.</p>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 animate-fade-in">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-brand-light">Sign in to your account</h2>
            <p className="mt-2 text-brand-muted">Or <Link to="/register" className="text-brand-accent2 hover:text-brand-accent1 font-semibold transition-colors">create a new account</Link></p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-1" htmlFor="email">Email address</label>
                <input id="email" type="email" required className="input-premium" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-1" htmlFor="password">Password</label>
                <input id="password" type="password" required className="input-premium" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-brand-accent1 focus:ring-brand-accent1 border-gray-600 rounded bg-brand-card" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-muted">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-brand-accent2 hover:text-brand-accent1 transition-colors">Forgot your password?</a>
              </div>
            </div>

            <div>
              <button type="submit" className="w-full btn-primary flex justify-center items-center">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
