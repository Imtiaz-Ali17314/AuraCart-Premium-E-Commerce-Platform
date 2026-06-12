import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const foundItem = bagItems.indexOf(item.id);
    return foundItem >= 0;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[calc(100vh-80px-200px)]">
      {finalItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-brand-card rounded-2xl border border-white/5 shadow-lg max-w-2xl mx-auto mt-10">
          <div className="w-24 h-24 bg-brand-dark rounded-full flex items-center justify-center mb-6 shadow-inner">
            <FaShoppingBag className="text-4xl text-brand-muted" />
          </div>
          <h3 className="text-2xl font-bold text-brand-light mb-2">Your bag is empty!</h3>
          <p className="text-brand-muted mb-8 text-center max-w-sm">Looks like you haven't added anything to your bag yet. Explore our top categories and find something you love.</p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-brand-light border-b border-white/10 pb-4">Shopping Bag ({finalItems.length} items)</h2>
            <div className="space-y-6">
              {finalItems.map((item) => (
                <BagItem item={item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <BagSummary />
          </div>
        </div>
      )}
    </main>
  );
};

export default Bag;
