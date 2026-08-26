import React from 'react';

const items = ['Atardecer en la Ría', 'Cócteles de Autor', 'Marea Club', 'Reserva tu Mesa'];

export const Marquee: React.FC = () => {
  const track = (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-text-night md:text-base">
            {item}
          </span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-white/10 bg-bg-night py-4">
      <div className="marquee-track flex w-max motion-reduce:animate-none">
        {track}
        {track}
      </div>
    </div>
  );
};
