// * Import Components
// Layouts
import Navbar from './components/layouts/navbar';
import Banner from './components/layouts/banner';
import Aboutme from './components/layouts/aboutme';
import Skills from './components/layouts/skills';
import Sites from './components/layouts/sites';
import Projects from './components/layouts/projects';
import Contact from './components/layouts/contact';
import Footer from './components/layouts/footer';

// Interfaces
import Dropdown from './components/interfaces/dropdown';

// * Render Home Page
function Home() {
  return (
    <div>

      {/* Navbar */}
      <Navbar>
         <Dropdown></Dropdown>
      </Navbar>
        
      {/* Page Intro */}
      <Banner/>
      <Aboutme/>
      <Skills/>

      {/* Works */}
      <Sites/>
      <Projects/>
      <Contact/>

      {/* Resources & Copyright */}
      <Footer/>

    </div>
  );
}

export default Home;