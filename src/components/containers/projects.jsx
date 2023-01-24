// * ------------------------------------------------- Imports
// Images
import picMusic from '../../theme/images/content/page-soundcloud.jpg';
import picGames from '../../theme/images/content/page-games.jpg';
import picArt   from '../../theme/images/content/page-art.jpg';

// Icons
import iconFLStudio   from '../../theme/images/icons/iconFLStudio.png';
import iconGamemaker  from '../../theme/images/icons/iconGamemaker.png';
import iconAseprite   from '../../theme/images/icons/iconAseprite.png';
import iconClipStudio from '../../theme/images/icons/iconClipStudio.png';

// Scroll Animations
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * ------------------------------------------------- Handle Projects Section
// Render Projects Section
function Projects() {
  return (
    <section id="sec-projects" className="hidden site-section anim-slideSection">

      {/* Overview */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
      <div id="projects-overview">
          <h2>Projects</h2>
          <p>You can take a look at some of the projects I've created through the links below.</p>
      </div>
      </AnimationOnScroll>

      {/* All Projects */}
      <section id="projects-container">

        {
          // * ----------------------------------------------- MUSIC
        }
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="project-article" id="pa-music">

          {/* Visuals */}
          <div className="project-visuals">
            <h3>Songs & Albums</h3>
            <img className="project-pic" src={picMusic} alt=""/>
          </div>

          {/* Description */}
          <div className="project-desc">
            <div className="software-used">
              <img src={iconFLStudio} alt="" />
              <h6>Composed using FL Studio.</h6>
            </div>
            <p>
              You can listen to some of the music I've made through soundcloud.
            </p>
            <form action="https://soundcloud.com/quevdev/albums" target="_blank" rel="noreferrer">
              <button className="project-btn">
                Albums
              </button>
            </form>
          </div>

        </article>
        </AnimationOnScroll>

        {
          // * ----------------------------------------------- GAMEDEV
        }
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="project-article" id="pa-games">

          {/* Visuals */}
          <div className="project-visuals">
            <h3>Game Projects</h3>
            <img className="project-pic" src={picGames} alt=""/>
          </div>

          {/* Description */}
          <div className="project-desc">
            <div className="software-used">
              <img src={iconGamemaker} alt="" />
              <h6>Made using GameMaker.</h6>
            </div>
            <p>
              Check out some of the game projects I've worked on through itch.io.
            </p>
            <form action="https://quevdev.itch.io/" target="_blank" rel="noreferrer">
              <button className="project-btn">
                Games
              </button>
            </form>
          </div>

        </article>
        </AnimationOnScroll>

        {
          // * ----------------------------------------------- ART
        }
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="project-article" id="pa-art">

          {/* Visuals */}
          <div className="project-visuals">
            <h3>Artwork</h3>
            <img className="project-pic" src={picArt} alt=""/>
          </div>

          {/* Description */}
          <div className="project-desc">
            <div className="software-used">
              <img src={iconClipStudio} alt=""/>
              <img src={iconAseprite} alt=""/>
              <h6>I use Clip Studio Paint and Aseprite for art assets.</h6>
            </div>
            <p>
              Take a look at an archive of artworks I've made in the past.
            </p>
            <button className="project-btn inactive-btn">
              {/* <img src={iconLink} alt="" />
              Artwork */}
              (Art archive in the works.)
            </button>
          </div>

        </article>
        </AnimationOnScroll>

      </section>
    </section>
  );
}

// Export Projects Section
export default Projects;