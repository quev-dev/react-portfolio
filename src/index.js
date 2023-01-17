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
import './styles/footer.css';

// Animations
import './styles/anims.css';

// Resizing
import './styles/resize.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);