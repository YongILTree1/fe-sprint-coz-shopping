import { Link } from "react-router-dom";
import Dropdown from "../UI/Dropdown";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <>
      <header>
        <div className="logo-box">
          <div className="logo">
            <Link to="/">
              <img src="logo.png" alt="" />
            </Link>
          </div>
          <h2>
            <Link to="/" className="shopping-mall-name">
              COZ Shopping
            </Link>
          </h2>
        </div>
        <div
          onBlur={() => {
            setIsOpen(false);
          }}
        >
          <label
            className="icon-box"
            onMouseDown={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src="hamburger.png" alt="navimenu" />
          </label>
          {isOpen && <Dropdown />}
        </div>
      </header>
    </>
  );
}

export default Header;
