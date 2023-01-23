// * Import Tools
// Graphics
import iconHTML from '../../../assets/icons/tools/toolHTML.svg';
import iconCSS from '../../../assets/icons/tools/toolCSS.svg';
import iconJavascript from '../../../assets/icons/tools/toolJavascript.svg';
import iconReact from '../../../assets/icons/tools/toolReact.svg';
import iconGitbash from '../../../assets/icons/tools/toolGitbash.svg';
import iconVSCode from '../../../assets/icons/tools/toolVSCode.svg';
import iconNodeJS from '../../../assets/icons/tools/toolNodeJS.svg';
import iconPython from '../../../assets/icons/tools/toolPython.svg';

// Animation System
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

// * Render Skills Page
function Skills() {
  return (
    <section id="sec-skills" className="site-section">
      {/* Header */}
      <AnimationOnScroll animateIn="animate__fadeInDown" animateOnce="true">
      <div id="skill-desc">
        <h2>Skills</h2>
        <p>Here are some of the tools I've used to build my web applications.</p>
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

// Export Page
export default Skills;