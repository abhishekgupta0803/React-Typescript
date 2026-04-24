import type { login } from "../users.type";
import Api from "../Api";
import { handelSuccess, handelerrors } from "../utils";
import { ToastContainer } from "react-toastify";
import "./login.style.css";
import { NavLink, useNavigate } from "react-router-dom";

import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<login>({
    email: "",
    password: "",
  });

  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const req = await Api.post("/login", form);
      const token = req.data.jwtToken;
      localStorage.setItem("token", token);
      handelSuccess("Login Successfully");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (error: any) {
      if (error.response) {
        return handelerrors(error.response.data.message);
      } else {
        return handelerrors("Something went wrong");
      }
    }
  };

  return (
    <>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">Login</h1>
            <form onSubmit={handelSubmit}>
              <input
                type="email"
                onChange={handelInput}
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                onChange={handelInput}
                name="password"
                placeholder="Password"
              />

              <button className="opacity">SUBMIT</button>
            </form>
            <div className="register-forget opacity">
              <NavLink to="/">Signup</NavLink>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
