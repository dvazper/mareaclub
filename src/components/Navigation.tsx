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
      <div className="fixed left-5 top-5 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-white/90 p-3 text-text-day shadow-lg backdrop-blur transition-all duration-300"
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
        className={`fixed left-0 top-0 z-40 flex h-screen w-72 flex-col items-center justify-center bg-[#12282a] shadow-2xl transition-transform duration-300 md:left-1/2 md:top-5 md:h-auto md:w-auto md:-translate-x-1/2 md:flex-row md:gap-8 md:rounded-full md:bg-black/25 md:px-7 md:py-3 md:shadow-none md:backdrop-blur-md ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:text-[#e9bf86] md:py-0"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
};
