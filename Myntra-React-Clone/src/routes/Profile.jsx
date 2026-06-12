const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[calc(100vh-80px-200px)]">
      <div className="bg-brand-card rounded-2xl border border-white/5 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-brand-accent1 to-brand-accent2 p-8 text-white">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/50 text-3xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">John Doe</h1>
              <p className="text-white/80">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-light border-b border-white/10 pb-2">Account Settings</h3>
            <ul className="space-y-2 text-brand-muted">
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Personal Information</li>
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Saved Addresses</li>
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Payment Methods</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-light border-b border-white/10 pb-2">My Orders</h3>
            <ul className="space-y-2 text-brand-muted">
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Order History</li>
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Returns & Refunds</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-light border-b border-white/10 pb-2">Legal</h3>
            <ul className="space-y-2 text-brand-muted">
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-brand-accent1 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="text-danger hover:text-red-400 cursor-pointer transition-colors pt-4 mt-4 border-t border-white/5">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
