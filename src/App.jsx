import { useState } from "react";
import products from "./data/products";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [submitForm, setSubmitForm] = useState();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleFormVisible = () => setIsFormVisible(!isFormVisible);
  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleFieldChange = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  return (
    <div className="container">
      <div className="header d-flex justify-content-between p-3">
        <div className="title">
          <h1>Form</h1>
        </div>
        <div className="function">
          <button className="btn btn-primary" onClick={handleFormVisible}>
            add
          </button>
        </div>
      </div>
      <div className="main">
        {isFormVisible ? (
          <div className="col-4">
            <form className="form-control my-4 d-flex flex-column gap-3">
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
              <button onClick={handleSubmitform} className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        ) : (
          ""
        )}

        <div className="row row-gap-3">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
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
