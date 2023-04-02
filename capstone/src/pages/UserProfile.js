import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { BsDoorOpen } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import Loading from "../components/LoadingBar/Loading";

const UserProfile = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const recentphotos = photos.slice(-3);
  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
      setPhotos(response.data.photos);
      setLoading(false);
    }
    fetchPhotographers();
  }, [params.uid]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="user-profile-page">
      <div className="user-profile">
        <div className="profile-pic">
          <img src={user.profile_image} alt="" />
          <p className="username-profile">
            <strong>{user.fullname}</strong>
            <br />
            <p>{"@" + user.username}</p>
          </p>
        </div>
        <div className="user-info-card">
          <ul className="profile-menu">
            {savedUser && savedUser.uid === params.uid ? (
              <div>
                <div className="menu-options">
                  <li
                    onClick={() =>
                      navigate(`/photographers/${params.uid}/edit`)
                    }
                  >
                    <FiEdit2 />
                    <p>Edit Profile</p>
                  </li>
                </div>
                <div className="menu-options">
                  <li
                    className="logout-btn-profile"
                    onClick={() => navigate(`/login`)}
                  >
                    <BsDoorOpen />
                    <p>Log Out</p>
                  </li>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="menu-options">
              <li>
                <RiGalleryLine />
                <div
                  onClick={() => navigate(`/gallery/${params.uid}`)}
                  className="menu-option-list"
                >
                  Gallery
                </div>
              </li>
            </div>

            <div className="menu-options review-option">
              <li>
                <MdOutlineReviews />
                <div
                  onClick={() => navigate(`/review/${params.uid}`)}
                  className="menu-option-list review-option"
                >
                  Reviews
                </div>
              </li>
            </div>
          </ul>
          {savedUser ? (
            ""
          ) : (
            <button
              className="book-now-btn"
              onClick={() => navigate(`/book/${params.uid}`)}
            >
              Book now!
            </button>
          )}
        </div>
        <div className="other-photographers">
          <div className="rate-card">
            <h5>Rates</h5>
            <div className="rate-container">
              <p>Portrait - $125 /hr</p>
            </div>
            <div className="rate-container">
              <p>Wedding - $1,500</p>
            </div>
            <div className="rate-container">
              <p>Newborn - $400</p>
            </div>
            <div className="rate-container">
              <p>Senior - $100 /hr</p>
            </div>
            <br />
          </div>
        </div>
        <main>
          <section>
            <div className="about-section">
              <h2>About Me</h2>
              <h3>Bio</h3>
              <p>{user.bio}</p>
              <h3>Location</h3>
              <p>{user.location}</p>
            </div>
              <div className="recent-section"> 
              <h2>Recent Photos</h2>

                <div className="gallery-photo-container">
                  {recentphotos &&
                    recentphotos.map((photo, index) => (
                      <div className="gallery-photo-item" key={index}>
                        <img src={`/gallery/${photo}`} alt="" />
                      </div>
                    ))}
                </div>
              </div>

            {savedUser ? (
              ""
            ) : (
              <div className="book-now-profile">
                <button onClick={() => navigate(`/book/${params.uid}`)}>
                  Book now!
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
      <br />
    </div>
  );
};

export default UserProfile;
