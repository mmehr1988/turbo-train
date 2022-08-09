// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { InternalNavlink } from '../../../../../components';
import NavUnderline from '../NavUlDesktop/NavUnderline';

const NavLinks = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { title, href, underline, ...rest } = props;

  // ==========================================
  // STATE
  // ==========================================

  return (
    <LinkContainer href={href} className='app__nav-links' {...rest}>
      {underline && <NavUnderline />}
      {title}
    </LinkContainer>
  );
};

export default NavLinks;

const LinkContainer = styled(InternalNavlink)`
  position: relative;
  color: var(--color-2);
  font-weight: 500;
  transition: color 0.1s var(--ease-3);
  cursor: pointer;
  text-shadow: ${({ theme }) => theme.textShadow.shadow11};
`;
