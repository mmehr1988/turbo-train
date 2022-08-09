// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { forwardRef, memo } from 'react';
import styled, { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { FlexContainer, FlexWrapper } from '../../../../constants';

import CardFooter from './CardFooter';
import CardBody from './CardBody';

const CardBack = forwardRef((props, ref) => {
  const theme = useTheme();

  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  //   const renders = useRef(0);
  //   console.log(`MUSIC CARD | BACK | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const {
    title,
    desc,
    cardId,
    external,
    cardsFlippedState,
    handleFlippedState,
    containerProps,
    h3Props,

    ...rest
  } = props;

  const { className: containerClassName, ...container } = containerProps;

  const isScrollable =
    ref?.current && ref.current.scrollHeight > ref.current.clientHeight;

  return (
    <CardBackContainer
      key={`${containerClassName.replace(/ /g, '')}-${cardId}`}
      className={`${containerClassName} ${title.replace(/ /g, '')}`}
      shadow={theme.shadows[10]}
      whileHover={{ boxShadow: theme.shadows[11] }}
      {...container}
      {...rest}
    >
      <CardBodyWrapper
        ref={ref}
        key={`app__music-card-back-scroll-main-${cardId}`}
      >
        <CardBody
          title={title}
          cardId={cardId}
          desc={desc}
          external={external}
        />
      </CardBodyWrapper>
      <CardFooter
        title={title}
        iconTitle={title}
        cardId={cardId}
        flippedKey={`app__music-card-back-flipped-${cardId}`}
        handleFlippedState={handleFlippedState}
        cardsFlippedState={cardsFlippedState}
        showscrollicon={isScrollable}
      />
    </CardBackContainer>
  );
});

CardBack.defaultProps = {
  containerProps: {
    className: 'app__card-music-back card-container',
    bg: 'bgPrimary',
  },
};

export default memo(CardBack, (prevProps, nextProps) => {
  if (prevProps.cardsFlippedState !== nextProps.cardsFlippedState) {
    return false;
  }

  return true;
});

const CardBackContainer = styled(FlexContainer)`
  position: absolute;
  inset: 0;
  transform: rotateY(180deg);
  padding: 1rem;
`;

const CardBodyWrapper = styled(FlexWrapper)`
  overflow: scroll;
  padding-right: ${({ theme }) => theme.mainPadding};
`;
