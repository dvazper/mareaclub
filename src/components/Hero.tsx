import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="text-center max-w-4xl"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-12">
          <img
            src="/marea-gemini/fotos/logo.jpg"
            alt="Marea Club Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto object-cover rounded-lg shadow-lg blur-reveal"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl md:text-7xl font-black text-text-day dark:text-text-night mb-2">
            El Verano
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-4xl md:text-6xl font-bold text-text-day dark:text-text-night">
            Que Te Llama
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-text-day-light dark:text-text-night mb-10 italic"
        >
          Cócteles & Atardeceres
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <button className="btn-primary specular-btn text-lg md:text-xl">
            <span className="relative z-10">Reserva tu Mesa</span>
            <div className="specular-light" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-text-day dark:text-text-night"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};
