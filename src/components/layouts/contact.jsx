// Import Graphics
import iconEnvelope from '../../assets/icons/envelope.svg';

// Import Email System
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  // Contact Function
  const form = useRef();
  function sendEmail(e) {
    // Prevent moving to different page
    e.preventDefault();

    // Send Email contents to account
    emailjs.sendForm('service_uy60r79', 'template_y7va01q', form.current, 'Y3zkMtCRIXlTUqifl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      // Reset Contact Fields
      e.target.reset();
  };

  return (
    <section id="sec-contact" className="site-section anim-slideSection">

      {/* Description */}
      <article id="contact-desc" className="contact-part">
        <h2>Contact Me</h2>
        <p>
          If you would like to contact me, I can be reached through my email
          listed below. You may also send me an email with the attached form.
        </p>
        <div>
          <img src={iconEnvelope} alt="" />
          <p>quevdev@outlook.com</p>
        </div>
      </article>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} action="" id="contact-form" className="contact-part">

        {/* Name */}
        <div className="form-element">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="user_name" placeholder="What's your name?" required
          className="form-input"/>
        </div>

        {/* Email */}
        <div className="form-element">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" placeholder="example2023@gmail.com" required
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