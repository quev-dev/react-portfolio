// * Import Graphics & Particles
// import portraitBanner from '../../../assets/images/profile-large.png';
import BannerParticles from "../other/BannerParticles";

// * Render Banner
function Banner() {
  return (
    <section id="sec-banner" className="hidden site-section anim-slideSection">
      <div id="particle-container">
        {/* <img id="portrait-banner" src={portraitBanner} alt=""/> */}
        <h1 className="banner-header">QuevDev</h1>
        <h3 className="banner-subheader">Front-End Developer</h3>
        <p id = "banner-caption">
          Working to create tools with engaging UI and UX.
        </p>
      </div>


      <BannerParticles></BannerParticles>


    </section>
  );
}

export default Banner;