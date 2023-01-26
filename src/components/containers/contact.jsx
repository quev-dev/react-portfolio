// * ------------------------------------------------ Imports
// React & Email JS
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Scroll Animations
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Icons
import iconEllipsis from "../../theme/images/icons/ellipsis.svg";

// * ------------------------------------------------ Contact Page
// Connect to Email JS & Render Contact Page
function Contact() {
  // Handle Email System
  const [sentEmail, toggleSentEmail] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    // Send email contents to account
    // * (The arguments for emailjs.sendForm() have been hidden for security purposes.)
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uy60r79",
        "template_y7va01q",
        form.current,
        "Y3zkMtCRIXlTUqifl"
      )

      // Success - Go to thank you page
      .then((result) => {
        console.log("Message was successful!");
        console.log(result.text);
        window.location.href = "/thankyou";

        // Error
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Toggle (at bottom of email JS's 'sendEmail()' function)
    toggleSentEmail(!sentEmail);
  }

  return (
    <section id="sec-contact" className="site-section anim-slideSection">
      {/* Description */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
        <article id="contact-desc" className="contact-part">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, send an email my way!</p>
        </article>
      </AnimationOnScroll>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="contact-part"
      >
        {/* Name */}
        <div className="form-element">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="What's your name?"
            required
            className="form-input"
          />
        </div>

        {/* Email */}
        <div className="form-element">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="What's your email address?"
            required
            className="form-input"
            name="user_email"
          />
        </div>

        {/* Message */}
        <div className="form-element">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            rows="10"
            placeholder="What's on your mind?"
            className="form-input"
            required
            name="message"
          ></textarea>
        </div>

        {/* Submit Button */}
        {!sentEmail && <button id="form-button">Submit</button>}
        {sentEmail && (
          <div>
            {/* Loading Icon */}
            <img
              className="icon-loading animate__animated animate__rubberBand animate__infinite"
              src={iconEllipsis}
              alt=""
            />
          </div>
        )}

        {sentEmail && <aside id="contact-cover"></aside>}
      </form>
    </section>
  );
}

// Export Contact Page
export default Contact;
