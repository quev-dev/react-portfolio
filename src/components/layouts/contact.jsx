import iconEnvelope from '../../assets/icons/envelope.svg';

function Contact() {
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
      <form action="" id="contact-form" className="contact-part">

        {/* Name */}
        <div className="form-element">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" placeholder="What's your name?" required
          className="form-input"/>
        </div>

        {/* Email */}
        <div className="form-element">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" placeholder="example2023@gmail.com" required
          className="form-input"/>
        </div>

        {/* Message */}
        <div className="form-element">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" rows="10" placeholder="What's on your mind?"
          className="form-input" required></textarea>
        </div>

        {/* Submit Button */}
        <button id="form-button">Submit</button>

      </form>

    </section>
  );
}

export default Contact;