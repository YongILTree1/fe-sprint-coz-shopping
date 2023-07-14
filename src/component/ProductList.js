function ProductList({ productData }) {
  const ProductItem = productData.find((item) => item.type === "Product");
  const CategoryItem = productData.find((item) => item.type === "Category");
  const ExhibitionItem = productData.find((item) => item.type === "Exhibition");
  const BrandItem = productData.find((item) => item.type === "Brand");
  return (
    <>
      <section className="product-list">
        <h2>상품리스트</h2>
        <article className="item-container">
          {ProductItem && (
            <div className="item-box">
              <img src={ProductItem.image_url} alt={""} />
              <b>{ProductItem.title}</b>
            </div>
          )}
          {CategoryItem && (
            <div className="item-box">
              <img src={CategoryItem.image_url} alt={""} />
              <b>#{CategoryItem.title}</b>
            </div>
          )}
          {ExhibitionItem && (
            <div className="item-box">
              <img src={ExhibitionItem.image_url} alt={""} />
              <b>{ExhibitionItem.title}</b>
              <p>{ExhibitionItem.sub_title}</p>
            </div>
          )}
          {BrandItem && (
            <div className="item-box">
              <img src={BrandItem.brand_image_url} alt={""} />
              <b>{BrandItem.brand_name}</b>
            </div>
          )}
        </article>
      </section>
    </>
  );
}

export default ProductList;
