import { useState, useEffect, useRef } from "react";
/**
 * Hook to manage carousel autoplay
 * @param {number} totalItems
 * @param {number} intervalDuration
 * @returns {Array} [currentIndex, setCurrentIndex]
 */

export const useCarouselAutoplay = (totalItems, intervalDuration = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startAutoplay = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, intervalDuration);
  };

  const stopAutoplay = () => {
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoplay();

    return () => stopAutoplay();
  }, [totalItems, intervalDuration]);

  const hoverHandlers = {
    onMouseEnter: stopAutoplay,
    onMouseLeave: startAutoplay,
  };

  return [currentIndex, setCurrentIndex, hoverHandlers];
};
