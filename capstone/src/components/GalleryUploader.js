import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("memoriesuser"));

function GalleryUpload() {
  const [file, setFile] = useState();
  const token = user.token;
  const navigate = useNavigate()

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
      .post(`api/gallery/${user.uid}`, formData) 
      .then((response) => {
        console.log(response.data);
        navigate(0) 
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

export default GalleryUpload;
