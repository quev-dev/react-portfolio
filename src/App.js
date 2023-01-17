///@description Handle Application
import Navbar from './components/templates/navbar';
import Footer from './components/templates/footer';

import Banner from './components/layouts/banner';
import Aboutme from './components/layouts/aboutme';
import Projects from './components/layouts/projects';
import Contact from './components/layouts/contact';

// Handle App
function App() {
  // Render App
  return (
    <div className="App">

      {/* Import Parts */}
      <Navbar/>

      <Banner/>
      <Aboutme/>
      <Projects/>
      <Contact/>

      <Footer/>

    </div>
  );
}

export default App;