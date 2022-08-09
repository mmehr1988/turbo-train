// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../components';

const FlexContainer = (props) => {
  const { children, containerProps, ...rest } = props;
  const flexWrapperRef = useRef(createRef());

  return (
    <FlexWrapper ref={flexWrapperRef} {...containerProps} {...rest}>
      {children}
    </FlexWrapper>
  );
};

FlexContainer.defaultProps = {
  containerProps: {
    tag: 'div',
  },
};

export default FlexContainer;

export const FlexWrapper = styled(motion(MotionDiv))`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;

  h3,
  h4 {
    margin-bottom: var(--space-1);
    letter-spacing: 0px;
  }
  h3 {
    font-size: calc(var(--font-size-3) + 0.1rem);
    color: var(--color-1);
  }

  h4 {
    font-size: calc(var(--font-size-2) - 0.1rem);
    font-weight: normal;
    color: var(--color-2);
  }

  p,
  q,
  blockquote {
    font-size: var(--font-size-1);
    font-weight: lighter;
  }
`;
