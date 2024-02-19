import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let history = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
      password: user.password,
    };
    console.log(sendData);
    axios
      .post("http://localhost/php-react/login.php", sendData)
      .then((result) => {
        if (result.data.Status === "200") {
          // window.localStorage.setItem("email", result.data.email);
          // window.localStorage.setItem(
          //   "userName",
          //   result.data.first_name + " " + result.data.last_name
          // );
          history(`/addTodo`);
        } else {
          alert("Invalid User");
        }
      });
  };

  return (
    <form onSubmit={submitForm}>
      <div className="main-box">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Login Page</h1>
          </div>
          <div className="row">
            <div className="col-md-6">Email:</div>
            <div className="col-md-6">
              <input
                onChange={handleChange}
                value={user.email}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Password:</div>
            <div className="col-md-6">
              <input
                onChange={handleChange}
                value={user.password}
                type="text"
                name="password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
