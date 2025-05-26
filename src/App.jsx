import { useState } from "react";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 2,
      title: "Product 2",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 3,
      title: "Product 3",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 4,
      title: "Product 4",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 5,
      title: "Product 5",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 6,
      title: "Product 6",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 7,
      title: "Product 7",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 8,
      title: "Product 8",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 9,
      title: "Product 9",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      id: 10,
      title: "Product 10",
      description: "lorem lorem lorem lorem lorem lorem lorem",
    },
  ]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleFormVisible = () => setIsFormVisible(!isFormVisible);
  const handleFieldChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };
  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log(e);
    const newProducts = [...products, formData];
    console.log(newProducts);
    setProducts(newProducts);

    setFormData({
      title: "",
      description: "",
    });
  };

  const handleDeleteItem = (index) => {
    console.log(index);

    const filteredItem = products.filter((product, i) => i != index);
    console.log(filteredItem);
    setProducts(filteredItem);
  };

  console.log(products);

  return (
    <div className="container">
      <div className="header d-flex justify-content-between p-3">
        <div className="title">
          <h1>Form</h1>
        </div>
        <div className="function">
          <button className="btn btn-primary" onClick={handleFormVisible}>
            {isFormVisible ? "x" : "+"}
          </button>
        </div>
      </div>
      <div className="main">
        {isFormVisible ? (
          <div className="col-4">
            <form
              onSubmit={handleSubmitform}
              className="form-control my-4 d-flex flex-column gap-3"
            >
              <div className="field-1">
                <label className="col-3  me-3" htmlFor="title">
                  Titolo:
                </label>
                <input
                  value={formData.title}
                  onChange={handleFieldChange}
                  className="grow-1"
                  type="text"
                  name="title"
                  id="title"
                />
              </div>
              <div className="field-2">
                <label className="col-3 me-3" htmlFor="description">
                  Descrizione
                </label>
                <input
                  value={formData.description}
                  onChange={handleFieldChange}
                  type="text"
                  name="description"
                  id="description"
                />
              </div>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        ) : (
          ""
        )}

        <div className="row row-gap-3">
          {products.map((product, index) => (
            <div className="col-4" key={product.id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="title">
                    #{product.id} - {product.title}
                  </div>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="btn btn-danger"
                  >
                    x
                  </button>
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
