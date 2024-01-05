import React from "react";
import { Link } from "react-router-dom";

const Header = ({setToken, token, toggle, setToggle}) => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }


  return (
    <header className="header-wrap">
      <Link to="/" className="logo">
        MERN-AUTH
      </Link>
      <div className="headerlinks">
          {toggle && <Link to="/"><button onClick={handleToggle}>Login</button></Link>}
          {!token && !toggle && <Link to="/signup"><button onClick={handleToggle}>Signup</button></Link>}
          {token && <Link to="/"> <button onClick={handleLogout}>Logout</button> </Link>}
        
      </div>
    </header>
  );
};

export default Header;
