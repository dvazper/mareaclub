import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SpecularButton } from './SpecularButton';
import { images } from '../data/images';

export const Reservations: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const floatingVariant1 = {
    hidden: { opacity: 0, x: -60, y: -40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as any;

  const floatingVariant2 = {
    hidden: { opacity: 0, x: 60, y: 40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
  } as any;

  const centerVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  } as any;

  return (
    <section id="reservations" ref={ref} className="py-20 px-4 relative min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        {/* Left Image */}
        <motion.div
          variants={floatingVariant1}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="hidden w-48 shrink-0 lg:block"
        >
          <img
            src={images.nightGallery[1]}
            alt="Vistas Increíbles"
            className="w-full h-48 object-cover rounded-lg shadow-2xl blur-reveal"
          />
          <p className="text-center mt-4 font-semibold text-text-day dark:text-text-night">
            Vistas Increíbles
          </p>
        </motion.div>

        {/* Center Content */}
        <motion.div
          variants={centerVariant}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="max-w-2xl text-center z-10 relative"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-day dark:text-text-night mb-8">
            ¿Te vienes?
          </h2>

          <div className="mb-8">
            <p className="text-lg md:text-xl text-text-day-light dark:text-text-night mb-2">
              📍 Ría de Huelva, España
            </p>
            <p className="text-base md:text-lg text-text-day-light dark:text-text-night">
              Disfruta de los mejores cócteles al atardecer en la mejor ubicación
            </p>
          </div>

          <SpecularButton>Reserva Ahora</SpecularButton>

          <p className="text-sm md:text-base text-text-day-light dark:text-text-night italic mt-8">
            Abierto de martes a domingo • 18:00 - 02:00
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={floatingVariant2}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="hidden w-48 shrink-0 lg:block"
        >
          <img
            src={images.dayGallery[1]}
            alt="Ambiente Único"
            className="w-full h-48 object-cover rounded-lg shadow-2xl blur-reveal"
          />
          <p className="text-center mt-4 font-semibold text-text-day dark:text-text-night">
            Ambiente Único
          </p>
        </motion.div>
      </div>
    </section>
  );
};
