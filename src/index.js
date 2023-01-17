///@description Initialize App
// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import Styles
import './styles/normalize.css';
import './styles/index.css';
import './styles/navbar.css';
import './styles/banner.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/anims.css';

import './styles/resize.css'
import './styles/dropdown.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);