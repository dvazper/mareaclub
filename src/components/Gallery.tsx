import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../context/ThemeContext';
import { images } from '../data/images';

export const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const { isDark } = useTheme();

  const galleryImages = useMemo(() => {
    return isDark ? images.nightGallery : images.dayGallery;
  }, [isDark]);

  const imageVariants = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.1,
      },
    }),
  } as any;

  const tileSpan = [
    'lg:col-span-2 lg:row-span-2',
    'row-span-1',
    'row-span-1',
    'lg:row-span-2',
    'row-span-1',
  ];

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

      {/* Gallery Mosaic */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-4">
        {galleryImages.map((image, i) => (
          <motion.div
            key={`${isDark}-${i}`}
            variants={imageVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
            className={`group overflow-hidden rounded-2xl shadow-lg ${tileSpan[i] ?? ''}`}
          >
            <img
              src={image}
              alt={`Vista ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
