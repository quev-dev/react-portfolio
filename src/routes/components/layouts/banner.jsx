// * Import Graphics & Particles
import Socials from '../../components/interfaces/socials';
import BannerParticles from "../other/BannerParticles";
import iconCaretdown from '../../../assets/icons/caretdown.svg';

// * Render Banner
function Banner() {
  return (
    <section id="sec-banner" className="hidden site-section anim-slideSection">

      {/* Text */}
      <div id="particle-container">
        {/* <img id="portrait-banner" src={portraitBanner} alt=""/> */}
        <h1 className="banner-header">QuevDev</h1>
        <h3 className="banner-subheader">Front-End Developer</h3>
        <p id = "banner-caption">
          Working to create tools with engaging UI and UX.
        </p>
      </div>

      {/* Socials */}
      <Socials></Socials>

      {/* Particle Background */}
      <BannerParticles></BannerParticles>

      {/* Scroll Indicator */}
      <div className="sticky-footer">
        <img id="scroll-indicator" src={iconCaretdown} alt=""/>
      </div>

    </section>
  );
}

export default Banner;