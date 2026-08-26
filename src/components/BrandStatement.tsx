import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { images } from '../data/images';

export const BrandStatement: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-32 text-center">
      <img
        src={images.quote}
        alt="Cóctel de Marea Club frente a la ría al atardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,23,.72)_0%,rgba(2,6,23,.88)_55%,rgba(2,6,23,.72)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
        animate={
          isVisible
            ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }
            : { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }
        }
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl"
      >
        <p className="font-display max-w-2xl mx-auto text-4xl italic leading-tight text-white md:text-6xl">
          "Los mejores planes, se improvisan."
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Marea Club · Ría de Huelva
        </p>
      </motion.div>
    </section>
  );
};
