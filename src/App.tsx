import {
  Navigation,
  Hero,
  Cocktails,
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
      <div className="min-h-screen transition-colors duration-500">
        <Navigation />
        {showMenu ? <Menu /> : <><Hero /><Cocktails /><Reservations /><Gallery /><Reviews /><Footer /></>}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;

