import { useEffect, useRef, useState } from 'react';

export const useSpecularEffect = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const light = lightRef.current;

    if (!button || !light) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Center the light on cursor
      const centerX = x - 50; // Half of light width
      const centerY = y - 50; // Half of light height

      light.style.left = `${centerX}px`;
      light.style.top = `${centerY}px`;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      light.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      light.style.opacity = '0';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return { buttonRef, lightRef };
};
