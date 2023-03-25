import React, { useState } from "react";

const Booking = () => {
  return (
    <div>
      <div className="booking-form">
        <div className="booking-card">
          <input
            type="text"
            id="first-name-input"
            placeholder="First Name"
            name="first-name"
          ></input>
          <br />
          <input
            type="text"
            id="last-name-input"
            name="last-name"
            placeholder="Last Name"
          ></input>
          <br />
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Email"
          ></input>
          <br />
          <input
            type="tel"
            id="phone-input"
            name="phone"
            placeholder="Phone Number"
          ></input>
          <br />
          <input
            type="date"
            id="date-input"
            name="date"
            placeholder="Date"
          ></input>
          <br />
          <input
            type="time"
            id="time-input"
            name="time"
            placeholder="Time"
          ></input>
          <br />
          <input
            type="text"
            id="comments-input"
            name="comments"
            placeholder="Additional Comments"
          ></input>
          <br />
          <button className="book-btn">Submit!</button>
        </div>
        <div className="booking-photo">
          <img src={require("./booking.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
