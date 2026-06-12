import { IoPerson } from "react-icons/io5";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((state) => state.bag);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <span style={{ fontSize: '28px', fontWeight: '800' }}>AuraCart</span>
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <Link to="/login" className="action_container">
          <IoPerson />
          <span className="action_name">Profile</span>
        </Link>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <FaShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
