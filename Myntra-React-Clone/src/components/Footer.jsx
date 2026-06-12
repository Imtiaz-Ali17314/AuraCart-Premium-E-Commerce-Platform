import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent2 to-brand-accent1">
                AuraCart
              </span>
            </h2>
            <p className="text-brand-muted text-sm leading-relaxed">
              Your premium destination for fashion, electronics, and home essentials. Elevate your lifestyle with AuraCart.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-brand-muted hover:text-brand-accent1 transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent2 transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent1 transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-brand-muted hover:text-brand-accent2 transition-colors"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-brand-light font-semibold uppercase tracking-wider text-sm mb-6">Online Shopping</h3>
            <ul className="space-y-3">
              {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Gift Cards', 'AuraCart Insider'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-muted hover:text-brand-light text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Policies */}
          <div>
            <h3 className="text-brand-light font-semibold uppercase tracking-wider text-sm mb-6">Customer Policies</h3>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'T&C', 'Terms Of Use', 'Track Orders', 'Shipping', 'Cancellation', 'Returns', 'Privacy policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-muted hover:text-brand-light text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-brand-light font-semibold uppercase tracking-wider text-sm mb-6">Stay Updated</h3>
            <p className="text-brand-muted text-sm mb-4">Subscribe to our newsletter for the latest trends and exclusive offers.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-premium py-2 text-sm"
              />
              <button type="submit" className="btn-primary py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-muted text-sm">
            © 2026 AuraCart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-brand-muted text-xs">100% ORIGINAL guarantee for all products</span>
            <span className="text-brand-muted text-xs">Return within 14days of receiving your order</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
