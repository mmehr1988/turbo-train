// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import computeIconStyle from './Icon.style';
import { iconPaths } from './iconPaths';

// ==========================================
// COMPONENT
// ==========================================

const Icon = forwardRef((props, ref) => {
  const IconName = iconPaths[props.name];
  const output = computeIconStyle(props, props.theme);

  const styleArray = output[1];
  const { view, viewBoxBase, color, animation, ...rest } = output[0];

  // console.log(filterShadow);

  // ===========================================================
  // CHECK FOR NOT SQUARE SVGS
  // ===========================================================

  const viewBoxCheck = (view) => {
    if (view === undefined || view === 'base') {
      return viewBoxBase.join();
    } else {
      return view.join();
    }
  };

  // console.log(ref?.current.className);

  // ===========================================================
  // HANDLE TAP & HOVER ANIMATIONS
  // ===========================================================

  return (
    <BasicIcon
      ref={ref}
      key={ref}
      viewBox={viewBoxCheck(view)}
      {...rest}
      $styleArray={styleArray}
      aria-hidden='true' // disable for readers
      style={{
        originX: `${ref?.current?.parentElement?.clientWidth / 2}px`,
        originY: `${ref?.current?.parentElement?.clientHeight / 2}px`,
      }}
      focusable='false'
      preserveAspectRatio='xMidYMid meet'
    >
      <IconName color={props.color} />
    </BasicIcon>
  );
});

// ==========================================
// STYLED BUTTON
// ==========================================

const BasicIcon = styled(motion.svg).attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
})`
  ${(props) => ({
    ...props.$styleArray,
  })}
  user-select: none !important;
  pointer-events: none !important;
  /* fill: none !important; */

  &:not([fill]) {
    fill: none !important;
  }
`;

// ==========================================
// DEFAULT PROPS
// ==========================================

Icon.defaultProps = {
  inlineSize: '100%',
  blockSize: '100%',
  color: 'black',
  viewBoxBase: [0, 0, 24, 24],
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export default withTheme(Icon);
