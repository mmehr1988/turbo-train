import { useState, useLayoutEffect, useCallback } from 'react';
import { useGlobalWindowScrollEvent } from './useWindowEvent';

export function useBodyScrollLock() {
  const [scrollLock, setScrollLock] = useState(false);

  const scrollLockTrue = useCallback(() => setScrollLock(true), []);
  const scrollLockFalse = useCallback(() => setScrollLock(false), []);

  useLayoutEffect(() => {
    const handleScrollLock = () => {
      if (scrollLock === true) {
        document.body.classList.add('scroll-hidden');
      } else if (scrollLock === false) {
        document.body.removeAttribute('class');
      }
    };

    handleScrollLock();

    return () => handleScrollLock();
  }, [scrollLock]);

  return {
    scrollLockTrue,
    scrollLockFalse,
    scrollLock,
  };
}

export function useScrollToTop() {
  // ===============================================================
  // SCROLL LOCK HOOK
  // ===============================================================
  const { scrollLockTrue, scrollLockFalse } = useBodyScrollLock();
  // ===============================================================
  // HANDLE SCROLL LOCK TRUE
  // ===============================================================
  const handleScrollLockFalse = useCallback(() => {
    if (window.scrollY === 0) {
      scrollLockFalse();
    }
  }, [scrollLockFalse]);

  useGlobalWindowScrollEvent(handleScrollLockFalse);

  // ===============================================================
  // SCROLLING FUNCTIONS
  // ===============================================================
  const nativeSmoothScrollTo = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  // polyfilled smooth scrolling for IE, Edge & Safari
  const smoothScrollTo = (offsetTop = 0, duration = 600) => {
    const target = document.scrollingElement || document.documentElement;
    const targetPosition = offsetTop;
    const startPosition = window.scrollY;
    const change = targetPosition - startPosition;
    const startDate = +new Date();

    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    function animateScroll(_) {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      target.scrollTop = parseInt(
        easeInOut(currentTime, startPosition, change, duration)
      );

      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        target.scrollTop = targetPosition;
      }
    }

    animateScroll();
  };

  // detect support for the behavior property in ScrollOptions
  const supportsNativeSmoothScroll =
    'scrollBehavior' in document.documentElement.style;

  // smooth scrolling stub
  const scrollToElem = () => {
    scrollLockTrue();

    if (supportsNativeSmoothScroll) {
      nativeSmoothScrollTo();
    } else {
      smoothScrollTo();
    }
  };

  return { scrollToElem };
}
