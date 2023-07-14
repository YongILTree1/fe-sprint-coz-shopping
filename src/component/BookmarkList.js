function BookmarkList() {
  return (
    <section className="bookmark-list">
      <article>
        <h3>북마크리스트</h3>
        <div className="item-container">
          <div className="item-box">
            <p>상품이름</p>
          </div>
          <div className="item-box">
            <p>#카테고리이름</p>
          </div>
          <div className="item-box">
            <p>기획전 이름</p>
          </div>
          <div className="item-box">
            <p>브랜드 이름</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default BookmarkList;
