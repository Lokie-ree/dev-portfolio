import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

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

/**
 * Hook to enable swiping functionality for carousel
 * @param {Function} prevSlide
 * @param {Function} nextSlide
 * @returns {Object} handlers
 */

export const useCarouselSwiping = (prevSlide, nextSlide) => {
  return useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
  });
};
