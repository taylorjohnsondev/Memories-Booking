import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../components/LoadingBar/Loading";
import { useNavigate } from "react-router-dom";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [user, setUser] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [hoverValue, setHoverValue] = useState(undefined);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `api/photographers/${params.uid}`
      );
      setUser(response.data);
      setReviews(response.data.reviews || []);
      setLoading(false);
    }
    fetchPhotographers();
  }, [params.uid, reviews]);

  const handleClick = (value) => {
    setStars(value);
    console.log(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return <Loading />;
    }

    try {
      await axios.post(`api/review/${params.uid}`, {
        name,
        comment,
        stars,
      });
      console.log("W");
    } catch (error) {
      console.log("L");
    }
  };

  const starsdisplay = Array(5).fill(0);

  return (
    <>
      {savedUser && savedUser.uid === params.uid ? (
        <>
          <div>
            <button
              className="previous-page"
              onClick={() => navigate(`/photographers/${params.uid}`)}
            >
              Back to profile
            </button>
            <div>
              <p className="user-review-title">
                {user.fullname ? user.fullname : "@" + user.username}'s reviews!
              </p>
            </div>
            <div className="review-cards">
              {reviews &&
                reviews.map((review) => (
                  <div className="reviews" key={review._id}>
                    <p className="review-card-name">{review.name}</p>
                    <p>{review.comment}</p>
                    <p className="review-card-stars">
                      {review.stars} <FaStar size={30} color={colors.orange} />
                      stars!
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <button
            className="previous-page"
            onClick={() => navigate(`/photographers/${params.uid}`)}
          >
            Back to profile
          </button>
          <div className="create-review-card">
            <div className="review-form">
              <form onSubmit={handleSubmit}>
                <h1>
                  {" "}
                  Review {user.fullname ? user.fullname : "@" + user.username}
                </h1>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  id="review"
                  name="review"
                  placeholder="Comments..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className="stars-container">
                  {starsdisplay.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={40}
                        style={{ marginRight: 10, cursor: "pointer" }}
                        color={
                          (hoverValue || stars) > index
                            ? colors.orange
                            : colors.grey
                        }
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                      />
                    );
                  })}
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="review-cards">
            {reviews &&
              reviews.map((review) => (
                <div className="reviews" key={review._id}>
                  <p className="review-card-name">{review.name}</p>
                  <p>{review.comment}</p>
                  <p className="review-card-stars">
                    {review.stars} <FaStar size={30} color={colors.orange} />{" "}
                    stars!
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Review;
