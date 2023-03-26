import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import Loading from "../components/LoadingBar/Loading";

const UserProfile = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const savedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
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
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/4942883/pexels-photo-4942883.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Column 1A"
                  />
                  <img
                    src="https://images.pexels.com/photos/4942920/pexels-photo-4942920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Column 1B"
                  />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/15930856/pexels-photo-15930856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Columb 2A"
                  />
                  <img
                    src="https://images.pexels.com/photos/15895541/pexels-photo-15895541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Columb 2B"
                  />
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img
                    src="https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Columb 3A"
                  />
                  <img
                    src="https://images.pexels.com/photos/15964784/pexels-photo-15964784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Columb 3B"
                  />
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
      <br />
    </div>
  );
};

export default UserProfile;
