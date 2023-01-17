///@description Create Navbar
// Import Graphics
import iconEnvelope from '../../assets/icons/envelope.svg';
import portraitMini from '../../assets/images/profile-mini.png';
import borderNavbar1 from '../../assets/borders/borderNav1.svg';

// Import React Scrolling
import { Link } from 'react-scroll';

// Import Tooltip
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// Render Navbar
function Navbar() {
  return (
    <div>

      {/* Navigation Bar */}
      <header id="navbar">
        
        {/* Discord Tag */}
        <img id="portrait-mini" data-tooltip-content="Copy Discord tag"
          src={portraitMini} 
          onClick={() => {
            navigator.clipboard.writeText('Quevim#2298');
          }}
        alt=""/>
        <ReactTooltip anchorId="portrait-mini"/>

        {/* Navigation */}
        <ul className="navbar-links">
          <Link
            to="sec-aboutme" className="scroll-link"
            spy={true} smooth={true} offset={20} duration={500}>
            About
          </Link>
          <Link
            to="sec-projects" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}>
            Projects
          </Link>
        </ul>

        {/* Contact Button */}
        <Link
          to="sec-contact" className="scroll-link"
          spy={true} smooth={true} offset={-125} duration={500}>
          <button>
            <img src={iconEnvelope} alt="" className="img-svg"/>
            Contact
          </button>
        </Link>

      </header>
      
      {/* Border */}
      <div id="borderNavbar">
        <img src={borderNavbar1} alt="" />
      </div>

    </div>
  );
}

// Export Navbar part
export default Navbar;