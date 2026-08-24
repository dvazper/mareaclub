import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../context/ThemeContext';

export const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { isDark } = useTheme();

  const galleryImages = useMemo(() => {
    const dayImages = [
      '/marea-gemini/fotos/galeria-dia-1.jpg',
      '/marea-gemini/fotos/galeria-dia-2.jpg',
      '/marea-gemini/fotos/galeria-dia-3.jpg',
      '/marea-gemini/fotos/galeria-dia-4.jpg',
    ];

    const nightImages = [
      '/marea-gemini/fotos/galeria-noche-1.jpg',
      '/marea-gemini/fotos/galeria-noche-2.jpg',
      '/marea-gemini/fotos/galeria-noche-3.jpg',
      '/marea-gemini/fotos/galeria-noche-4.jpg',
    ];

    return isDark ? nightImages : dayImages;
  }, [isDark]);

  const imageVariants = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="gallery" ref={ref} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-day dark:text-text-night">
          Nuestras Vistas
        </h2>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, i) => (
          <motion.div
            key={`${isDark}-${i}`}
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
            className="overflow-hidden rounded-lg shadow-lg h-64 md:h-80"
          >
            <img
              src={image}
              alt={`Vista ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
