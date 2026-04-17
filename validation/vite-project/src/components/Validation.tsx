import { useState } from "react";
import "./validate.style.css";
const Validation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [error, setError] = useState("");

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (!name) return setError("Name is required");
    if (!email) return setError("Email is required");
    if (!psw) return setError("Password is required");

    setError("")
    alert("Form Submit successfully")
  };

  return (
    <div className="form-container ">
      <h2 className="back-clr">Form Validation</h2>
      <form onSubmit={handelFormSubmit}>
        <div>
          <label>Enter Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
             {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>
        <div>
          <label>Enter Email :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>
        <div>
          <label>Enter Password :</label>
          <input
            type="text"
            value={psw}
            onChange={(e) => setPsw(e.target.value)}
          />
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>
         {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Validation;
