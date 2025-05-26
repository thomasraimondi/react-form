import products from "./data/products";

function App() {
  return (
    <div className="container">
      <div className="header d-flex justify-content-between p-3">
        <div className="title">
          <h1>Form</h1>
        </div>
        <div className="function">
          <button className="btn btn-primary">+</button>
        </div>
      </div>
      <div className="main">
        <div className="row row-gap-3">
          {products.map((product) => (
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  #{product.id} - {product.title}
                </div>
                <div className="card-body">{product.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
