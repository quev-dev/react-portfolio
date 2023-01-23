///@description About Me Section
// Import Images
// import img2 from '../../../assets/images/about-img2.png';
// import img3 from '../../../assets/images/about-img3.png';

// Render Aboutme
function Aboutme() {
  return (
    <article id="sec-aboutme" className="hidden site-section anim-slideSection">

      {/* Text */}
      <div>
        <h2>About me</h2>
        <p>
          I'm a front-end developer creating web applications, working towards
          becoming a full-stack developer.
        </p>
        <p>
          Away from web development, I work on game development and create my
          own music and art assets.
        </p>
      </div>

      {/* Images */}
      {/* <div id="aboutme-img">
        <img src={img3} alt="" />
        <p>Screenshot from a game project.</p>

        <img src={img2} alt="" />
        <p>Painting study created in 2022.</p>
      </div> */}

    </article>
  );
}

export default Aboutme;