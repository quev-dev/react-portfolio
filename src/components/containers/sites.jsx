// * --------------------------------------------------- Imports
// Icons
import iconCone from '../../theme/images/icons/cone.svg';
import iconCloud from '../../theme/images/icons/cloud.svg';
import iconGitHub from '../../theme/images/icons/github.svg';

// Screenshots / Logos
import logoWageInsight from '../../theme/images/logos/logo-WageInsight.png';
import logoSocialMould from '../../theme/images/logos/logo-SocialMould.png';

// Gifs
import gifWageInsight from '../../theme/images/videos/wageInsight.gif';
import gifSocialMould from '../../theme/images/videos/socialMould.gif';

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
        <p>Try out a selection of web applications I've created.</p>
        <p>Both a live version and a GitHub repository are available for each project!</p>
      </div>
      </AnimationOnScroll>

      {/* Projects */}
      <div id="webapps-container">

        
        {/* Wage Insight */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="webapp-card">
          
          {/* Webapp Contents */}
          <div className="webapp-card-contents">
          <img src={logoWageInsight} alt="Wage Insight Logo" className="webapp-logo"/>
            <h3>Wage Insight</h3>
            <p>
              Get rough estimates on your weekly, monthly and
              yearly expenses.
            </p>
          </div>

          {/* Webapp Image & Links */}
          <div className="webapp-card-contents">
            <img src={gifWageInsight} alt="Demo of Wage Insight" className="webapp-pic"/>
            <div>

              <a rel="noreferrer" target="_blank" href="https://wage-insight.netlify.app/">
              <button className="webapp-btn">
                <img src={iconCloud} alt="Cloud Icon"/>
                Live
              </button>
              </a>
              
              <a rel="noreferrer" target="_blank" href="https://github.com/quev-dev/wage-insight">
              <button className="webapp-btn">
                <img src={iconGitHub} alt="GitHub Icon" />
                Github
              </button>
              </a>

            </div>
          </div>
        </article>
        </AnimationOnScroll>

        {/* Social Mould */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="webapp-card">
          
          {/* Webapp Contents */}
          <div className="webapp-card-contents">
          <img src={logoSocialMould} alt="Social Mould Logo" className="webapp-logo"/>
            <h3>Social Mould</h3>
            <p>
              Generate a professional social media profile with a touch of your personality.
            </p>
          </div>

          {/* Webapp Image & Links */}
          <div className="webapp-card-contents">
            <img src={gifSocialMould} alt="Demo of Social Mould" className="webapp-pic"/>
            <div>

              <a rel="noreferrer" target="_blank" href="https://social-mould.netlify.app/">
              <button className="webapp-btn">
                <img src={iconCloud} alt="Cloud Icon"/>
                Live
              </button>
              </a>
              
              <a rel="noreferrer" target="_blank" href="https://github.com/quev-dev/social-mould">
              <button className="webapp-btn">
                <img src={iconGitHub} alt="GitHub Icon" />
                Github
              </button>
              </a>

            </div>
          </div>
        </article>
        </AnimationOnScroll>

        {/* Coming Soon */}
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <article className="webapp-wip webapp-card">
          <div className="webapp-card-contents">
            <h3><i>More coming soon.</i></h3>
          </div>
          <div className="webapp-card-contents">
            <img src={iconCone} alt="" className="icon-accent"/>
          </div>
        </article>
        </AnimationOnScroll>

      </div>
    </section>
  );
}

// Export Webapps Section
export default Sites;