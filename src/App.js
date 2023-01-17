///@description Handle Application
// Import Components
import Navbar from './components/templates/navbar';
import Banner from './components/layouts/banner';
import Aboutme from './components/layouts/aboutme';
import Projects from './components/layouts/projects';
import Footer from './components/templates/footer';

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

      <Footer/>

    </div>
  );
}

export default App;