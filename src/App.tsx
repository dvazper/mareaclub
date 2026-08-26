import {
  Navigation,
  Hero,
  Marquee,
  About,
  Cocktails,
  BrandStatement,
  Reservations,
  Gallery,
  Reviews,
  Footer,
  ThemeToggle,
  Menu,
} from './components';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(() => window.location.hash === '#carta');

  useEffect(() => {
    const handleHashChange = () => setShowMenu(window.location.hash === '#carta');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-500">
        <div className="grain-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.05] mix-blend-overlay" />
        <div className="relative z-[1]">
          <Navigation />
          {showMenu ? (
            <Menu />
          ) : (
            <>
              <Hero />
              <Marquee />
              <About />
              <Cocktails />
              <BrandStatement />
              <Reservations />
              <Gallery />
              <Reviews />
              <Footer />
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

