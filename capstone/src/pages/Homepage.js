import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {/* FERNANDO */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-interval="5000"
        data-bs-touch="true"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="car1.jpg" className="d-block w-100" alt="slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Studio Sessions</h5>
              <p>
                Experience the magic of studio photography with our portrait,
                graduation, and corporate sessions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="car2.jpg" class="d-block w-100" alt="slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Outdoor Adventures</h5>
              <p>
                Celebrate your special moments in the great outdoors with our
                wedding, birthday, and event photography services.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="car3.jpg" class="d-block w-100" alt="slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Little Ones</h5>
              <p>
                Our children's photography sessions are designed to capture the
                milestones and playful moments of your child's life.{" "}
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ALYSSA */}
      <div className="split-screen">
        <div className="left-column">
          <div className="featured-photographers-card">
            <h2 className="featured-title">Featured Photographers</h2>
            <div className="photographers">
              <div className="photographer">
                <div className="circle">
                  <img
                    src="https://berify.com/blog/wp-content/uploads/2018/01/jingna-zhang.jpg"
                    alt=""
                  />
                </div>
                <div className="photographer-info">
                  <h3>Stephanie Yeoh</h3>
                  <p>Chicago, Illinois</p>
                  <Link
                    className="featured-btn"
                    to="/photographers/641433aac25660221b5db329"
                  >
                    View
                  </Link>
                </div>
              </div>
              <div className="photographer">
                <div className="circle">
                  <img
                    src="https://www.stylevore.com/wp-content/uploads/2019/06/0563eb038b53843c6ded6ace2b0c34f7.jpg"
                    alt=""
                  />
                </div>
                <div className="photographer-info">
                  <h3>Angela Roberts</h3>
                  <p>Miami, Florida</p>
                  <Link
                    className="featured-btn"
                    to="/photographers/641433d6c25660221b5db391"
                  >
                    View
                  </Link>
                </div>
              </div>
              <div className="photographer">
                <div className="circle">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/59d55d412aeba54362e00bb1/1547328988541-D732YCKXID8578E23KGT/_DSC7599ashleebrookecrop.jpg?format=1000w"
                    alt=""
                  />
                </div>
                <div className="photographer-info">
                  <h3>Shaun Smith</h3>
                  <p>NYC, New York</p>
                  <Link
                    className="featured-btn"
                    to="/photographers/641433fbc25660221b5db3c8"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          {user ? (
            <>
              <div className="featured-locations-card">
                <h2 className="featured-title">Welcome @{user.username}</h2>
                <br />
                <p>You are already a registered photographer</p> 
                <br />
              </div>
            </>
          ) : (
            <div className="featured-locations-card">
              <h2 className="featured-title">Are you a photographer?</h2>
              <br />
              <p>
                Joining Memories Booking will greatly enhance your visibility as
                a photographer and make it easier for clients to find and book
                your services. By signing up, you'll have access to a platform
                that connects you with potential clients, simplifies the booking
                process, and allows you to showcase your portfolio and
                professional credentials. Don't miss out on the opportunity to
                expand your client base and streamline your workflow – sign up
                with us today!
              </p>
              <br />
              <Link className="register-btn" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>
        <div className="about-card">
          <h2>
            Find and book photographers with our online booking system!
            <div className="about-info">
              <p>
                Browse through a list of photographers and their personal
                galleries to find the perfect match for you!
              </p>
              <p>We make booking easy.</p>
              <Link className="info-register-btn" to="/photographers">
                Browse Now!
              </Link>
              <img
                src={require("../components/memories1.png")}
                alt="Memories Logo"
              />
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
