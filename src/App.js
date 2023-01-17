///@description Handle Application
// Import Components
import Navbar from './components/navbar';
import Banner from './components/banner';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Footer from './components/footer';

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