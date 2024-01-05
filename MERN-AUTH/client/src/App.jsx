import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserProfile from "./components/Home/UserProfile";
import Header from "./components/Home/Header";
import { useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  const initialToken = localStorage.getItem('token')
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState(initialToken)

  return (
    <BrowserRouter>
      <Header toggle={toggle} setToggle={setToggle} token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Login setToken={setToken} toggle={toggle} setToggle={setToggle} />} exact />
        {token && <Route path="/userprofile" element={<UserProfile />}/>}
        <Route path="/signup" element={<SignUp toggle={toggle} setToggle={setToggle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
