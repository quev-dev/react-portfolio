// * ----------------------------------------------------- Imports
// Icons, Portrait & Navbar
import iconEnvelope from '../../theme/images/icons/envelope.svg';
import iconHamburger from '../../theme/images/icons/hamburger.svg';
import portraitMini from '../../theme/images/content/profile-mini.jpg';
import borderNavbar1 from '../../theme/images/environment/borderNav1.svg';

// React Scrolling
import { Link } from 'react-scroll';

// React Tooltips
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// React Parts
import { useState } from 'react';

// * ----------------------------------------------------- Handle Navbar
// Render Navbar
function Navbar(props) {
  // Handle Hamburger Menu
  const [open, setOpen] = useState(false);

  // Render Navbar
  return (
    <div>

      {/* Navigation Bar */}
      <header id="navbar">
        
        {/* Discord Tag */}
        <Link
          to="sec-banner" className="scroll-link"
          spy={true} smooth={true} offset={0} duration={500}>
          <img id="portrait-mini" data-tooltip-content="Return to top"
            src={portraitMini} 
            // onClick={() => {
            //   navigator.clipboard.writeText('Quevim#2298');
            // }}
          alt=""/>
        </Link>

        <ReactTooltip anchorId="portrait-mini"/>

        {/* Hamburger Menu Icon (only show on smaller devices) */}
        <a href="#0" id="navbar-hamburger" data-tooltip-content="Navigation options"
        onClick={() => setOpen(!open)}>
          <img src={iconHamburger} alt="" />
        </a>
        <ReactTooltip anchorId="navbar-hamburger"/>

        {/* Dropdown */}
        {open && props.children}

        {/* Navigation */}
        <ul className="navbar-links" id="main-navbar-links">
          <Link
            to="sec-aboutme" className="scroll-link"
            spy={true} smooth={true} offset={20} duration={500}>
            About
          </Link>
          <Link
            to="sec-skills" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}
            >  
            Skills
          </Link>
          <Link
            to="sec-sites" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}
            >  
            Web-Apps
          </Link>
          <Link
            to="sec-projects" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}>
            Projects
          </Link>
        </ul>

        {/* Contact Button */}
        <Link id="navbar-contact"
          to="sec-contact" className="scroll-link"
          spy={true} smooth={true} offset={-125} duration={500}>
          <button id = "navbar-contact-btn">
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

// Export Navbar
export default Navbar;