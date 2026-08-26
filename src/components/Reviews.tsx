import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  text: string;
  date: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'María García',
    text: 'Un lugar increíble con vistas espectaculares. Los cócteles están exquisitos y el ambiente es perfecto para disfrutar del atardecer.',
    date: 'Hace 2 semanas',
    rating: 5,
  },
  {
    id: 2,
    author: 'Carlos Rodríguez',
    text: 'Excelente servicio, cócteles de calidad premium y una ubicación que no tiene comparación. Volvería una y otra vez.',
    date: 'Hace 1 mes',
    rating: 5,
  },
  {
    id: 3,
    author: 'Ana López',
    text: 'El mejor bar de la zona. La atención del personal es excepcional y la decoración es muy elegante. Altamente recomendado.',
    date: 'Hace 3 semanas',
    rating: 5,
  },
  {
    id: 4,
    author: 'Juan Martínez',
    text: 'Mareamos Club superó todas mis expectativas. Los atardeceres desde aquí son mágicos y los cócteles son auténticas obras de arte.',
    date: 'Hace 5 días',
    rating: 5,
  },
  {
    id: 5,
    author: 'Laura Fernández',
    text: 'Un descubrimiento fantástico en Huelva. El ambiente es sofisticado, la música perfecta y los cócteles simplemente deliciosos.',
    date: 'Hace 1 semana',
    rating: 5,
  },
  {
    id: 6,
    author: 'Pedro Sánchez',
    text: 'Definitivamente mi lugar favorito para pasar un atardecer. La combinación de vistas, comida y cócteles es simplemente perfecta.',
    date: 'Hace 10 días',
    rating: 5,
  },
];

export const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const reviewVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: i * 0.1,
      },
    }),
  } as any;

  return (
    <section id="reviews" ref={ref} className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-day dark:text-text-night">
          Lo Que Dicen Nuestros Clientes
        </h2>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            variants={reviewVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
            className="p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-white/[0.04] backdrop-blur-md shadow-[0_1px_2px_rgba(15,23,42,0.06)] dark:shadow-none transition-colors duration-500"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-text-day dark:text-text-night mb-4 italic leading-relaxed">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="border-t border-text-day border-opacity-10 dark:border-text-night dark:border-opacity-10 pt-4">
              <p className="font-semibold text-text-day dark:text-text-night">
                {review.author}
              </p>
              <p className="text-sm text-text-day-light dark:text-text-night text-opacity-70">
                {review.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
