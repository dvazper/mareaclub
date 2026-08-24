import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'La Carta', href: '#cocktails' },
    { label: 'Nuestras Vistas', href: '#gallery' },
    { label: 'Reservas', href: '#reservations' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-text-day text-white dark:bg-text-night dark:text-bg-night transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 dark:bg-opacity-70 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu */}
      <nav
        className={`fixed left-0 top-0 h-screen w-64 bg-bg-night dark:bg-bg-night-dark shadow-2xl z-40 flex flex-col justify-center items-center transition-transform duration-300 md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none md:flex-row md:gap-8 md:justify-center md:py-6 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-white text-lg font-semibold hover:text-sky-day-accent transition-colors duration-300 py-4 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};
