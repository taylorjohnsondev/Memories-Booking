import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";

const UserProfile = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
    }
    fetchPhotographers();
  }, [params.uid]);

  return (
    <div className="user-profile-page">
      <div className="user-profile">
        <div className="profile-pic">
          <img src={user.profile_image} alt="" />
          <p className="username-profile">
            <strong>{user.fullname}</strong>
            <br />
            <strong>{"@" + user.username}</strong>
          </p>
        </div>
        <div className="user-info-card">
          <ul className="profile-menu">
            {savedUser && savedUser.uid === params.uid ? (
              <div className="menu-options">
                <li
                  onClick={() => navigate(`/photographers/${params.uid}/edit`)}
                >
                  <FiEdit2 />
                  <p>Edit Profile</p>
                </li>
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
              <p>{user.bio}</p>
            </div>
            <div className="photos-section">
              <h2>Featured Photos</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card-content">
                    <div className="card-img">
                      <img
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-content">
                    <div className="card-img">
                      <img
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-content">
                    <div className="card-img">
                      <img
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default UserProfile;
