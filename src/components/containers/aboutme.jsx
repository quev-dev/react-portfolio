// * ------------------------------------------------- Imports
// Icons
import iconWebdev from '../../theme/images/icons/webdev.svg';

// Scroll Animations
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * ------------------------------------------------- Handle Aboutme Section
// Render Aboutme section
function Aboutme() {
  return (
    <article id="sec-aboutme" className="hidden site-section anim-slideSection">

      {/* Text */}
      <div className="aboutme-item">
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <h2 id="aboutme-header" className="section-header">About me</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <p className="aboutme-caption">
            I'm a front-end developer, working to create unique and responsive web applications.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <p className="aboutme-caption">
            Away from web development, I work on small side projects consisting of
            game development, music composition, and artwork.
          </p>
        </AnimationOnScroll>
      </div>

      {/* Images */}
      <div className="aboutme-item" id="aboutme-images">
        <AnimationOnScroll animateIn="animate__bounceInRight" duration="1" animateOnce="true">
          <img src={iconWebdev} alt="" />
        </AnimationOnScroll>
      </div>

    </article>
  );
}

// Export aboutme
export default Aboutme;