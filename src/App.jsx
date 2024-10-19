import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductListing } from './pages/ProductListing';
import { ThankYou } from './pages/ThankYou';
import { useSearchParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;