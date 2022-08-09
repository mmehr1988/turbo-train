import { useRef } from 'react';
import styled from 'styled-components';

import { MotionDiv } from '../../components';
import { ManualFocusTextOutLineMixin } from '../../global';

import { handleKeyClickExternal, handleExternalClick } from '../../lib';

import { useGlobalKeyPrevent } from '../../hooks';

const ExternalLinkText = (props) => {
  const { href, title } = props;

  //   ===========================================================
  //   CREATE REF
  //   ===========================================================

  const linkRef = useRef(null);

  useGlobalKeyPrevent();

  return (
    <LinkContainer
      ref={linkRef}
      href={href}
      data-path={href}
      onKeyUp={(e) => handleKeyClickExternal(e, href)}
      onClick={(e) => handleExternalClick(e, href)}
    >
      {title}
    </LinkContainer>
  );
};

export default ExternalLinkText;

const LinkContainer = styled(MotionDiv).attrs((props) => ({
  tabIndex: 0,
  tag: 'a',
  role: 'link',
  target: '_blank',
  rel: 'noopener, noreferrer',
}))`
  // ==========================================
  /* FOR FOCUS OUTLINE */
  // ==========================================
  ${ManualFocusTextOutLineMixin}
  --pathWidth: 95%;
`;
