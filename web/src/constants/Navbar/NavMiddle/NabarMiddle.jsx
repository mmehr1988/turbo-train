// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useContext, useRef, createRef } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MenuContext } from '../../../Context';
import { MotionDiv } from '../../../components';
import { NavUlDesktop, NavUlMobile } from './NavUl';

const NavbarMiddle = (props) => {
  // const renders = useRef(0);
  // console.log(`NAVBAR | MIDDLE | RE-RENDERED: ${renders.current++}`);

  // ==========================================
  // PROPS
  // ==========================================
  const { navMiddleProps } = props;
  // ==========================================
  // REF
  // ==========================================
  const navMiddleContainerRef = useRef(createRef());
  // ==========================================
  // CONTEXT
  // ==========================================
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <NavMiddleContainer ref={navMiddleContainerRef} {...navMiddleProps}>
      <NavUlDesktop />
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isMenuOpen && <NavUlMobile />}
      </AnimatePresence>
    </NavMiddleContainer>
  );
};

NavbarMiddle.defaultProps = {
  navMiddleProps: {
    tag: 'div',
    className: 'app__navbar-middle',
    d: 'flex',
    flexGrow: '1',
    align: 'center',
    justify: 'center',
    alignSelf: 'stretch',
  },
};

export default NavbarMiddle;

const NavMiddleContainer = styled(MotionDiv)`
  align-self: stretch;
`;
