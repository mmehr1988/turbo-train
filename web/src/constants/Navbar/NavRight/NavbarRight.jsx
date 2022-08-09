// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../components';
import ToggleButton from './ToggleButton/ToggleButton';
import ContactButton from './ContactButton/ContactButton';

const NavbarRight = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { ...rest } = props;

  // ==========================================
  // REF
  // ==========================================
  const navRightContainerRef = useRef(createRef());

  return (
    <RightContainer ref={navRightContainerRef} {...rest}>
      <ContactButton />
      <ToggleButton />
    </RightContainer>
  );
};

NavbarRight.defaultProps = {
  tag: motion.div,
  className: 'app__navbar-right',
  d: 'flex',
  align: 'center',
};

export default NavbarRight;

const RightContainer = styled(motion(MotionDiv))`
  align-self: stretch;
`;
