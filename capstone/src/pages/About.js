import React from "react";
import { Link } from "react-router-dom";
import "../components/css/about.css";

export const About = () => {
  return (
    <div>
      <section className="bg-light py-5 shadow-sm">
        <div className="container mb-4 mb-md-5 mb-xl-6">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-xxl-8">
              <img
                className="img-fluid rounded shadow"
                loading="lazy"
                src="studio.jpg"
                alt="professional studio"
              />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-2 gy-md-0 justify-content-xxl-center">
            <div className="col-12 order-md-1 col-md-8 col-xxl-6">
              <div className="text-center text-md-start">
                <h2 className="display-3 fw-bold lh-1">Memories Booking</h2>
                <p className="text-secondary fs-4 mb-2">
                  By Memories Photography
                </p>
                <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
                <p>
                  Welcome to Memories, the premier photography booking website
                  designed to connect you with local, top-tier photographers who
                  specialize in capturing life's most precious moments. Our
                  platform is built by photographers, for photographers, meaning
                  that you can trust our network of exclusive professionals to
                  deliver stunning images that you'll treasure forever.
                </p>
                <p>
                  While we do offer access to our photography studio and
                  seasonal sets, our focus is on providing a seamless booking
                  experience that allows you to easily schedule your session,
                  browse portfolios, and connect with the perfect photographer
                  for your needs. Our easy-to-use platform makes it simple to
                  download your images once they're ready, ensuring that you can
                  quickly and easily enjoy your beautiful memories.
                </p>
                <p>
                  Whether you're looking for family photos, headshots, or
                  something in between, Memories is here to help you capture the
                  moments that matter most. Book your session today and let us
                  help you create memories that will last a lifetime.
                </p>
              </div> 
            </div>
            <div className="col-12 order-md-0 col-md-4 col-xxl-4">
              <div className="text-center text-md-start me-md-3 me-xl-5">
                <p className="mb-4">
                  <span className="d-block display-6 lh-1">
                    <b>Quality Guaranteed</b>
                  </span>
                  <span className="fs-4 text-secondary">
                    Certified Professional Photographer CPP
                  </span>
                </p>
                <div className="d-grid">
                  <Link
                    className="btn btn-primary btn-lg custom-button"
                    type="button"
                    to="/photographers"
                  >
                    Browse Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />


      <div className="col-md-10 col-xl-8 text-center mx-auto">
  <h1 className="mb-4">How it works</h1>
</div>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="how1.jpg" className="card-img-top howtoimage" alt="r1" style={{minHeight: '150px', maxHeight: '300px'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Book a Photographer</h5>
            <p className="card-text">Easily find and book your ideal photographer through our online platform. Browse by location, 
            portfolio, and style to discover a wide selection of talented photographers, and let them take care of your next photoshoot. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card h-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="how2.jpg" className="card-img-top howtoimage" alt="r1" style={{minHeight: '150px', maxHeight: '300px'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Have Fun on Your Photoshoot</h5>
            <p className="card-text">Communicate directly with your chosen photographer, receive helpful tips and reminders, 
            and show up on the day of your shoot for a personalized, enjoyable experience.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card h-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="how3.jpg" className="card-img-top howtoimage" alt="r1" style={{minHeight: '150px', maxHeight: '300px'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Share and Review</h5>
            <p className="card-text">Once your photos are ready, we'll send you a secure link where you can easily view and download your images.
             And don't forget to leave a review of your photographer to help future clients find their perfect match!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <br />
      <br />
      <br />

      <div className="col-md-10 col-xl-8 text-center mx-auto">
      
      <Link
                    className="btn btn-primary btn-lg custom-button"
                    type="button"
                    to="/photographers"
                  >
                    Find Photographer
                  </Link>

      </div>

      <br />
      <br />
      <br />

      <div class="col-md-10 col-xl-8 text-center mx-auto">
        <h1 class="mb-4">Testimonials</h1>
        <p
          style={{ fontSize: "21px" }}
          class="mb-4 pb-2 mb-md-5 pb-md-0 text-white"
        >
          Here are just a few of the testimonials from our satisfied customers.
          Our skilled photographers are passionate about capturing the essence
          of every subject, and our portfolio includes a wide range of styles to
          suit every need, from stunning landscape shots to vibrant cityscapes.
          Our commercial photography services are also a great option for
          businesses looking to showcase their products or services in the best
          possible light. Whether you're looking for a photographer for your
          wedding, family portraits, or corporate event, we've got you covered.
        </p>
      </div>

      <section className="d-flex justify-content-center align-items-center">
        <div className="row text-center d-flex align-items-stretch">
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundImage: `url('r1a.jpg')` }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="r1.jpg"
                  className="rounded-circle img-fluid"
                  alt="photographer"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Stephanie Yeoh</h4>
                <img src="5stars.jpg" alt="fivestar rating" />
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>"I was a bit nervous
                  about booking a photography session for the first time, but
                  Stephanie made the experience so easy and enjoyable. From
                  start to finish, she was professional, friendly, and attentive
                  to my needs. She took the time to understand my vision and
                  preferences, and she went above and beyond to make sure I was
                  comfortable and happy with the final results. I couldn't have
                  asked for a better photographer or a better experience. I
                  would definitely recommend Stephanie to anyone looking for a
                  talented and personable photographer."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundImage: `url('r2a.jpg')` }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="r2.jpg"
                  className="rounded-circle img-fluid"
                  alt="photographer"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Angela Roberts</h4>
                <img src="5stars.jpg" alt="fivestar rating" />
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>"Working with Angela
                  was a dream come true. As a small business owner, I needed a
                  professional portrait for my website and social media
                  presence. Angela took the time to understand my brand and
                  vision, and captured exactly what I was looking for. Her
                  attention to detail and creative eye resulted in a stunning
                  portrait that I am proud to display. I highly recommend Angela
                  to anyone looking for a talented and professional
                  photographer."
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div
                className="card-up"
                style={{ backgroundImage: `url('r3a.jpg')` }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src="r3.jpg"
                  className="rounded-circle img-fluid"
                  alt="photographer"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Shaun Smith</h4>
                <img src="5stars.jpg" alt="fivestar rating" />
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2"></i>"Shawn has a unique
                  talent for creating a relaxed and comfortable environment,
                  which made the entire experience enjoyable and stress-free. I
                  was beyond thrilled with the final product, and I cannot
                  recommend Shawn enough to anyone looking for a skilled and
                  professional photographer."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
