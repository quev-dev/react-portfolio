// * --------------------------------------------- Import Components

// React Function Imports
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Import Loading Page
import Loading from './pages/Loading';

// Lazy Load Components
const Home = lazy(() => import('./routes/Home'));
const ThankYou = lazy(() => import('./routes/ThankYou'));
const NotFound = lazy(() => import('./routes/NotFound'));

// * --------------------------------------------- Handle App
function App() {
  return (
    <div className = "App">
      <Suspense fallback={<Loading/>}>
        <Routes>
            {/* Home, Thank You, Error */}
            <Route path="/" element = { <Home/> }></Route>
            <Route path="/thankyou" element = { <ThankYou/> }></Route>
            <Route path="/notfound" element = { <NotFound/> }></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;