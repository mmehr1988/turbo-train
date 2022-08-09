// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../components';

const H4 = (props) => {
  const { children, H4Props, ...rest } = props;

  const h4Ref = useRef(createRef());

  return (
    <MotionDiv ref={h4Ref} {...H4Props} {...rest}>
      {children}
    </MotionDiv>
  );
};

H4.defaultProps = {
  H4Props: {
    tag: 'h4',
  },
};

export default H4;
