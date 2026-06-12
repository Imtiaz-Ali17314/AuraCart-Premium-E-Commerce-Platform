import { IoPerson } from "react-icons/io5";
import { FaHeart, FaShoppingBag, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Header = () => {
  const bag = useSelector((state) => state.bag);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(currentSearch);

  // Sync search input state when URL changes
  useEffect(() => {
    setSearchInput(currentSearch);
  }, [currentSearch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      navigate("/");
    }
  };

  const handleClearSearch = () => {
    setSearchInput("");
    navigate("/");
  };

  return (
    <header className="glass-nav sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-8 lg:mr-12">
            <Link to="/" className="flex items-center gap-1 group">
              <img
                src="/images/rem-bg-logo.png"
                alt="AuraCart Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent2 to-brand-accent1 text-2xl sm:text-3xl font-extrabold tracking-tight whitespace-nowrap">
                AuraCart
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'].map((item) => {
              const isActive = currentCategory.toLowerCase() === item.toLowerCase();
              return (
                <Link
                  key={item}
                  to={`/?category=${item}`}
                  className={`font-medium uppercase tracking-wide text-sm transition-colors duration-200 py-2 border-b-2 whitespace-nowrap ${isActive
                    ? "text-brand-light border-brand-accent1"
                    : "text-brand-muted border-transparent hover:text-brand-light hover:border-brand-accent1"
                    }`}
                >
                  {item}
                </Link>
              );
            })}
            <Link
              to="/"
              className="text-brand-muted hover:text-brand-light font-medium uppercase tracking-wide text-sm transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-brand-accent1 relative"
            >
              Studio <span className="absolute -top-1 -right-4 text-[9px] text-brand-accent2 font-bold bg-brand-accent2/10 px-1 rounded">NEW</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-brand-muted group-focus-within:text-brand-accent1 transition-colors" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-brand-card/50 border border-white/10 rounded-full py-2.5 pl-11 pr-10 text-brand-light placeholder-brand-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-accent1/50 focus:border-brand-accent1 transition-all duration-300 shadow-inner"
                placeholder="Search for products, brands and more..."
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-brand-muted hover:text-brand-light"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </form>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/profile" className="flex flex-col items-center text-brand-muted hover:text-brand-accent1 transition-colors group">
              <IoPerson className="text-xl group-hover:-translate-y-1 transition-transform" />
              <span className="text-[10px] font-semibold mt-1">Profile</span>
            </Link>

            <Link to="/wishlist" className="flex flex-col items-center text-brand-muted hover:text-brand-accent2 transition-colors group">
              <FaHeart className="text-xl group-hover:-translate-y-1 transition-transform" />
              <span className="text-[10px] font-semibold mt-1">Wishlist</span>
            </Link>

            <Link to="/bag" className="flex flex-col items-center text-brand-muted hover:text-brand-light transition-colors relative group">
              <FaShoppingBag className="text-xl group-hover:-translate-y-1 transition-transform" />
              <span className="text-[10px] font-semibold mt-1">Bag</span>
              {bag.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-accent2 to-brand-accent1 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg border border-brand-dark animate-pulse">
                  {bag.length}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
