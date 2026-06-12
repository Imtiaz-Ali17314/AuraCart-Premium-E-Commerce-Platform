import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

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
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          onClick={() => handleRemove(item)}
          className="btn btn-add-bag btn-danger"
        >
          <MdDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          onClick={() => handleAddToBag(item)}
          className="btn btn-add-bag btn-success"
        >
          <IoMdAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
