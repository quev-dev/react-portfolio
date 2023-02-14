// * ---------------------------------------------------------- Imports
// Icons
import iconHTML       from '../../theme/images/tools/toolHTML.svg';
import iconCSS        from '../../theme/images/tools/toolCSS.svg';
import iconJavascript from '../../theme/images/tools/toolJavascript.svg';
import iconReact      from '../../theme/images/tools/toolReact.svg';
import iconGitbash    from '../../theme/images/tools/toolGitbash.svg';
import iconGithub     from '../../theme/images/tools/toolGithub.svg';
import iconVSCode     from '../../theme/images/tools/toolVSCode.svg';
import iconNodeJS     from '../../theme/images/tools/toolNodeJS.svg';
import iconPython     from '../../theme/images/tools/toolPython.svg';
import iconTailwind   from '../../theme/images/tools/toolTailwind.png';

// Scroll Animations
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * ---------------------------------------------------------- Skills Section
// Render Skills Section
function Skills() {
  return (
    <section id="sec-skills" className="site-section">
      {/* Header */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
      <div id="skill-desc">
        <h2>Skills</h2>
        <p>Here are some of the technologies I've used to build my web applications.</p>
      </div>
      </AnimationOnScroll>

      {/* Skill Icons */}
      <section id="skills-wrapper">
      <article id="skill-icon-container">

        {/* HTML */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconHTML} alt="" />
          <p>HTML</p>
        </div>
        </AnimationOnScroll>

        {/* CSS */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconCSS} alt="" />
          <p>CSS</p>
        </div>
        </AnimationOnScroll>

        {/* Tailwind CSS */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconTailwind} alt="" />
          <p>Tailwind</p>
        </div>
        </AnimationOnScroll>

        {/* Javascript */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconJavascript} alt="" />
          <p>Javascript</p>
        </div>
        </AnimationOnScroll>

        {/* Python */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconPython} alt="" />
          <p>Python</p>
        </div>
        </AnimationOnScroll>

        {/* Node JS */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconNodeJS} alt="" />
          <p>Node JS</p>
        </div>
        </AnimationOnScroll>

        {/* React */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconReact} alt="" />
          <p>React JS</p>
        </div>
        </AnimationOnScroll>

        {/* Gitbash */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconGitbash} alt="" />
          <p>Git Bash</p>
        </div>
        </AnimationOnScroll>

        {/* Github */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconGithub} alt="" />
          <p>Github</p>
        </div>
        </AnimationOnScroll>

        {/* VSCode */}
        <AnimationOnScroll animateIn="animate__flipInX" animateOnce="true">
        <div className="skill-card">
          <img src={iconVSCode} alt="" />
          <p>VS Code</p>
        </div>
        </AnimationOnScroll>

      </article>
      </section>
    </section>
  );
}

// Export Skills Section
export default Skills;