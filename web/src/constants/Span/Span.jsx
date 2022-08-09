// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { useRef, createRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MotionDiv } from '../../components';

const Span = (props) => {
  const { children, spanProps, alignTest, ...rest } = props;

  const spanRef = useRef(createRef());

  return (
    <MotionDiv ref={spanRef} {...spanProps} {...rest}>
      {children}
    </MotionDiv>
  );
};

Span.defaultProps = {
  spanProps: {
    tag: 'span',
  },
};

export default Span;
