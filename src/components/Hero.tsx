import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpecularButton } from './SpecularButton';
import { images } from '../data/images';

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
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as any;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden px-6 pb-16 pt-32 text-white md:min-h-screen md:px-12 md:pb-24 lg:px-20"
    >
      <img
        src={images.hero}
        alt="Vistas de la costa al atardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,23,42,.80)_0%,rgba(15,23,42,.36)_52%,rgba(15,23,42,.14)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(2,6,23,.75)_0%,transparent_55%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="max-w-4xl text-left"
      >
        <motion.p variants={itemVariants} className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
          Marea Club · Ría de Huelva
        </motion.p>

        <motion.div variants={itemVariants} className="mb-5">
          <h1 className="max-w-3xl text-6xl font-black leading-[.9] tracking-[-0.04em] md:text-8xl">
            Stay in
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="font-display max-w-2xl text-5xl font-light italic leading-none md:text-7xl">
            marea</h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-md text-base leading-relaxed text-white/80 md:text-lg"
        >
          Cócteles fríos, música lenta y la última luz del día sobre la ría.
        </motion.p>

        <motion.div variants={itemVariants}>
          <SpecularButton className="btn-primary border border-white/20 bg-white text-text-day hover:bg-white/90">Reserva tu mesa</SpecularButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="h-6 w-6 text-white"
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
