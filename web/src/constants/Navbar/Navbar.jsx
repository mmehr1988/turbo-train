// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';
import styled, { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MotionDiv } from '../../components';
import NavbarMiddle from './NavMiddle/NabarMiddle';
import NavbarLeft from './NavLeft/NavbarLeft';
import NavbarRight from './NavRight/NavbarRight';

const Navbar = (props) => {
  const theme = useTheme();
  // ==========================================
  // PROPS
  // ==========================================
  const { navbarProps } = props;
  // ==========================================
  // REF
  // ==========================================
  const navNavRef = useRef(createRef());

  return (
    <NavbarNav
      ref={navNavRef}
      maxW={theme.maxWidth}
      p={theme.mainPadding}
      {...navbarProps}
    >
      <NavbarLeft />
      <NavbarMiddle />
      <NavbarRight />
    </NavbarNav>
  );
};

Navbar.defaultProps = {
  navbarProps: {
    tag: 'nav',
    className: 'app__navbar-nav',
    d: 'flex',
    justify: 'space-between',
    align: 'center',
    pos: 'fixed',
    top: '0%',
    left: '50%',
    w: '100%',
    transform: 'translateX(-50%)',
  },
};

export default Navbar;

const NavbarNav = styled(MotionDiv)``;
