// * --------------------------------------------------- Imports
// Icons
import iconCone from '../../theme/images/icons/cone.svg';

// Scroll Animations
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * --------------------------------------------------- Handle Web-Apps Section
// Render Webapps Section
function Sites() {
  return (
    <section id="sec-sites" className="site-section">
      {/* Header */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
      <div id="webapps-overview">
        <h2>Web Apps</h2>
        <p>Once I've built and uploaded  some web apps, you may view them here.</p>
      </div>
      </AnimationOnScroll>

      {/* Projects */}
      <div id="webapps-container">

        {/* Work-in-progress */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="webapp-wip webapp-card">

          {/* Webapp Contents */}
          <div className="webapp-card-contents">
            <h3>Progress Report</h3>
            <p>Currently in production.</p>
          </div>

          {/* Webapp Image & Links */}
          <div className="webapp-card-contents">
            <img src={iconCone} alt="" className="icon-accent"/>
            {/* <button className="webapp-btn">Live</button>
            <button className="webapp-btn">Github</button> */}
          </div>
        </article>
        </AnimationOnScroll>

      </div>
    </section>
  );
}

// Export Webapps Section
export default Sites;