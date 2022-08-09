// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { forwardRef, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { ManualFocusTextOutLineMixin } from '../../global';

const AutoScrollComponent = forwardRef((props, ref) => {
  const { to, scrollCallback, scrolling, keyPressCallback, children, ...rest } =
    props;

  return (
    <LinkInternal
      ref={ref}
      to={to}
      onClick={(e) => scrollCallback(e, scrolling === 0 ? 1 : 0, ref)}
      onKeyUp={(e) => keyPressCallback(e, scrolling === 0 ? 1 : 0, ref)}
      onTap={(e) => e.target.blur()}
      {...rest}
    >
      {children}
    </LinkInternal>
  );
});

AutoScrollComponent.propTypes = {
  to: PropTypes.string.isRequired,
};

export default memo(AutoScrollComponent);

const LinkInternal = styled(motion(Link))`
  // ==========================================
  /* FOR FOCUS OUTLINE */
  // ==========================================
  ${ManualFocusTextOutLineMixin}
  cursor: pointer;
`;
