import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Booking = () => {
  let params = useParams();

  const [user, setUser] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [okMsg, setOkMsg] = useState("");
  //Form Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    async function fetchPhotographers() {
      const response = await axios.get(
        `http://localhost:3001/photographers/${params.uid}`
      );
      setUser(response.data);
    }
    fetchPhotographers();
  }, [params.uid]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:3001/book/${params.uid}`, {
        name,
        email,
        phone,
        date,
        time,
        comments,
      });
      setOkMsg(
        `Booking of ${
          user.fullname ? user.fullname : "@" + user.username
        } successfull`
      );
    } catch (error) {
      setErrorMsg("Error booking");
    }
  };

  return (
    <div>
      <h1>
        You are booking {user.fullname ? user.fullname : "@" + user.username}
      </h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-card">
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <br />
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <br />
          <input
            type="time"
            id="time"
            name="time"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            id="comments"
            name="comments"
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></input>
          <br />
          <button className="book-btn">Book</button>
          <div id="errorMsg">{errorMsg ? errorMsg : ""}</div>
          <div id="okMsg">{okMsg ? okMsg : ""}</div>
        </div>
        <div className="booking-photo">
          <img src={require("./booking.jpg")} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Booking;
