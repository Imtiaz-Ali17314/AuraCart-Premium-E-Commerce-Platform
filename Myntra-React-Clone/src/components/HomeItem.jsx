import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = (item) => {
    dispatch(bagActions.addToBag(item.id));
    alert("Item added to bag!");
  };

  const handleRemove = (item) => {
    dispatch(bagActions.removeFromBag(String(item.id)));
    alert("Item removed from bag.");
  };

  return (
    <div className="card-premium flex flex-col group overflow-hidden">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          src={item.image}
          alt={item.item_name}
        />
        <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center space-x-1 shadow-lg">
          <span className="text-brand-light text-xs font-bold">{item.rating.stars}</span>
          <FaStar className="text-yellow-400 text-[10px]" />
          <span className="text-brand-muted text-[10px]">| {item.rating.count}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-brand-light mb-1 truncate">{item.company}</h3>
        <p className="text-sm text-brand-muted mb-4 truncate">{item.item_name}</p>

        <div className="flex items-end flex-wrap gap-2 mb-6 mt-auto">
          <span className="text-xl font-bold text-brand-light">Rs {item.current_price}</span>
          <span className="text-sm text-brand-muted line-through mb-0.5">Rs {item.original_price}</span>
          <span className="text-xs font-bold text-brand-accent2 mb-1 bg-brand-accent2/10 px-2 py-0.5 rounded-full">
            {item.discount_percentage}% OFF
          </span>
        </div>

        {elementFound ? (
          <button
            type="button"
            onClick={() => handleRemove(item)}
            className="w-full bg-brand-dark border border-red-500/50 text-red-400 font-semibold rounded-xl px-4 py-3 flex justify-center items-center gap-2 hover:bg-red-500 hover:text-white transition-colors duration-300 active:scale-95"
          >
            <MdDelete size={20} /> Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleAddToBag(item)}
            className="w-full bg-gradient-to-r from-brand-accent1 to-brand-accent2 text-white font-semibold rounded-xl px-4 py-3 flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-brand-accent1/30 transition-all duration-300 active:scale-95"
          >
            <IoMdAddCircle size={20} /> Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeItem;
