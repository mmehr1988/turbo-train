// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import { MotionDiv } from '../components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { Navbar, ScrollUpButton, ContactForm } from '../constants';

const Layout = (props) => {
  const theme = useTheme();

  // ==========================================================
  // PROPS
  // ==========================================================
  const { LAYOUT_PROPS, children } = props;
  const { className: LAYOUT_CLASSNAME, ...layout } = LAYOUT_PROPS;

  // ==========================================================
  // REFS
  // ==========================================================
  const ref = useRef(null);

  return (
    <LayoutContainer
      ref={ref}
      key='layout-container-motion-key'
      className={LAYOUT_CLASSNAME}
      maxW={theme.maxWidth}
      p={theme.mainPadding}
      {...layout}
    >
      <Navbar />
      {children}
      <ScrollUpButton />
      <ContactForm />
    </LayoutContainer>
  );
};

Layout.defaultProps = {
  LAYOUT_PROPS: {
    tag: 'div',
    className: 'app__layout-wrapper',
    pos: 'relative',
    w: '100%',
    h: '100vh',
    d: 'grid',
    gridTempCols: '1fr auto',
    m: '0 auto',
  },
};

export default Layout;

const LayoutContainer = styled(motion(MotionDiv))`
  .app__navbar-nav {
    z-index: 1000;
  }
`;
