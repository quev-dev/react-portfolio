///@description Create Dropdown Menu
// Import Graphics
import iconEnvelope from '../../../assets/icons/envelope.svg';
import wavyBorder from '../../../assets/borders/borderNav1.svg';

// Import React Scrolling
import { Link } from 'react-scroll';

// Handle Dropdown Layout
function Dropdown() {
  return (
    <div>
      {/* Navigation Menu */}
      <nav id="nav-dropdown">
        {/* List Items */}
        <ul>
          {/* About */}
          <Link
            to="sec-aboutme" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}>
            About
          </Link>
          <div className="empty-gap"></div>

          {/* Skills */}
          <Link
            to="sec-skills" className="scroll-link"
            spy={true} smooth={true} offset={-100} duration={500}>
            Skills
          </Link>
          <div className="empty-gap"></div>

          {/* Sites */}
          <Link
            to="sec-sites" className="scroll-link"
            spy={true} smooth={true} offset={-125} duration={500}
            >  
            Web-Apps
          </Link>
          <div className="empty-gap"></div>

          {/* Projects */}
          <Link
            to="sec-projects" className="scroll-link"
            spy={true} smooth={true} offset={-150} duration={500}>
            Projects
          </Link>
          <div className="empty-gap"></div>

          {/* Contact */}
          <Link id="nav-dropdown-contact"
            to="sec-contact" className="scroll-link"
            spy={true} smooth={true} offset={-200} duration={500}>
            <img className="icon-white" src={iconEnvelope} alt="" />
            Contact Me
          </Link>
        </ul>

        {/* Border */}
        <div id="borderNavbarDropdown">
          <img src={wavyBorder} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Dropdown;