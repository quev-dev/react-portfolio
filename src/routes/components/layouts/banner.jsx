// * Import Graphics & Particles
import Socials from '../../components/interfaces/socials';
import BannerParticles from "../other/BannerParticles";
import iconCaretdown from '../../../assets/icons/caretdown.svg';

import "animate.css/animate.min.css";

// * Render Banner
function Banner() {
  return (
    <section id="sec-banner" className="hidden site-section anim-slideSection">

      {/* Text Group */}
      <div id="particle-container"
      className="animate__animated animate__fadeInLeft">
        {/* <img id="portrait-banner" src={portraitBanner} alt=""/> */}
        <h1 className="banner-header">QuevDev</h1>
        <h3 className="banner-subheader animate__animated animate__fadeInLeft animate__delay-1s">Front-End Developer</h3>
        <p id = "banner-caption" className="animate__animated animate__fadeInLeft animate__delay-2s">
          Working to create tools with engaging UI and UX.
        </p>
      </div>

      {/* Socials */}
      <Socials></Socials>

      {/* Particle Background */}
      <BannerParticles></BannerParticles>

      {/* Scroll Indicator */}
      <div className="sticky-footer">
        <img id="scroll-indicator" 
        className="animate__animated animate__flipInX animate__delay-3s"
        src={iconCaretdown} alt=""/>
      </div>

    </section>
  );
}

export default Banner;