import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { images } from '../data/images';

const features = [
  { emoji: '🌅', label: 'Terraza frente a la ría' },
  { emoji: '🍹', label: 'Cócteles de autor' },
  { emoji: '🎶', label: 'Sesiones en directo' },
];

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const imageVariants = {
    hidden: { opacity: 0, x: -40, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as any;

  const textVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 },
    },
  } as any;

  return (
    <section id="about" ref={ref} className="px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={images.ambiente}
              alt="Barra de Marea Club al atardecer"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-bg-night px-6 py-4 shadow-xl md:block">
            <p className="font-display text-2xl italic text-text-night">Ría de Huelva</p>
          </div>
        </motion.div>

        <motion.div variants={textVariants} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-text-day-light dark:text-text-night/70">
            Sobre nosotros
          </p>
          <h2 className="mb-6 text-4xl font-bold text-text-day dark:text-text-night md:text-5xl">
            Donde la ría se convierte en fiesta
          </h2>
          <p className="mb-4 max-w-lg text-base leading-relaxed text-text-day-light dark:text-text-night/80 md:text-lg">
            Marea Club es el punto de encuentro frente al agua para quienes buscan algo más que una copa:
            atardeceres interminables, buena música y una coctelera que nunca descansa.
          </p>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-text-day-light dark:text-text-night/80 md:text-lg">
            Cada mesa mira al mismo horizonte. Cada noche empieza con luz dorada y termina con la ría
            iluminada.
          </p>

          <div className="flex flex-wrap gap-3">
            {features.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm font-medium text-text-day backdrop-blur-md dark:bg-white/[0.06] dark:text-text-night"
              >
                <span>{f.emoji}</span>
                {f.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
