// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { useRef, createRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../../components';
import { Span } from '../../../../constants';

import FlipButton from '../FlipButton/FlipButton';
import ScrollableIcon from '../ScrollableIcon/ScrollableIcon';

const CardFooter = (props) => {
  const {
    containerProps,
    spanPropsFlip,
    cardId,
    flippedKey,
    title,
    handleFlippedState,
    cardsFlippedState,
    showscrollicon,
  } = props;

  const { className: containerClassName, ...footer } = containerProps;

  const cardFooterRef = useRef(createRef());

  return (
    <MotionDiv
      ref={cardFooterRef}
      className={`${containerClassName} ${title.replace(/ /g, '')}`}
      {...footer}
    >
      <Span {...spanPropsFlip}>
        {showscrollicon && (
          <ScrollableIcon
            flippedKey={flippedKey}
            cardsFlippedState={cardsFlippedState}
          />
        )}
        <FlipButton
          title={title}
          cardId={cardId}
          flippedKey={flippedKey}
          handleFlippedState={handleFlippedState}
          cardsFlippedState={cardsFlippedState}
        />
      </Span>
    </MotionDiv>
  );
};

CardFooter.defaultProps = {
  containerProps: {
    className: 'app__music-card-back-footer-container',
    d: 'flex',
    align: 'center',
    m: { t: '0.5rem' },
  },
  spanPropsFlip: {
    alignFlex: 'alignXRight',
    gap: '0.5rem',
  },
};

export default CardFooter;
