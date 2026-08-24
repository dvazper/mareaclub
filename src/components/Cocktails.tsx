import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Cocktail {
  id: number;
  name: string;
  description: string;
  image: string;
}

const cocktails: Cocktail[] = [
  {
    id: 1,
    name: 'Piña Colada',
    description: 'Combinación tropical de ron, crema de coco y jugo de piña con un toque caribeño',
    image: '/marea-gemini/fotos/pina-colada.jpg',
  },
  {
    id: 2,
    name: 'Margarita',
    description: 'Clásico mexicano con tequila, triple sec y jugo de limón fresco',
    image: '/marea-gemini/fotos/margarita.jpg',
  },
  {
    id: 3,
    name: 'Atardecer Marea',
    description: 'Nuestro cóctel insignia: vodka, jugo de arándano y un toque de misterio',
    image: '/marea-gemini/fotos/atardecer-marea.jpg',
  },
];

export const Cocktails: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const amount = 320;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="cocktails" ref={ref} className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-day dark:text-text-night mb-4">
          Nuestros Cócteles Más Vendidos
        </h2>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {cocktails.map((cocktail, i) => (
          <motion.div
            key={cocktail.id}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
            className="flex flex-col items-center"
          >
            <div className="mb-6 w-full">
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className="w-full aspect-square object-cover rounded-lg shadow-lg blur-reveal"
              />
            </div>
            <h3 className="text-2xl font-bold text-text-day dark:text-text-night mb-3 text-center">
              {cocktail.name}
            </h3>
            <p className="text-center text-text-day-light dark:text-text-night text-sm leading-relaxed">
              {cocktail.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-text-day dark:bg-text-night rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-white dark:text-bg-night" />
          </button>
        )}

        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cocktails.map((cocktail) => (
            <motion.div
              key={cocktail.id}
              className="flex-shrink-0 w-72 flex flex-col items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 w-full">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg blur-reveal"
                />
              </div>
              <h3 className="text-xl font-bold text-text-day dark:text-text-night mb-2 text-center">
                {cocktail.name}
              </h3>
              <p className="text-center text-text-day-light dark:text-text-night text-sm leading-relaxed">
                {cocktail.description}
              </p>
            </motion.div>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-text-day dark:bg-text-night rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-white dark:text-bg-night" />
          </button>
        )}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <button className="btn-secondary">Ver Carta Completa</button>
      </motion.div>
    </section>
  );
};
