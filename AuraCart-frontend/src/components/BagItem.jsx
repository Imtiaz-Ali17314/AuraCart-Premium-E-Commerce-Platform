import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="card-premium flex flex-col sm:flex-row overflow-hidden relative group">
      <div className="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={item.image}
          alt={item.item_name}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-brand-light">{item.company}</h3>
            <p className="text-brand-muted">{item.item_name}</p>
          </div>
          <button
            onClick={handleRemoveItem}
            className="text-brand-muted hover:text-danger transition-colors p-2 rounded-full hover:bg-danger/10"
            title="Remove from bag"
          >
            <MdDelete size={24} />
          </button>
        </div>

        <div className="flex items-end gap-3 my-4">
          <span className="text-2xl font-bold text-brand-light">Rs {item.current_price}</span>
          <span className="text-brand-muted line-through mb-1">Rs {item.original_price}</span>
          <span className="text-brand-accent2 font-bold mb-1 bg-brand-accent2/10 px-2 py-0.5 rounded text-sm">
            {item.discount_percentage}% OFF
          </span>
        </div>

        <div className="mt-auto pt-4 border-t border-white/5 space-y-2">
          <div className="flex items-center text-sm">
            <span className="font-semibold text-brand-light mr-2">{item.return_period} days</span>
            <span className="text-brand-muted">return available</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-brand-muted mr-2">Delivery by</span>
            <span className="font-semibold text-brand-accent1">{item.delivery_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagItem;
