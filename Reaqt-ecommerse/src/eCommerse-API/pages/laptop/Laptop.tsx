import useGetCategory from "../../../hook/queryHook/useGetCategory";


const Laptop = () => {
  const { data, isLoading } = useGetCategory("laptops");

  if (isLoading) return <h1 className="loading">Loading ..... </h1>;

  return (
    <section className="laptops-page">
      <h1 className="page-title">Laptops</h1>

      <div className="products-grid">
        {data?.map((el) => (
          <article key={el.id} className="product-card">
            <div className="thumb-wrap">
              <img className="thumb" src={el.thumbnail} alt={el.title} />
            </div>

            <div className="card-body">
              <h2 className="product-title">{el.title}</h2>
              <p className="brand">{el.brand}</p>

              <div className="meta-row">
                <div className="price">
                  ${el.price}
                  {el.discountPercentage ? (
                    <span className="discount"> −{el.discountPercentage}%</span>
                  ) : null}
                </div>
                <div className="rating">⭐ {el.rating}</div>
              </div>

             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Laptop;
