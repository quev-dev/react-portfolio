// * --------------------------------------------------------- Imports
// Icons
import iconTwitter      from '../../theme/images/icons/twitter.svg';
import iconSoundcloud   from '../../theme/images/icons/soundcloud.svg';
import iconLinkedin     from '../../theme/images/icons/linkedin.svg';
import iconGithub       from '../../theme/images/tools/toolGithub.svg';

// Border
import borderFooter from '../../theme/images/environment/borderFooter.svg';

// * --------------------------------------------------------- Handle Footer
// Render Footer
function Footer() {
  return (
    <div>
        
        {/* Border */}
        <div id="borderFooter">
            <img src={borderFooter} alt="" />
        </div>

        {/* Main Footer Contents */}
        <footer id="sec-footer">
        <main id="sec-footer-main">

            {/* Socials */}
            <section id="sec-footer-start">
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
                    <a href="https://github.com/quev-dev" target="_blank" rel="noreferrer">
                        <button className="btn-social">
                        <img src={iconGithub} alt="Github Icon" className="img-svg"></img>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/nevin-klein/" target="_blank" rel="noreferrer">
                        <button className="btn-social">
                        <img src={iconLinkedin} alt="LinkedIn Icon" className="img-svg"></img>
                        </button>
                    </a>
                    {/*
                    <a href="https://www.google.com/"><button className="btn-social">
                        <img src={iconLinkedin} alt="LinkedIn Icon" className="img-svg"></img>
                    </button></a>
                    */}
                </div>

                {/* Copyright */}
                <div id="footer-copyright">
                    <p>&copy; Nevin Klein, 2023</p>
                </div>
            </section>

            {/* Resources */}
            <div id="footer-resources">
                <h5>Resources used for creating this site:</h5>
                <a href="https://icons.getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap Icons</a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React JS</a>
                <a href="https://www.npmjs.com/package/react-tsparticles" target="_blank" rel="noreferrer">react-tsparticles</a>
                <a href="https://www.npmjs.com/package/react-tooltip" target="_blank" rel="noreferrer">react-tooltip</a>
                <a href="https://haikei.app/" target="_blank" rel="noreferrer">Haikei</a>
                <a href="https://animate.style/" target="_blank" rel="noreferrer">animate.css</a>
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