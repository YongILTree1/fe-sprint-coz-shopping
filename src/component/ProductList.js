function ProductList({ item }) {
  return (
    <>
      <section className="product-list">
        <h3>상품리스트</h3>
        <article className="item-container">
          <div className="item-box">
            <p>상품이름</p>
          </div>

          <div className="item-box">
            <p>브랜드 이름</p>
          </div>

          <div className="item-box">
            <p>기획전 이름</p>
          </div>

          <div className="item-box">
            <p>#카테고리이름</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default ProductList;
