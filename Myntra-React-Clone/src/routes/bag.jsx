import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const foundItem = bagItems.indexOf(item.id);
    return foundItem >= 0;
  });

  return (
    <main>
      {finalItems.length === 0 ? (
        <div className="empty-state">
          <h3>Your bag is empty!</h3>
          <p>Looks like you haven't added anything to your bag yet.</p>
          <a href="/" className="btn-continue">Continue Shopping</a>
        </div>
      ) : (
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} key={item.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      )}
    </main>
  );
};

export default Bag;
