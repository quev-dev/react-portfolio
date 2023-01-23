// * Imports
import iconTwitter from '../../../assets/icons/twitter.svg';
import iconSoundcloud from '../../../assets/icons/soundcloud.svg';
import iconGithub from '../../../assets/icons/tools/toolGithub.svg';
import iconLinkedin from '../../../assets/icons/linkedin.svg';
// import iconInstagram from '../../../assets/icons/instagram.svg';

// Draw Socials
function Socials() {
  return (
    <section id="socials-container">

      {
        // * CONTENTS - All of the social media links are displayed below.
      }
      {/* LinkedIn */}
      <a href="https://github.com/quev-dev" target="_blank" rel="noreferrer"
      className="socials-link inactive">
        <img className="icon-inactive" src={iconLinkedin} alt="" />
      </a>

      {/* Twitter */}
      <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconTwitter} alt="" />
      </a>

      {/* Github */}
      <a href="https://github.com/quev-dev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconGithub} alt="" />
      </a>

      {/* Instagram */}
      {/* <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconInstagram} alt="" />
      </a> */}

      {/* Soundcloud */}
      <a href="https://soundcloud.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconSoundcloud} alt="" />
      </a>

    </section>
  );
}

// Export
export default Socials;