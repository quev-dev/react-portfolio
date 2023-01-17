///@description Create Dropdown Menu
// Import Graphics
import iconEnvelope from '../../assets/icons/envelope.svg';

// Import React Scrolling
import { Link } from 'react-scroll';

// Handle Dropdown Layout
function Dropdown() {
  return (
    <nav id="nav-dropdown">
      {/* List Items */}
      <ul>
        {/* About */}
        <Link
          to="sec-aboutme" className="scroll-link"
          spy={true} smooth={true} offset={20} duration={500}>
          About
        </Link>
        <div className="empty-gap"></div>

        {/* Sites */}
        <Link
          to="sec-sites" className="scroll-link"
          spy={true} smooth={true} offset={-100} duration={500}
          >  
          Sites
        </Link>
        <div className="empty-gap"></div>

        {/* Projects */}
        <Link
          to="sec-projects" className="scroll-link"
          spy={true} smooth={true} offset={-100} duration={500}>
          Projects
        </Link>
        <div className="empty-gap"></div>

        {/* Contact */}
        <Link id="nav-dropdown-contact"
          to="sec-contact" className="scroll-link"
          spy={true} smooth={true} offset={-125} duration={500}>
          <img className="icon-white" src={iconEnvelope} alt="" />
          Contact Me
        </Link>
        <div className="empty-gap"></div>
      </ul>
    </nav>
  );
}

export default Dropdown;