import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GalleryUpload from "../components/GalleryUploader";

const Gallery = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [photos, setPhotos] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("memoriesuser"));

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `api/photographers/${params.uid}`
      );
      setUser(response.data);
      setPhotos(response.data.photos);
    }
    fetchUser();
  }, [params.uid]);

  return (
    <>
      {savedUser && savedUser.uid === params.uid ? (
        <>
          <button
            className="previous-page"
            onClick={() => navigate(`/photographers/${params.uid}`)}
          >
            Back to profile
          </button>
          <div className="gallery-upload-card">
            <div className="gallery-title-upload">
              <h2>Hello @{user.username}!</h2>
              <h4>Want to add photos to your gallery?</h4>
              <h5>5mb max, jpg and png only</h5>
              <GalleryUpload />
            </div>
          </div>
          <div className="gallery-section">
            <div className="gallery-photo-container">
              {photos &&
                photos.map((photo, index) => (
                  <div className="gallery-photo-item" key={index}>
                    <img src={`/${photo}`} alt="" /> 
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : ( 
        <>
          <button
            className="previous-page"
            onClick={() => navigate(`/photographers/${params.uid}`)}
          >
            Back to profile
          </button>
          <div className="gallery-section">
            <h2>@{user.username}'s Gallery</h2>
            <div className="gallery-photo-container">
              {photos &&
                photos.map((photo, index) => (
                  <div className="gallery-photo-item" key={index}>
                    <img src={`/${photo}`} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
