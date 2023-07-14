import "./App.css";
import "./page/Page.css";
import "./component/Component.css";
import "./UI/UI.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./page/Main";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Bookmark from "./page/Bookmark";
import Product from "./page/Product";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/list" element={<Product />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
