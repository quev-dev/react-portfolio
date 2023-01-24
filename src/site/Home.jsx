// * ---------------------------------------------- Import Components
// Layouts
import Navbar from '../components/layouts/navbar';
import Footer from '../components/layouts/footer';
import Dropdown from '../components/layouts/dropdown';

// Containers
import Banner   from '../components/containers/banner';
import Aboutme  from '../components/containers/aboutme';
import Skills   from '../components/containers/skills';
import Sites    from '../components/containers/sites';
import Projects from '../components/containers/projects';
import Contact  from '../components/containers/contact';

// * ---------------------------------------------- Home Page
// Render Home
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

// Export Home
export default Home;