///@description Create Banner
// Import Graphics
import portraitBanner from '../../assets/images/profile-large.png';

// Render Banner
function Banner() {
  return (
    <section id="sec-banner" className="hidden site-section anim-slideSection">
        <div>
          <img id="portrait-banner" src={portraitBanner} alt=""/>
          <h1 className="banner-header">QuevDev</h1>
          <h3 className="banner-subheader">Front-End Web Developer</h3>
          {/* <h4 className="banner-subheader">Florida, United States</h4> */}
        </div>
    </section>
  );
}

export default Banner;