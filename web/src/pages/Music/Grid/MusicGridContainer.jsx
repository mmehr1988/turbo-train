// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MusicContext } from '../../../Context';
import CategoryButtons from '../CategoryButtons/CategoryButtons';

import { MotionDiv } from '../../../components';
import Cards from '../Cards/Cards';
import { lodashFilterKeyOneLevel } from '../../../lib';

// ==========================================
// ANIMATIONS
// ==========================================
import { containerStaggerVariants } from '../../../global';

// ==========================================
// CREATE CONTEXT API
// ==========================================

const MusicGridContainer = (props) => {
  // const renders = useRef(0);
  // console.log(`Music Page Content Rendered: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const { data, categories, pageContentProps } = props;

  // ==========================================
  // STATE
  // ==========================================

  const { activeProject, dispatch } = useContext(MusicContext);

  // ==========================================
  // REFS
  // ==========================================

  const gridContainerRef = useRef(createRef());

  return (
    <>
      {categories && <CategoryButtons categories={categories} />}
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => dispatch({ type: 'RESET_FLIPPED_STATE' })}
      >
        {activeProject && (
          <GridContainer
            key={`app__music-grid-container-${activeProject}`}
            ref={gridContainerRef}
            variants={containerStaggerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            {...pageContentProps}
          >
            <Cards
              data={lodashFilterKeyOneLevel(data, 'category', activeProject)}
              activeProject={activeProject}
            />
          </GridContainer>
        )}
      </AnimatePresence>
    </>
  );
};

MusicGridContainer.defaultProps = {
  pageContentProps: {
    tag: 'section',
    className: 'app__grid-music-cards',
    d: 'grid',
    w: '100%',
    gridGap: '1.5rem',
    gridTempCols: 'repeat(auto-fit, minmax(300px, 350px))',
    placeContent: 'center',
  },
};

export default MusicGridContainer;

const GridContainer = styled(motion(MotionDiv))``;
