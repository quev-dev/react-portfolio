// * ---------------------------------------------------------- Imports
// Icons
import iconTwitter    from '../../theme/images/icons/twitter.svg';
import iconSoundcloud from '../../theme/images/icons/soundcloud.svg';
import iconLinkedin   from '../../theme/images/icons/linkedin.svg';
import iconGithub     from '../../theme/images/tools/toolGithub.svg';

// * ---------------------------------------------------------- Handle Socials Section
// Render Socials Section
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

// Export Socials Section
export default Socials;