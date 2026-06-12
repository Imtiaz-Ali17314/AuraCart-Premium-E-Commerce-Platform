import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row-reverse bg-brand-dark overflow-hidden">
      {/* Right side - Visual/Brand */}
      <div className="md:w-1/2 bg-gradient-to-bl from-brand-accent2 to-brand-accent1 p-12 flex flex-col justify-between relative overflow-hidden hidden md:flex">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-right">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Join AuraCart</h1>
          <p className="text-white/80 text-lg max-w-md ml-auto">Create an account to unlock exclusive offers, track your orders, and build your ultimate wishlist.</p>
        </div>
        <div className="relative z-10 mt-auto text-right">
          <div className="w-24 h-1 bg-white/30 rounded-full mb-8 ml-auto"></div>
          <p className="text-white/60 text-sm">© 2026 AuraCart. Elevating your lifestyle.</p>
        </div>
        {/* Decorative circles */}
        <div className="absolute bottom-1/4 -left-12 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 animate-fade-in">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-brand-light">Create an account</h2>
            <p className="mt-2 text-brand-muted">Or <Link to="/login" className="text-brand-accent1 hover:text-brand-accent2 font-semibold transition-colors">sign in to your existing account</Link></p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-1" htmlFor="name">Full Name</label>
                <input id="name" type="text" required className="input-premium" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-1" htmlFor="email">Email address</label>
                <input id="email" type="email" required className="input-premium" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-1" htmlFor="password">Password</label>
                <input id="password" type="password" required className="input-premium" placeholder="Create a strong password" />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full btn-primary flex justify-center items-center">
                Create Account
              </button>
            </div>

            <p className="text-xs text-brand-muted text-center mt-4">
              By registering, you agree to our <a href="#" className="text-brand-accent1 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-accent1 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
