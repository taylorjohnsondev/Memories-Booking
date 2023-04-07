import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from "../components/LoadingBar/Loading";

const MyBookings = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [bookings, setBookings] = useState([]);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const token = savedUser.token;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `api/photographers/${params.uid}`
      );
      setUser(response.data);
      setBookings(response.data.bookings || []);
      setLoading(false);
    }
    fetchPhotographers();
  }, [params.uid]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await axios.get(
        `api/book/${params.uid}`
      );
      setBookings(response.data.bookings || []);
      setLoading(false);
    }
    fetchBookings();
  }, [params.uid, bookings]);

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {savedUser && savedUser.uid === params.uid ? (
        <>
          <div>
            <div>
              <p className="bookings-title">
                {user.fullname ? user.fullname : "@" + user.username}, here you
                can view your current bookings.
              </p>
            </div>
            <div className="review-cards">
              {bookings &&
                bookings.map((book) => (
                  <div className="reviews" key={book._id}>
                    <p className="review-card-name">{book.name}</p>
                    <p className="review-card-name">{book.date}</p>
                    <p className="review-card-stars">Time: {book.time}</p>
                    <p className="review-card-stars">
                      Location: {book.location}
                    </p>

                    <p>Email: {book.email}</p>
                    <p>Phone: {book.phone}</p>
                    <p>Comments: {book.comments}</p>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default MyBookings;
