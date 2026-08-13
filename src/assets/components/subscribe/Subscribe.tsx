import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
        <div className="content">
          <h2>Join Our MonkyCommunity</h2>
          <form
            action="https://forminit.com/f/lpbx8rev8vf"
            method="POST"
            target="_blank"
            encType="multipart/form-data"
          >
            <div className="form-container display-col">
              <input
                type="email"
                name="fi-sender-email"
                placeholder="Enter your email"
                required
              />
              <input
                type="text"
                name="fi-sender-fullName"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-txtarea">
              <textarea
                className="form-control"
                name="fi-text-message"
                placeholder="Tu mensaje"
                rows={2}
                required
              ></textarea>
              <div className="form-container">
                <input
                  type="checkbox"
                  name="fi-checkbox-terms"
                  value="accepted"
                  required
                />
                <p>I agree to the terms and conditions</p>
              </div>
              <button className="btn" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
