// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { ManualFocusTextOutLineMixin } from '../../global';

const InternalNavlink = (props) => {
  const {
    href,
    keyPressCallback,
    children,
    linkStyle,
    isFocused,
    focusName,
    ...rest
  } = props;

  return (
    <LinkInternal to={href} onKeyUp={(e) => keyPressCallback(e)} {...rest}>
      {children}
    </LinkInternal>
  );
};

export default InternalNavlink;

const LinkInternal = styled(NavLink)`
  ${ManualFocusTextOutLineMixin}
  --pathTopText: 15%;
  --outline-offset: 5px;

  &:hover,
  &:focus {
    color: var(--color-1);
  }

  &:focus {
    &:after {
      border-radius: 0.1ch;
    }
  }

  /* Using the NavLink Router Dom element gives access to active status which makes it easy to add styling for active nav link */

  &.active {
    color: var(--color-1);
    --pathHeight: 100%;
    --outline-offset: 8px;
  }
`;
