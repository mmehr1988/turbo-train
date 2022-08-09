// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import React, { useRef, createRef, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { LayoutGroup, motion } from 'framer-motion';

// ==========================================
// CONTEXT
// ==========================================

import { MusicContext } from '../../../Context';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../components';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import { handleDateLongText } from '../../../lib';
import { baseOpacityVariants } from '../../../global';

// ==========================================
// PURE FUNCTION
// ==========================================
const doesFlippedStateExist = (array, id) =>
  array.find((item) => item.id === id);

// ========================================================
// ANIMATIONS
// ========================================================

const cardTransition = {
  type: 'tween',
  duration: 0.7,
  delay: 0.02,
};

const cardRotateVariants = {
  hidden: (flipped) => ({
    rotateY: flipped ? 0 : 180,
  }),
  visible: (flipped) => ({
    rotateY: flipped ? 0 : 180,
  }),
};

const cardFrontBackVariants = {
  hidden: (flipped) => ({
    pointerEvents: flipped ? 'visible' : 'none',
    transition: {
      delay: 0.1,
    },
  }),
  visible: (flipped) => ({
    pointerEvents: flipped ? 'visible' : 'none',
    transition: {
      delay: 0.1,
    },
  }),
};

// ==========================================
// COMPONENT
// ==========================================

const Cards = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { motionContainerProps, cardFlipContainerProps, data } = props;
  // ==========================================
  // STATE
  // ==========================================
  const motionContainerRef = useRef(createRef());
  const cardFlipContainerRef = useRef(createRef());

  // ==========================================
  // CONTEXT
  // ==========================================
  const { flippedState, activeProject, dispatch } = useContext(MusicContext);

  // ==========================================================
  // IS CARD FLIPPED
  // ==========================================================

  const isCardFlipped = (array, id) => {
    const exist = array.find((item) => item.id === id);

    if (!exist) {
      return false;
    } else {
      return exist.flipped;
    }
  };

  // ==========================================================
  // REDUCER DISPATCH
  // ==========================================================

  const handleSetFlippedTrue = useCallback(
    (id, title) =>
      dispatch({
        type: 'SET_FLIPPED_TRUE',
        cardObj: {
          id: id,
          title: title,
        },
      }),
    [dispatch]
  );

  const handleSetFlippedFalse = useCallback(
    (id) =>
      dispatch({
        type: 'TOGGLE_FLIPPED',
        cardId: id,
      }),
    [dispatch]
  );

  // ==========================================================
  // HANDLE CLICK
  // ==========================================================

  const handleFlippedState = (id, title) => {
    if (flippedState.length === 0) {
      handleSetFlippedTrue(id, title);
    } else {
      if (doesFlippedStateExist(flippedState, id)) {
        handleSetFlippedFalse(id);
      } else {
        handleSetFlippedTrue(id, title);
      }
    }
  };

  // ==========================================================
  // HANDLE SCROLL RESET
  // ==========================================================

  const scrollRefs = React.useRef([]);

  scrollRefs.current = data.map((_, i) => scrollRefs.current[i] ?? createRef());

  // ==========================================================
  // ON ANIMATION START | HIDE OR SHOW SCROLL
  // ==========================================================

  const handleAnimationStart = (i, id) => {
    if (scrollRefs.current[i].current) {
      if (!isCardFlipped(flippedState, id)) {
        scrollRefs.current[i].current.classList.add('hide-scroll');
      } else {
        scrollRefs.current[i].current.classList.remove('hide-scroll');
      }
    }
  };

  // ==========================================================
  // ON ANIMATION COMPLETE | RESET SCROLL
  // ==========================================================

  const handleOnAnimationComplete = (i, id) => {
    if (scrollRefs.current[i].current) {
      if (!isCardFlipped(flippedState, id)) {
        scrollRefs.current[i].current.scrollTo({ top: 0 });
      }
    }
  };

  return data?.map((item, i) => {
    return (
      <LayoutGroup key={item._id}>
        <MotionContainer
          layout
          ref={motionContainerRef}
          variants={baseOpacityVariants}
          {...motionContainerProps}
        >
          <FlipContainer
            layout
            key={`app__card-flip-container-${item._id}`}
            ref={cardFlipContainerRef}
            variants={cardRotateVariants}
            initial='hidden'
            animate='visible'
            transition={cardTransition}
            custom={isCardFlipped(flippedState, item._id) === false}
            {...cardFlipContainerProps}
            onAnimationStart={() => handleAnimationStart(i, item._id)}
            onAnimationComplete={() => handleOnAnimationComplete(i, item._id)}
            onLayoutAnimationStart={() => console.log('layoutAnimationStart')}
          >
            <CardFront
              layout
              title={item.title}
              image={item.image}
              releaseType={item.releaseType}
              year={handleDateLongText(item.year)}
              footerData={item.musicLink[0]}
              activeProject={activeProject}
              cardId={item._id}
              cardsFlippedState={isCardFlipped(flippedState, item._id)}
              handleFlippedState={handleFlippedState}
              variants={cardFrontBackVariants}
              custom={isCardFlipped(flippedState, item._id) === false}
            />
            <CardBack
              layout
              ref={scrollRefs.current[i]}
              title={item.title}
              cardId={item._id}
              desc={item.desc}
              external={item.labelLink[0]}
              cardsFlippedState={isCardFlipped(flippedState, item._id)}
              handleFlippedState={handleFlippedState}
              variants={cardFrontBackVariants}
              custom={isCardFlipped(flippedState, item._id) === true}
            />
          </FlipContainer>
        </MotionContainer>
      </LayoutGroup>
    );
  });
};

Cards.defaultProps = {
  motionContainerProps: {
    tag: 'div',
    className: 'app__music-card-motion-container',
    perspective: '4000',
  },
  cardFlipContainerProps: {
    tag: 'div',
    className: 'app__music-card-flip-container',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center center',
  },
};

export default Cards;

const MotionContainer = styled(motion(MotionDiv))``;

const FlipContainer = styled(motion(MotionDiv))`
  /* 
    IMPORTANT Seems like the backface visibilit doesn't work when only put on the back card when viewing on safari. however, when place it it on all of the divs, it seems like it corrects the problem
  */
  div,
  figure {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
`;
