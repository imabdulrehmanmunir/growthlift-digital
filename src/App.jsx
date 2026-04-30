// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>GrowthLift Digital | Web & Mobile Development Agency</title>
          <meta name="description" content="GrowthLift Digital is a software agency specializing in MERN stack web development, React.js, custom Android apps, and local SEO for small businesses." />
          <meta name="keywords" content="MERN stack development, React developers, Android app development, custom web design, SEO agency" />
          <meta name="author" content="GrowthLift Digital" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="GrowthLift Digital | Web & Mobile Development Agency" />
          <meta property="og:description" content="GrowthLift Digital is a software agency specializing in MERN stack web development, React.js, custom Android apps, and local SEO for small businesses." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://growthliftdigital.com" />
        </Helmet>
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
    </HelmetProvider>
  );
}

export default App;
