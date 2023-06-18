import React, { useState } from "react";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("memoriesuser"));

function AvatarUpload() {
  const [file, setFile] = useState();
  const token = user.token;

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
      .put(`api/upload/${user.uid}`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="AvatarUploader">
      <h5>5mb max, jpg and png only</h5> 
      <input type="file" name="newImage" onChange={currentFile} />
      <button onClick={handlePost}>Upload</button>
    </div>
  );
}

export default AvatarUpload;
