import BookmarkList from "../component/BookmarkList";
import ProductList from "../component/ProductList";

function Main({ productData }) {
  return (
    <main>
      <div className="section-container">
        <ProductList productData={productData} />
        <BookmarkList />
      </div>
    </main>
  );
}

export default Main;
