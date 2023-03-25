import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  let params = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
    }
    fetchPhotographers();
  }, [params.uid]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const stars = Array(5).fill(0);

  return (
    <div>
      <div className="create-review-card">
        <div className="review-form">
          <form>
            <h1>
              {" "}
              Review {user.fullname ? user.fullname : "@" + user.username}
            </h1>
            <input
              type="text"
              id="review"
              name="review"
              placeholder="Comments..."
            />
            <div className="stars-container">
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={40}
                    style={{ marginRight: 10, cursor: "pointer" }}
                    color={
                      (hoverValue || currentValue) > index
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
        <div className="reviews">
          <p>
            (comment) consectetur tempor minim quis sint irure eiusmod eiusmod
            consectetur sunt Lorem consequat adipisicing ex labore quis non
            consectetur laboris aute sunt cupidatat enim aliqua ut velit sint
            sint Lorem proident magna officia minim deserunt officia ullamco
            nulla excepteur in est commodo sit ullamco irure laborum velit aute
            velit ex id
          </p>
          <br />
          <p>(stars)</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
