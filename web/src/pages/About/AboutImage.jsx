// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef } from 'react';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { ImageContainer } from '../../constants';
import { Image } from '../../components';

const AboutImage = (props) => {
  const { containerProps, imageProps, image } = props;

  const {
    className: imageClassName,
    alt,
    aspect,
    scale,
    whileHoverScale,
    ...imgProps
  } = imageProps;

  const imageRef = useRef(createRef());

  return (
    <ImageContainer {...containerProps}>
      <Image
        ref={imageRef}
        key={imageClassName}
        className={imageClassName}
        imgUrl={image}
        alt={alt}
        aspect={aspect}
        {...imgProps}
      />
    </ImageContainer>
  );
};

AboutImage.defaultProps = {
  containerProps: {
    className: 'app__about-image-container',
    m: '0px',
    p: '0px',
    w: '100%',
    aspect: 808 / 408,
  },
  imageProps: {
    className: 'app__about-image',
    alt: 'Mehdi & Carly sitting on a bench',
    aspect: 808 / 408,
    transform: 'scale(1.1)',
  },
};

export default AboutImage;
