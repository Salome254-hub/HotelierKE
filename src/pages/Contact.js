import React from "react";
import PizzaLeft from "../assets/fooda.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label> <br></br>
          <input name="name" placeholder="Enter full name..." type="text" /> <br></br>
          <label htmlFor="email">Email</label> <br></br>
          <input name="email" placeholder="Enter email..." type="email" /> <br></br>
          <label htmlFor="message">Message</label> <br></br>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea> <br></br>
          <button type="submit"> Send Message</button> <br></br>
        </form>
      </div>
    </div>
  );
}

export default Contact;
