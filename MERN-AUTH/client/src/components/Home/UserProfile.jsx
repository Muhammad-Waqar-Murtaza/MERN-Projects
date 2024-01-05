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

  axios.defaults.withCredentials = true;
  const profile = async () => {
    const URL = "https://server-side-fawn-chi.vercel.app/user/profile";
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true
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
