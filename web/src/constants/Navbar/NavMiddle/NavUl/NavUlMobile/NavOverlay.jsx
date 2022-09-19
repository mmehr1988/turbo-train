// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../../../components';

const NavOverlay = (props) => {
  const theme = useTheme();

  // ==========================================
  // PROPS
  // ==========================================
  const { overlayProps, children, ...rest } = props;
  // ==========================================
  // REF
  // ==========================================
  const navOverlayMobileRef = useRef(createRef());

  return (
    <Overlay
      ref={navOverlayMobileRef}
      {...rest}
      bg={theme.colors.bgPrimary}
      {...overlayProps}
    >
      {children}
    </Overlay>
  );
};

NavOverlay.defaultProps = {
  overlayProps: {
    tag: 'div',
    className: 'app__navbar-overlay',
    pos: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    w: '100%',
    minH: '100vh',
    d: 'flex',
    justify: 'center',
    bg: 'bgPrimary',
  },
};

export default NavOverlay;

const Overlay = styled(motion(MotionDiv))``;
