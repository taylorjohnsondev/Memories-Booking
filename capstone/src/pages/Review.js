import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = () => {
  let params = useParams();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);
  const [user, setUser] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [hoverValue, setHoverValue] = useState(undefined);
  const savedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
      setReviews(response.data.reviews || []);
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

    try {
      await axios.post(`http://localhost:3001/review/${params.uid}`, {
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
          <div className="pfp-username-card">
            <strong>
              {user.fullname ? user.fullname : "@" + user.username}, here you
              can look at your reviews.
            </strong>

            <div className="review-cards">
              {reviews &&
                reviews.map((review) => (
                  <div className="reviews" key={review._id}>
                    <p>{review.name}</p>
                    <p>{review.comment}</p>
                    <p>
                      {review.stars} <FaStar />
                    </p>
                  </div>
                ))} 
            </div>
          </div>
        </>
      ) : (
        <div>
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
                  <p>{review.name}</p>
                  <p>{review.comment}</p>
                  <p>
                    {review.stars} <FaStar />
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
