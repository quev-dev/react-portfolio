// * Imports
import iconTwitter from '../../../assets/icons/twitter.svg';
import iconSoundcloud from '../../../assets/icons/soundcloud.svg';
import iconInstagram from '../../../assets/icons/instagram.svg';

// Draw Socials
function Socials() {
  return (
    <section id="socials-container">

      {
        // * CONTENTS - All of the social media links are displayed below.
      }
      {/* Twitter */}
      <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconTwitter} alt="" />
      </a>

      {/* Instagram */}
      <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconInstagram} alt="" />
      </a>

      {/* Soundcloud */}
      <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer"
      className="socials-link">
        <img src={iconSoundcloud} alt="" />
      </a>

    </section>
  );
}

// Export
export default Socials;