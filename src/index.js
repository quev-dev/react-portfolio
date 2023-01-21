///@description Initialize App
// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Router
import { BrowserRouter } from 'react-router-dom';

// * ---------------------------------------------------- IMPORT STYLES
// Main Page
import './styles/normalize.css';
import './styles/index.css';
import './styles/navbar.css';

import './styles/banner.css';
import './styles/other/socials.css';

import './styles/sites.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/anims.css';

import './styles/resize.css'
import './styles/dropdown.css';

// Thank You
import './styles/other/thankyou.css';

// Particles
import './styles/other/particles.css'

// uh huh
import './styles/animations/loading.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);