// * ---------------------------------------------------- Import Parts
// React
import React    from 'react';
import ReactDOM from 'react-dom/client';
import App      from './App';

// React Router
import { BrowserRouter } from 'react-router-dom';

// ! -------------------------------------------------- Archive
// Main Page
// import './styles/normalize.css';
// import './styles/index.css';
// import './styles/navbar.css';

// import './styles/banner.css';
// import './styles/other/socials.css';
// import './styles/layouts/aboutme.css';
// import './styles/layouts/skills.css';

// import './styles/sites.css';
// import './styles/projects.css';
// import './styles/contact.css';
// import './styles/footer.css';
// import './styles/anims.css';

// import './styles/resize.css'
// import './styles/dropdown.css';

// Thank You
// import './styles/other/thankyou.css';

// Particles
// import './styles/other/particles.css'

// uh huh
// import './styles/animations/loading.css';

// * ---------------------------------------------------- Import Styles
// Core Styles
import './theme/styles/core/normalize.css';
import './theme/styles/core/index.css';
import './theme/styles/core/particles.css';
import './theme/styles/core/anims.css';

// Container Styles
import './theme/styles/containers/navbar.css';
import './theme/styles/containers/dropdown.css';
import './theme/styles/containers/banner.css';
import './theme/styles/containers/socials.css';
import './theme/styles/containers/aboutme.css';
import './theme/styles/containers/skills.css';
import './theme/styles/containers/sites.css';
import './theme/styles/containers/projects.css';
import './theme/styles/containers/contact.css';
import './theme/styles/containers/footer.css';

// Page Styles
import './theme/styles/pages/thankyou.css';
import './theme/styles/pages/loading.css';

// Handle Resize Styles Last (Specific configurations for mobile/desktop)
import './theme/styles/core/resize.css';

// * ---------------------------------------------------- Handle Root
// Create & Render Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);