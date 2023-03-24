import React, { useState } from "react";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const token = user.token;
 
function AvatarUpload() {
  const [file, setFile] = useState();

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  function currentFile(e) {
    setFile(e.target.files[0]);
  }

  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("newImage", file);
    axios
      .put(`http://localhost:3001/upload/${user.uid}`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="AvatarUploader">
      <input type="file" name="newImage" onChange={currentFile} />
      <button onClick={handlePost}>Upload</button>
    </div>
  );
}

export default AvatarUpload;
