// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ManualFocusTextOutLineMixin } from '../../global';

const InternalLink = (props) => {
  // ===========================================================
  // DESTRUCTURING PROPS
  // ===========================================================
  const { linkProps, href, children, ...rest } = props;

  return (
    <LinkInternal href={href} {...linkProps} {...rest}>
      {children}
    </LinkInternal>
  );
};

InternalLink.defaultProps = {
  linkProps: {
    className: 'app__internal-body-link',
  },
};

InternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};

export default InternalLink;

const LinkInternal = styled.a`
  // ==========================================
  /* FOR FOCUS OUTLINE */
  // ==========================================
  ${ManualFocusTextOutLineMixin}
`;
