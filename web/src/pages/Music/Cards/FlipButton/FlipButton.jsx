// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import { useTheme } from 'styled-components';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionButtonIcon } from '../../../../components';

const FlipButton = (props) => {
  const theme = useTheme();

  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  // const renders = React.useRef(0);
  // console.log(`FLIP | BUTTON | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const {
    handleFlippedState,
    cardsFlippedState,
    title,
    cardId,
    flippedKey,
    buttonProps,
    iconProps,
  } = props;

  // ==========================================================
  // PROPS DESTRUCTURED
  // ==========================================================

  const { className: buttonClassName, ...button } = buttonProps;
  const { className: iconClassName, ...icon } = iconProps;

  // console.log(props);

  return (
    <MotionButtonIcon
      buttonProps={{
        className: buttonClassName,
        ...button,
      }}
      iconProps={{
        ...icon,
        className: iconClassName,
        bg: theme.colors.color1,
        color: theme.colors.bgPrimary,
        rounded: theme.rounded.md,
      }}
      motionKeys={{
        motionBtn: `motion-btn-${flippedKey}`,
        motionIcon: `motion-icon-${flippedKey}`,
      }}
      onClick={() => handleFlippedState(cardId, title)}
      focusName={`${title} card flip ${
        cardsFlippedState === false ? 'front' : 'back'
      }`}
    />
  );
};

FlipButton.defaultProps = {
  buttonProps: {
    className: 'app__Flip-button',
    w: '40px',
    h: '40px',
    bg: 'transparent',
    p: '0px',
    m: '0px',
    focusName: 'flip',
  },
  iconProps: {
    name: 'Flip',
    className: 'app__icon-Flip',
    view: 'base',
  },
};

export default FlipButton;
