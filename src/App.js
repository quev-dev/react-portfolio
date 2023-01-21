// * Import Routes & Pages
import Home from './routes/Home';
import ThankYou from './routes/ThankYou';
import NotFound from './routes/NotFound';
import { Route, Routes } from 'react-router-dom';

// TODO - Add 'alt' text to images/functions for screen-reader users.
// TODO - Add 'Skills' Section to the site and both navbars.
// TODO - Create scrolling-animations as you navigate the site.

// * Handle App
function App() {
  return (
    <div className = "App"> <Routes>
      
      {/* Home, Thank You */}
      <Route path="/" element = { <Home/> }></Route>
      <Route path="/thankyou" element = { <ThankYou/> }></Route>

      {
        // ! ----------------------------------------------------- Error Handling Pages
      }
      {/* Page Not Found */}
      <Route path="/notfound" element = { <NotFound/> }></Route>

    </Routes> </div>
  );
}

export default App;