// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { MenuContext } from '../Context';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { useScrollToTop } from '../hooks';
// ==========================================
// ANIMATION
// ==========================================

const pageTransitionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};

const MotionWrap = (Component, page) =>
  function HOC() {
    const pageToLowercase = page && page.toLowerCase();
    const { scrollToElem } = useScrollToTop();

    const { isMenuOpen, dispatch } = useContext(MenuContext);

    return (
      <>
        <Helmet>
          <title>{page} | Mehdi Mehrabani</title>
          <meta name='description' content={`${pageToLowercase} page`} />
        </Helmet>
        <motion.div
          className={`app__motion-wrap key-${pageToLowercase}`}
          key={`app__motion-wrap-key-${pageToLowercase}`}
          variants={pageTransitionVariants}
          custom={isMenuOpen}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{
            duration: isMenuOpen ? 1 / 3 : 1,
          }}
          onAnimationStart={() =>
            !isMenuOpen && window.scrollY !== 0
              ? scrollToElem()
              : dispatch({ type: 'CLOSE_MENU' })
          }
        >
          {/* Handling the opacity for the menu open and close so when 
          scrolling to top occurs on page transition, the reflection of the page is not
          show in SAFARI
           */}
          <motion.div
            style={{
              opacity: 1,
            }}
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{
              delay: isMenuOpen ? 0 : 1,
              duration: 1 / 4,
            }}
          >
            <Component />
          </motion.div>
        </motion.div>
      </>
    );
  };

export default MotionWrap;
