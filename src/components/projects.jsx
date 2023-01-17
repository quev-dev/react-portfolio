// Imports


// Render Projects
function Projects() {
  return (
    <section id="sec-projects" className="hidden site-section anim-slideSection">
        <div id="projects-overview">
            <h2>Projects</h2>
            <p>You can take a look at some of the projects I've created through the links below.</p>
        </div>
        <section id="projects-container">
            {/* Music */}
            <article className="project-article" id="pa-music">
                <form action="https://soundcloud.com/quevdev/albums">
                    <button id="btn-music"></button>
                </form>
                <h3>MUSIC</h3>
                <p>
                    Listen to the music pieces I've composed and uploaded to soundcloud.
                </p>
            </article>
            {/* Gamedev */}
            <article className="project-article" id="pa-games">
                <form action="https://quevdev.itch.io/">
                    <button id="btn-games"></button>
                </form>
                <h3>GAME PROJECTS</h3>
                <p>
                    Play the games and projects I've uploaded to itch.io.
                </p>
            </article>
            {/* Art */}
            <article className="project-article" id="pa-art">
                <form action="">
                    <button id="btn-art"></button>
                </form>
                <h3>ARTWORK</h3>
                <p>
                    View a catalogue of art pieces I've uploaded online.
                </p>
            </article>
        </section>
    </section>
  );
}

// Export Projects component
export default Projects;