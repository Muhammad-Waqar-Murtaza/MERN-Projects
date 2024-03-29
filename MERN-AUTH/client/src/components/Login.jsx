import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({toggle, setToggle, isAuth, setIsAuth, setToken}) => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;

  const handleForm = async (e) => {
    e.preventDefault();
    const URL = "https://embarrassed-bedclothes-hen.cyclic.app/user/login";
    try {
      const response = await axios.post(URL, user, {withCredentials: true});
      console.log(response.data);
      const token = response.data.token
      if(token){
        localStorage.setItem('token', token)
        // setIsAuth(true)
        setToken(token)
        navigate("/userprofile")
      }
    } catch (err) {
      console.log(err);
    }
    setUser({
      email: "",
      password: ""
    })

  };

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleForm} className="userForm">
          <h1 className="formTitle">Login</h1>
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
            placeholder="Password"
            name="password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button>Login</button>
          <p>
            Don't have an accout?{" "}
            <Link onClick={handleToggle} to="/signup" className="signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
