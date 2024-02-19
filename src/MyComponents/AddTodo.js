import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [de, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !de) {
      alert("Title and description not defined");
    } else {
      addTodo(title, de);
      const url = "http://localhost/php-react/addtodo.php";
      let fData = new FormData();
      fData.append("title", title);
      fData.append("de", de);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };
  return (
    <div className="container my-3">
      <h3>Add a TODO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="de" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={de}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="de"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
