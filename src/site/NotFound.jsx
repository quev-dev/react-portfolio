// * Import Graphics
// Style & Icon
import '../theme/styles/pages/notfound.css';
import iconBug from '../theme/images/icons/bug.svg';

// Animations
import "animate.css/animate.min.css";

// * Render NotFound Page
function NotFound() {
  return (
    <main id="page-notfound">
      {/* Icon */}
      <img 
        className="animate__animated animate__jackInTheBox"
        id="icon-bug" 
        src={iconBug} 
        alt=""/>

      {/* Header */}
      <header id="notfound-header" className="notfound-section">
        <h2>404</h2>
        <h6>Page Not Found</h6>
      </header>

      {/* Text */}
      <aside id="notfound-text" className="notfound-section">
        <p>The page you're looking for does not exist.</p>
      </aside>

      {/* Homepage Button */}
      <form action="/">
        <button id="homepage-btn">
          Return to home page
        </button>
      </form>

    </main>
  );
}

export default NotFound;