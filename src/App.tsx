import {
  Navigation,
  Hero,
  Cocktails,
  Reservations,
  Gallery,
  Reviews,
  Footer,
  ThemeToggle,
} from './components';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500">
        <Navigation />
        <Hero />
        <Cocktails />
        <Reservations />
        <Gallery />
        <Reviews />
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;

