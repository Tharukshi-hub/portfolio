 import React from "react";
import "./Contact.css";

function Contact({ setshowContact }) {
  return (
    <div className="contact">
      <div className="contact-card">

        <h2>Get In Touch</h2>

        <p className="intro">
          Hi, I'm Tharukshi 👋 <br />
          If you have a project or idea, feel free to contact me!
        </p>

        <p className="response-time">
          I usually respond within 24 hours
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <p>0702858636</p>
          <p>tharukshihansamali@email.com</p>
          <p>Sri Lanka</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            onClick={() => window.open("https://wa.me/94702858636")}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            onClick={() =>
            window.open("https://www.linkedin.com/in/tharukshi-hansamali-855826336")
            }
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            onClick={() => window.open("")}
           />
        </div>

        <button className="back-btn" onClick={() => setshowContact(false)}>
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default Contact;