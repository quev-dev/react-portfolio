// * --------------------------------------------- Import Components
// React Function Imports
import { lazy, Suspense } from 'react';
import { Route, Routes }  from 'react-router-dom';

// Import Loading Page
import Loading from './site/Loading';

// Lazy Load Components
const Home      = lazy(() => import('./site/Home'));
const ThankYou  = lazy(() => import('./site/ThankYou'));
const NotFound  = lazy(() => import('./site/NotFound'));

// * --------------------------------------------- Handle App
// Render App
function App() {
  return (
    <div className = "App">
      <Suspense fallback={<Loading/>}>
        <Routes>
            {/* Home, Thank You */}
            <Route path="/" element={ <Home/> }/>
            <Route path="/thankyou" element={ <ThankYou/> }/>

            {/* Error 404 - Page Not Found */}
            <Route path="*" element={ <NotFound/> }/>

        </Routes>
      </Suspense>
    </div>
  );
}

// Export App
export default App;