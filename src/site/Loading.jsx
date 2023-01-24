// * ---------------------------------------------- Import Styles
// Animation Styles
import "animate.css/animate.min.css";
import '../theme/styles/pages/loading.css';

// * ---------------------------------------------- Handle Loading Page
// Choose random string to display on loading page
function Loading() {

  // Get random number & determine statement
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNumber  = getRandomInt(4);
  let loadingString   = "";
  switch(randomNumber){
    case 0: loadingString = "getting things ready..."; break;
    case 1: loadingString = "loading your content..."; break;
    case 2: loadingString = "just a moment..."; break;
    case 3: loadingString = "cleaning up..."; break;
    default: loadingString = "..."; break;
  }

  return (
    <aside id="page-loading">
      <h2 className="loading-caption animate__animated animate__pulse">
        {loadingString}
      </h2>
    </aside>
  );
}

// Export loading page
export default Loading;