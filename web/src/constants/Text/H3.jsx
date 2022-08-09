// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../components';

const H3 = (props) => {
  const { children, H3Props, ...rest } = props;

  const h3Ref = useRef(createRef());

  return (
    <MotionDiv ref={h3Ref} {...H3Props} {...rest}>
      {children}
    </MotionDiv>
  );
};

H3.defaultProps = {
  H3Props: {
    tag: 'h3',
  },
};

export default H3;
