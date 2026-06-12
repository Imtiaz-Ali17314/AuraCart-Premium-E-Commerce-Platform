import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[calc(100vh-80px-200px)]">
      <h2 className="text-3xl font-extrabold text-brand-light mb-8 border-b border-white/10 pb-4">
        My Wishlist <span className="text-brand-muted text-lg font-normal ml-2">(0 items)</span>
      </h2>

      <div className="flex flex-col items-center justify-center py-20 bg-brand-card rounded-2xl border border-white/5 shadow-lg max-w-2xl mx-auto mt-10">
        <div className="w-24 h-24 bg-brand-dark rounded-full flex items-center justify-center mb-6 shadow-inner">
          <FaHeart className="text-4xl text-brand-muted" />
        </div>
        <h3 className="text-2xl font-bold text-brand-light mb-2">Your wishlist is empty</h3>
        <p className="text-brand-muted mb-8 text-center max-w-sm">Save items that you like in your wishlist. Review them anytime and easily move them to the bag.</p>
        <Link to="/" className="btn-outline">
          Discover Trending Items
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
