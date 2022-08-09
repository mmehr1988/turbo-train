// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { memo, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MotionDiv, WindowScrollComponent } from '../../../../../components';
import NavLi from '../NavLi/NavLi';
import { lodashIsEqual } from '../../../../../lib';

const NavUlDesktop = (props) => {
  // const renders = useRef(0);
  // console.log(`NAVBAR | UL | DESKTOP | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const { className, navDesktopULProps } = props;

  // ==========================================
  // REF
  // ==========================================
  const navMiddleDesktopULRef = useRef(null);

  return (
    <WindowScrollComponent
      motionKey={`motion-visibility-key-${className}`}
      condition={false}
    >
      <UlDesktop
        ref={navMiddleDesktopULRef}
        className={className}
        {...navDesktopULProps}
      >
        <NavLi menuType='desktop' />
      </UlDesktop>
    </WindowScrollComponent>
  );
};

NavUlDesktop.defaultProps = {
  navDesktopULProps: {
    tag: 'ul',
    className: 'app__navbar-ul-desktop',
    d: { minMD: 'flex', maxMD: 'none' },
    flexDir: 'row',
    flexGrow: '1',
    gap: '3rem',
    align: 'center',
    justify: 'center',
    textSize: '1.1rem',
  },
};

export default memo(NavUlDesktop, (prevProps, nextProps) => {
  if (!lodashIsEqual(prevProps, nextProps)) {
    return false;
  }

  return true;
});

const UlDesktop = styled(motion(MotionDiv))`
  align-self: stretch;
`;
