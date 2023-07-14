import BookmarkList from "../component/BookmarkList";
import ProductList from "../component/ProductList";
import axios from "axios";
import { useState, useEffect } from "react";

function Main() {
  const [productData, setProductData] = useState([]);
  const url = "http://cozshopping.codestates-seb.link/api/v1/products";
  useEffect(() => {
    axios.get(url).then((res) => {
      setProductData(res.data);
    });
  }, []);

  return (
    <main>
      <div className="section-container">
        {productData.map((item, idx) => {
          return <ProductList item={item} key={idx} />;
        })}
        <BookmarkList />
      </div>
    </main>
  );
}

export default Main;
