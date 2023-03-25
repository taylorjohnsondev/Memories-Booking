import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Gallery = () => {
  let params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
    }
    fetchUser();
  }, [params.uid]);

  return (
    <div>{user.fullname ? user.fullname : "@" + user.username}'s Gallery</div>
  );
};

export default Gallery;
