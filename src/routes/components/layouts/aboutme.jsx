///@description About Me Section
// Import Images
import img2 from '../../../assets/images/about-img2.png';
import img3 from '../../../assets/images/about-img3.png';

// Render Aboutme
function Aboutme() {
  return (
    <article id="sec-aboutme" className="hidden site-section anim-slideSection">

      {/* Text */}
      <div>
        <h2>About me</h2>
        <p>
          Currently studying web development, along with Python programming!
        </p>
        <p>
          In my free time, I work on game development, art and music composition - 
          some of the projects I've created can be viewed below.
        </p>
        <p>
          You can also check out some of the web apps I've built down below.
        </p>
      </div>

      {/* Images */}
      <div id="aboutme-img">
        <img src={img3} alt="" />
        <p>Screenshot from a game project.</p>

        <img src={img2} alt="" />
        <p>Painting study created in 2022.</p>
      </div>

    </article>
  );
}

export default Aboutme;