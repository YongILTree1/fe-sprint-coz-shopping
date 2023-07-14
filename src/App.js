import "./App.css";
import "./page/Page.css";
import "./component/Component.css";
import "./UI/UI.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./page/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmark from "./page/Bookmark";
import Product from "./page/Product";
import { useState, useEffect } from "react";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setProductData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main productData={productData} />} />
        <Route path="/product/list" element={<Product />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
