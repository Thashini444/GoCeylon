import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Hotels from './pages/Hotels';
import Tours from './pages/Tours';
import Guides from './pages/Guides';
import Transport from './pages/Transport';
import Food from './pages/Food';
import PlanTrip from './pages/PlanTrip';
import Blog from './pages/Blog';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Router>
      <div className="grain-overlay" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="tours" element={<Tours />} />
          <Route path="guides" element={<Guides />} />
          <Route path="transport" element={<Transport />} />
          <Route path="food" element={<Food />} />
          <Route path="plan-trip" element={<PlanTrip />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
