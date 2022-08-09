// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { useRef, createRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../../components';
import FlipButton from '../FlipButton/FlipButton';
import BandcampLink from '../BandcampLogoLink/BandcampLink';

const CardFooter = (props) => {
  const {
    containerProps,
    cardId,
    flippedKey,
    title,
    activeProject,
    link,
    iconTitle,
    handleFlippedState,
    cardsFlippedState,
  } = props;

  const { className: containerClassName, ...footer } = containerProps;

  const cardFooterRef = useRef(createRef());

  return (
    <MotionDiv
      ref={cardFooterRef}
      className={`${containerClassName} ${title.replace(/ /g, '')}`}
      {...footer}
    >
      <BandcampLink
        title={title}
        activeProject={activeProject}
        link={link}
        iconTitle={iconTitle}
      />

      <FlipButton
        title={title}
        cardId={cardId}
        flippedKey={flippedKey}
        handleFlippedState={handleFlippedState}
        cardsFlippedState={cardsFlippedState}
      />
    </MotionDiv>
  );
};

CardFooter.defaultProps = {
  containerProps: {
    className: 'app__music-card-front-footer-container',
    d: 'flex',
    align: 'center',
    justify: 'space-between',
  },
};

export default CardFooter;
