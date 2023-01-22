// * Import Graphics & emailjs
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Animation Functions
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * Handle & Render Contact Page
function Contact() {

  // * Handle Email System
  const form = useRef();
  function sendEmail(e) {

    // Send Email contents to account
    e.preventDefault();
    emailjs.sendForm('service_uy60r79', 'template_y7va01q', form.current, 'Y3zkMtCRIXlTUqifl')
      // * SUCCESS - Go to Thank You Page
      .then((result) => {
        console.log('Message was successful!')
        console.log(result.text);
        window.location.href = '/thankyou';
      // ! ERROR - Get error data & redirect user to error page
      }).catch((error) => {
        console.log(error.text);
      })

      // Reset Contact Fields
      e.target.reset();
  };

  return (
    <section id="sec-contact" className="site-section anim-slideSection">

      {/* Description */}
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
      <article id="contact-desc" className="contact-part">
        <h2>Contact Me</h2>
        {/* <div>
          <img src={iconEnvelope} alt="" />
        </div> */}
        <p>
          If you'd like to get in touch, send an email my way!
        </p>
      </article>
      </AnimationOnScroll>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} action="" id="contact-form" 
      className="contact-part">

        {/* Name */}
        <div className="form-element">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="user_name" placeholder="What's your name?" required
          className="form-input"/>
        </div>

        {/* Email */}
        <div className="form-element">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" placeholder="What's your email address?" required
          className="form-input" name="user_email"/>
        </div>

        {/* Message */}
        <div className="form-element">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" rows="10" placeholder="What's on your mind?"
          className="form-input" required name="message"></textarea>
        </div>

        {/* Submit Button */}
        <button id="form-button">Submit</button>

      </form>

    </section>
  );
}

export default Contact;