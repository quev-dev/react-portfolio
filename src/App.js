///@description Handle Application
/// --- IMPORTS --- ///
// Templates
import Navbar from './components/templates/navbar';
import Footer from './components/templates/footer';

// Layouts
import Banner from './components/layouts/banner';
import Aboutme from './components/layouts/aboutme';
import Sites from './components/layouts/sites';
import Projects from './components/layouts/projects';
import Contact from './components/layouts/contact';

// Interfaces
import Dropdown from './components/interfaces/dropdown';

// Handle App
function App() {
  // Render App
  return (
    <div className="App">

      {/* Navigation Menu */}
      <Navbar>
        <Dropdown></Dropdown>
      </Navbar>

      {/* Introduction */}
      <Banner/>
      <Aboutme/>

      {/* Work */}
      <Sites/>
      <Projects/>
      <Contact/>

      {/* Extra Info */}
      <Footer/>

    </div>
  );
}

export default App;