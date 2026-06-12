const LoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64 w-full animate-fade-in">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
        <div className="absolute inset-0 rounded-full border-4 border-brand-accent1 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
