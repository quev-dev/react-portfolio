///@description Create Footer
// Import Graphics
import iconTwitter from '../../../assets/icons/twitter.svg';
import iconSoundcloud from '../../../assets/icons/soundcloud.svg';
import borderFooter from '../../../assets/borders/borderFooter.svg';
// import iconLinkedin from '../assets/icons/linkedin.svg';

// Handle Footer Component
function Footer() {
  // Render Footer
  return (
    <div>

        <div id="borderFooter">
            <img src={borderFooter} alt="" />
        </div>

        <footer id="sec-footer">
        {/* Main Footer Contents */}
        <main id="sec-footer-main">
            <div id="footer-socials">
                <a href="https://twitter.com/quevdev" target="_blank" rel="noreferrer">
                    <button className="btn-social">
                    <img src={iconTwitter} alt="Twitter Icon" className="img-svg"></img>
                    </button>
                </a>
                <a href="https://soundcloud.com/quevdev" target="_blank" rel="noreferrer">
                    <button className="btn-social">
                    <img src={iconSoundcloud} alt="Soundcloud Icon" className="img-svg"></img>
                    </button>
                </a>
                {/*
                <a href="https://www.google.com/"><button className="btn-social">
                    <img src={iconLinkedin} alt="LinkedIn Icon" className="img-svg"></img>
                </button></a>
                */}
            </div>
            
            <div id="footer-resources">
                <h5>Resources used for creating this site:</h5>
                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node JS</a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
                <a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Icons</a>
            </div>

            <div id="footer-copyright">
                <p>&copy; QuevDev, 2023</p>
            </div>
        </main>

        {/* Github Link */}
        {/*
        <aside id="sec-footer-aside">
            <p>
                If you'd like, you may view the source code for this website 
                on github. This is mainly for the individuals who I've asked to 
                critique my programming, and for future employers.
            </p>
            <a href="https://www.google.com/"><button>View Source Code</button></a>
        </aside>
        */}
        </footer>
    </div>
    
  );
}

// Export Footer
export default Footer;