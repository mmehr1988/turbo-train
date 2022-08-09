// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../components';
import LogoIconLink from './LogoIconLink';

const NavbarLeft = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { containerProps, linkProps } = props;
  const { d, w, h, p, focusName } = linkProps;
  const { pathname } = useLocation();

  // ==========================================
  // STATE
  // ==========================================

  const [isHovering, setIsHovering] = useState(0);
  const [isFocused, setIsFocused] = useState(0);

  // ==========================================
  // REF
  // ==========================================

  return (
    <LeftContainer
      className='app__navbar-left'
      onHoverStart={() => setIsHovering(1)}
      onHoverEnd={() => setIsHovering(0)}
      onFocus={() => setIsFocused(1)}
      onBlur={() => setIsFocused(0)}
      onTap={(e) => e.target.blur()}
      {...containerProps}
      style={{
        cursor: pathname !== '/' ? 'pointer' : 'default',
        touchAction: pathname !== '/' ? 'auto' : 'none',
        pointerEvents: pathname !== '/' ? 'auto' : 'none',
      }}
    >
      <LogoIconLink
        to='/'
        otherStyle={{
          display: `${d}`,
          width: `${w}px`,
          height: `${h}px`,
          padding: `${p}px`,
        }}
        isHovering={pathname !== '/' && isHovering}
        isFocused={pathname !== '/' && isFocused}
        focusName={focusName}
      />
    </LeftContainer>
  );
};

NavbarLeft.defaultProps = {
  containerProps: {
    tag: 'div',
    d: 'flex',
  },
  linkProps: {
    d: 'block',
    w: 58,
    h: 58,
    p: 0,
    focusName: 'stereo',
  },
};

export default NavbarLeft;

const LeftContainer = styled(motion(MotionDiv))`
  a {
    // ==========================================
    /* FOR FOCUS OUTLINE */
    // ==========================================
    --pathWidth: 90%;
    --pathHeight: 65%;
    --pathTopText: 17.5%;
    --outline-offset: 3px;

    &:focus {
      &:after {
        border-radius: 3px;
      }
    }
  }
`;
