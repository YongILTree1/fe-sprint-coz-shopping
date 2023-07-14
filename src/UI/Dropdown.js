import { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [userNickname, setUserNickName] = useState("O O O");

  return (
    <div className="dropdown-list">
      <li className="dropdown-item">{userNickname} 님 안녕하세요!!</li>

      <li className="dropdown-item">
        <img className="icon-img" src="product.png" alt="product icon" />
        <Link to="/product/list" className="page-name">
          상품리스트 페이지
        </Link>
      </li>

      <li className="dropdown-item">
        <img className="icon-img" src="bookmark.png" alt="bookmark icon" />
        <Link to="/bookmark" className="page-name">
          북마크 페이지
        </Link>
      </li>
    </div>
  );
}

export default Dropdown;
