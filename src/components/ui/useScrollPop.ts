import { useEffect, useRef, useState } from 'react';

/**
 * Hook to animate a component when it enters the viewport (scroll pop effect)
 * @param {string} animationClass - Tailwind or custom class for animation (e.g. 'animate-fadeInUp')
 * @returns {React.RefObject<HTMLElement>} ref to attach to the component
 * @returns {boolean} isVisible - true if the component is visible
 */
export function useScrollPop(animationClass = 'animate-fadeInUp') {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible, animationClass };
}
