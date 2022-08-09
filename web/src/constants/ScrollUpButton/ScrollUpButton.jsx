// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { memo } from 'react';
import { useTheme } from 'styled-components';
import { useLocation } from 'react-router-dom';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MotionButtonIcon, WindowScrollComponent } from '../../components';
import { lodashIsEqual } from '../../lib';

import { useScrollToTop } from '../../hooks';

const TOGGLE_COMP = 9;

const ScrollUpButton = (props) => {
  const theme = useTheme();
  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  // const renders = React.useRef(0);
  // console.log(`FLIP | BUTTON | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const { buttonProps, iconProps } = props;
  const { className: buttonClassName, ...button } = buttonProps;
  const { className: iconClassName, ...icon } = iconProps;

  const location = useLocation();

  // ===========================================================
  // SCROLL CONTEXT
  // ===========================================================

  const { scrollToElem } = useScrollToTop();

  // ==========================================
  // MANUAL CALCS FOR POSITION
  // ==========================================
  const marginCalc = {
    minMD: theme.mainPadding,
    maxMD: `calc(${theme.mainPadding} + ${TOGGLE_COMP}px)`,
  };

  const leftCalc = {
    minXL: `${`calc(${theme.maxWidth} + calc(100% - ${theme.maxWidth}) / 2 - ${buttonProps.w} - ${theme.mainPadding})`}`,
  };

  const motionKeys = {
    motionBtn: `motion-btn-${buttonClassName}`,
    motionIcon: `motion-icon-${iconClassName}`,
  };

  const marginStyles = {
    r: marginCalc,
    b: `calc(${theme.mainPadding} + 1.25rem)`,
  };

  return (
    <WindowScrollComponent
      motionKey={`motion-visibility-key-${buttonClassName}`}
      condition={true}
    >
      <MotionButtonIcon
        m={marginStyles}
        left={leftCalc}
        bottom={'0'}
        right={'0'}
        buttonProps={{
          ...button,
          className: buttonClassName,
          visibility: location.pathname !== '/' ? 'visible' : 'hidden',
        }}
        iconProps={{
          ...icon,
          className: iconClassName,
          color: theme.colors.bgPrimary,
          bg: theme.colors.color2,
          rounded: theme.rounded.md,
        }}
        motionKeys={motionKeys}
        onClick={() => scrollToElem()}
        focusName={'scroll up'}
      />
    </WindowScrollComponent>
  );
};

ScrollUpButton.defaultProps = {
  buttonProps: {
    className: 'app__scroll-up-button',
    w: '42px',
    h: '42px',
    focusName: 'scrollUp',
  },
  iconProps: {
    name: 'ArrowUp',
    className: 'app__icon-scroll-up',
    view: [0, 0, 24, 24],
  },
};

export default memo(ScrollUpButton, (prevProps, nextProps) => {
  if (!lodashIsEqual(prevProps, nextProps)) {
    return false;
  }

  return true;
});
