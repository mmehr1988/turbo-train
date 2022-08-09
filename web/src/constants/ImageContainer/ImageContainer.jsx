// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef } from 'react';
import PropTypes from 'prop-types';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../components';

const ImageContainer = (props) => {
  const { children, containerProps, ...rest } = props;

  const cardHeaderRef = useRef(createRef());

  return (
    <MotionDiv ref={cardHeaderRef} {...containerProps} {...rest}>
      {children}
    </MotionDiv>
  );
};

ImageContainer.defaultProps = {
  containerProps: {
    tag: 'figure',
    overflow: 'hidden',
    userSelect: 'none',
    rounded: 'xl',
    border: '3px solid',
    borderColor: 'color2lighter',
    m: { b: '0.5rem' },
    maskImage: 'radial-gradient(white, black)', // To make sure border radius applies in Safari
  },
};

ImageContainer.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ImageContainer;
