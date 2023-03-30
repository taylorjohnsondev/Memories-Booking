import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import GalleryUpload from "../components/GalleryUploader";
const Gallery = () => {
  let params = useParams();
  const [user, setUser] = useState([]);
  const [photos, setPhotos] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
      setPhotos(response.data.photos);
    }
    fetchUser();
  }, [params.uid, photos]);

  return (
    <>
      {savedUser && savedUser.uid === params.uid ? (
        <>
          <div>Hello {user.username}</div>
          Upload a photo?
          <GalleryUpload />
          <div className="photos-section">
            <div className="row">
              {photos &&
                photos.map((photo, index) => (
                  <div className="col-lg-4 mb-4 mb-lg-0" key={index}>
                    <img src={photo} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className="photos-section">
          {user.username}'s Gallery
          {photos &&
            photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt="" />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Gallery;
