import React, { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [data, setData] = useState({
    firstName: "",
  });

  useEffect(() => {
    profile();
  }, []);

  const token = localStorage.getItem("token");
  const profile = async () => {
    const URL = "http://localhost:3000/user/profile";
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setData({
        firstName: response.data.firstName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profileWrapper">
      <h1 className="profile">Welcome {data.firstName}!</h1>
    </div>
  );
};

export default UserProfile;
