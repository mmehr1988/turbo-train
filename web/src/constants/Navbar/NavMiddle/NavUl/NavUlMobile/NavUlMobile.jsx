// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../../../components';
import NavOverlay from './NavOverlay';
import NavLi from '../NavLi/NavLi';

import { MenuContext } from '../../../../../Context';

// ==========================================
// ANIMATIONS
// ==========================================
import {
  menuOverlayVariants,
  containerStaggerVariants,
  baseOpacityVariants,
} from '../../../../../global';

const NavUlMobile = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { navMobileULProps } = props;
  const { dispatch } = useContext(MenuContext);
  // ==========================================
  // REF
  // ==========================================
  const navMiddleMobileULRef = useRef(createRef());

  return (
    <NavOverlay
      variants={menuOverlayVariants}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <UlMobile
        ref={navMiddleMobileULRef}
        {...navMobileULProps}
        variants={containerStaggerVariants}
      >
        <NavLi
          variants={baseOpacityVariants}
          menuType='mobile'
          onClick={() => dispatch({ type: 'CLOSE_MENU' })}
        />
      </UlMobile>
    </NavOverlay>
  );
};

NavUlMobile.defaultProps = {
  navMobileULProps: {
    tag: 'ul',
    className: 'app__navbar-ul-mobile',
    d: 'flex',
    flexDir: 'column',
    gap: '3rem',
    align: 'center',
    justify: 'center',
    textSize: '3rem',
  },
};

export default NavUlMobile;

const UlMobile = styled(motion(MotionDiv))``;
