// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
// import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import DemoPage from './pages/DemoPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* <CustomCursor /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/demo/:id" element={<DemoPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
