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
import { UnderlineMixin } from '../../../../../global';

const NavUnderline = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { underlineProps, ...rest } = props;
  const { className, ...underline } = underlineProps;

  const theme = useTheme();
  // ==========================================
  // REF
  // ==========================================
  const navUnderlineRef = useRef(createRef());

  return (
    <Underline
      ref={navUnderlineRef}
      className={className}
      layoutId={className}
      {...rest}
      {...underline}
      animate={{ backgroundColor: theme.colors.bgSecondary }}
      transition={{
        duration: 1,
      }}
    />
  );
};

NavUnderline.defaultProps = {
  underlineProps: {
    tag: 'div',
    className: 'app__desktop-menu-underline',
    d: { minMD: 'block', maxMD: 'none' },
  },
};

export default NavUnderline;

const Underline = styled(motion(MotionDiv))`
  position: relative;

  &:after {
    ${UnderlineMixin.underLineCommon({
      b: `-25px`,
      h: `3px`,
    })}
  }
`;
