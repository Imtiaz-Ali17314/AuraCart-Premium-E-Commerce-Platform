import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const BagSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const foundItem = bagItemIds.indexOf(item.id);
    return foundItem >= 0;
  });

  let totalItem = bagItemIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let CONVENIENCE_FEES = 99;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = () => {
    dispatch(bagActions.clearBag());
    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="card-premium p-6 sticky top-28">
      <h3 className="text-xl font-bold text-brand-light mb-6 uppercase tracking-wide border-b border-white/10 pb-4">
        Price Summary
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-brand-muted">
          <span>Total MRP ({totalItem} items)</span>
          <span>Rs {totalMRP}</span>
        </div>
        <div className="flex justify-between text-brand-muted">
          <span>Discount on MRP</span>
          <span className="text-brand-accent2 font-semibold">-Rs {totalDiscount}</span>
        </div>
        <div className="flex justify-between text-brand-muted">
          <span>Convenience Fee</span>
          <span>Rs {CONVENIENCE_FEES}</span>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 mb-8">
        <div className="flex justify-between text-xl font-bold text-brand-light">
          <span>Total Amount</span>
          <span>Rs {finalPayment}</span>
        </div>
        <div className="mt-2 flex items-center text-xs text-brand-muted">
          <FaCheckCircle className="text-brand-accent1 mr-1" />
          <span>Taxes may apply at checkout</span>
        </div>
      </div>

      <button
        className="w-full btn-primary text-lg flex justify-center items-center gap-2"
        onClick={handlePlaceOrder}
      >
        Place Order Securely
      </button>
    </div>
  );
};

export default BagSummary;
