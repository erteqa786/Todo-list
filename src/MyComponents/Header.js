// import React from "react";
import { Link } from "react-router-dom";

export default function header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Todolist
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/registration">
            Register
          </Link>
          <Link className="nav-item nav-link" to="/login">
            Login
          </Link>
          {/* <Link className="nav-item nav-link" to="/addTodo">
            Add Todos
          </Link> */}

          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
