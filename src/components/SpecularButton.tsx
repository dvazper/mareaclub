import React from 'react';
import { useSpecularEffect } from '../hooks/useSpecularEffect';

interface SpecularButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  onClick,
  className = 'btn-primary',
}) => {
  const { buttonRef, lightRef } = useSpecularEffect();

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`${className} relative overflow-hidden group`}
    >
      <span className="relative z-10">{children}</span>
      <div
        ref={lightRef}
        className="absolute w-24 h-24 bg-gradient-to-r from-white/40 via-white/20 to-transparent rounded-full pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 30px 15px rgba(255, 255, 255, 0.2)',
        }}
      />
    </button>
  );
};
