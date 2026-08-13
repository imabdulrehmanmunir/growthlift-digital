// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CaseStudyPopup from './components/CaseStudyPopup';
import ScrollToTop from './components/ScrollToTop';
// import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import DemoPage from './pages/DemoPage';
import Contact from './pages/Contact';
import Team from './pages/Team';
import { config } from './config';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>GrowthLift Digital | Web Development & Mobile Apps | {config.founder.name}</title>
          <meta name="description" content={`${config.agencyName} founded by ${config.founder.name} - Professional web development, MERN stack, Android apps, React.js, and digital marketing services. Get your free mockup today!`} />
          <meta name="keywords" content="MERN stack development, React developers, Android app development, custom web design, SEO agency, GrowthLift Digital, Abdul Rehman Munir, digital marketing, web development agency" />
          <meta name="author" content={`${config.founder.name} - ${config.agencyName}`} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={`${config.agencyName} | Web Development & Mobile Apps | ${config.founder.name}`} />
          <meta property="og:description" content={`Award-winning digital agency by ${config.founder.name}. Expert web development, mobile apps, and digital marketing.`} />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://growthliftdigital.com" />
        </Helmet>
        {/* <CustomCursor /> */}
        <Navbar />
        <CaseStudyPopup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
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
