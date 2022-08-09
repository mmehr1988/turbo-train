// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef, memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../../components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const CardFront = (props) => {
  const theme = useTheme();

  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  // const renders = useRef(0);
  // console.log(`MUSIC CARD | FRONT | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const {
    activeProject,
    cardId,
    cardFrontContainerProps,
    image,
    title,
    releaseType,
    year,
    footerData,
    cardsFlippedState,
    handleFlippedState,
    ...rest
  } = props;

  const { className: cardFrontContainerClassName, ...containerFrontProps } =
    cardFrontContainerProps;

  // ==========================================
  // CONTEXT
  // ==========================================

  const cardFrontContainerRef = useRef(createRef());

  return (
    <CardFrontContainer
      ref={cardFrontContainerRef}
      key={`${cardFrontContainerClassName}-container-${cardId}`}
      className={`${cardFrontContainerClassName} ${title.replace(/ /g, '')}`}
      {...containerFrontProps}
      shadow={theme.shadows[10]}
      whileHover={{ boxShadow: theme.shadows[11] }}
      bg={theme.colors.bgPrimary}
      {...rest}
    >
      {/* CARD HEADER */}
      <CardHeader
        cardId={cardId}
        image={image}
        alt={`Music Card: ${activeProject} - ${title}`}
      />
      {/* CARD BODY */}
      <CardBody
        cardId={cardId}
        title={title}
        releaseType={releaseType}
        year={year}
      />

      <CardFooter
        title={title}
        activeProject={activeProject}
        link={footerData.link}
        iconTitle={footerData.title}
        cardId={cardId}
        flippedKey={`app__music-card-front-flipped-${cardId}`}
        handleFlippedState={handleFlippedState}
        cardsFlippedState={cardsFlippedState}
      />
    </CardFrontContainer>
  );
};

CardFront.defaultProps = {
  cardFrontContainerProps: {
    className: 'app_card-music-front',
    tag: 'div',
    position: 'relative',
    d: 'flex',
    flexDir: 'column',
    justify: 'flex-start',
    p: '1rem',
  },
};

export default memo(CardFront, (prevProps, nextProps) => {
  if (prevProps.cardsFlippedState !== nextProps.cardsFlippedState) {
    return false;
  }

  return true;
});

const CardFrontContainer = styled(motion(MotionDiv))``;
