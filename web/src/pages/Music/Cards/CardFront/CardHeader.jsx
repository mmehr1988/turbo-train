// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { ImageContainer } from '../../../../constants';
import { Image } from '../../../../components';

const CardHeader = (props) => {
  const { cardId: motionKey, image, alt, containerProps, imageProps } = props;

  const { className: containerClassName } = containerProps;

  const {
    className: imageClassName,
    imgWidth,
    imgHeight,
    scale,
    whileHoverScale,
    ...imgProps
  } = imageProps;

  const imageRef = useRef(createRef());

  return (
    <ImageContainer className={containerClassName}>
      <MotionImage
        ref={imageRef}
        key={`${imageClassName}-${motionKey}`}
        className={imageClassName}
        imgUrl={image}
        alt={alt}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        aspect={imgWidth / imgHeight}
        style={{
          scale: scale,
        }}
        whileHover={{
          scale: whileHoverScale,
        }}
        {...imgProps}
      />
    </ImageContainer>
  );
};

CardHeader.defaultProps = {
  containerProps: {
    className: 'app__music-card-image-container',
  },
  imageProps: {
    className: 'app__music-card-image',
    imgWidth: 350,
    imgHeight: 350,
    scale: 1.1,
    whileHoverScale: 1.2,
  },
};

export default CardHeader;

const MotionImage = styled(motion(Image))``;
