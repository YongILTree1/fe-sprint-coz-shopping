import { Link } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="logo-box">
          <Link to="/">
            <img src="logo.png" alt="logo" />
          </Link>
          <h2>
            <Link to="/" className="shopping-mall-name">
              COZ Shopping
            </Link>
          </h2>
        </div>

        <label className="icon-box" onClick={toggleDropdown}>
          <img src="hamburger.png" alt="navimenu" />
        </label>
        {isOpen && <Dropdown />}
      </header>
    </>
  );
}

export default Header;
