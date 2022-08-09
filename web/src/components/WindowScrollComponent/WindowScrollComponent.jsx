import { useCallback, useEffect, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const VISIBILITY_THRESHOLD = 15;

// ==========================================
// EVENT LISTENERS
// ==========================================

const useGlobalWindowScrollEvent = (callback) => {
  return useWindowEvent('scroll', callback);
};

const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

// ==========================================
// HOOK
// ==========================================

export default function WindowScrollComponent({
  motionKey,
  condition,
  children,
}) {
  const [scrollState, setScrollState] = useState(null);

  // ==========================================
  // CALLBACK
  // ==========================================

  const callback = useCallback(() => {
    const scrollPosition = window.scrollY;
    const scrollHeight = window.innerHeight;

    if ((scrollPosition / scrollHeight) * 100 > VISIBILITY_THRESHOLD) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }, []);

  // ==========================================
  // [1] useLayoutEffect : On Initial mount, check whether menu should be shown
  // ==========================================

  useLayoutEffect(() => {
    callback();
  }, [callback]);

  // ==========================================
  // [2] useEffect :  For the remaining period listen for scroll change
  // ==========================================

  useGlobalWindowScrollEvent(callback);

  // ==========================================
  // [3] Framer Motion | AnimatePresence
  // ==========================================

  // The first motion div is for the initial animation for the non visible items

  return (
    <motion.div
      key={`motion-main-container-${motionKey}`}
      animate={{
        opacity: scrollState === condition ? 1 : 0,
      }}
    >
      <AnimatePresence initial={false}>
        {scrollState === condition && (
          <motion.div
            key={motionKey}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transitionEnd: {
                display: 'none',
              },
            }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

WindowScrollComponent.propTypes = {
  motionKey: PropTypes.string.isRequired,
  condition: PropTypes.bool.isRequired,
};
