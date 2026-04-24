import type { signup } from "../users.type";
import Api from "../Api";
import { handelSuccess, handelerrors } from "../utils";
import { ToastContainer } from "react-toastify";
import "./signup.style.css";
import { NavLink, useNavigate } from "react-router-dom";

import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<signup>({
    name: "",
    email: "",
    password: "",
  });

  const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await Api.post("/signup", form);
      //  console.log()
      handelSuccess("Signup Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        return handelerrors(error.message);
      } else {
        console.log("Unknown error", error);
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
            <h1 className="opacity">Signup</h1>
            <form onSubmit={handelSubmit}>
              <input
                type="text"
                onChange={handelInput}
                name="name"
                placeholder="Name"
              />
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
              <NavLink to="/login">Login</NavLink>
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

export default Signup;
