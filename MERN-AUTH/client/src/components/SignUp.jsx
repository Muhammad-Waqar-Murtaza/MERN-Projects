import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = ({toggle, setToggle}) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleForm = async (e) => {
    e.preventDefault();
    const URL = "https://embarrassed-bedclothes-hen.cyclic.app/user/signup";
    try {
      const response = await axios.post(URL, user, { withCredentials: true });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className="signupWrapper">
      <div className="formWrapper">
        <form onSubmit={handleForm} className="userForm">
          <h1 className="formTitle">Signup</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            required
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            required
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Create password"
            name="password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button>Signup</button>
          <p>
            Already have an accout?{" "}
            <Link onClick={handleToggle} to="/" className="login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
