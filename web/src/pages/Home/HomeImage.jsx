import { useRef, createRef } from 'react';

import { MotionDiv, Image } from '../../components';

const HomeImage = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { containerProps, imageProps, image } = props;

  const { className: imageClassName, alt, aspect, ...imgProps } = imageProps;

  // ==========================================
  // REFS
  // ==========================================
  const homeImageContainerRef = useRef(createRef());
  const imageRef = useRef(createRef());

  return (
    <MotionDiv ref={homeImageContainerRef} {...containerProps}>
      <Image
        ref={imageRef}
        key={imageClassName}
        className={imageClassName}
        imgUrl={image}
        alt={alt}
        aspect={aspect}
        {...imgProps}
      />
    </MotionDiv>
  );
};

HomeImage.defaultProps = {
  containerProps: {
    className: 'app__hero-image-container',
    tag: 'figure',
  },
  imageProps: {
    className: 'app__home-hero-image',
    alt: 'Saint Abdullah performing at the shed',
    aspect: 2 / 1,
    w: '100vw',
    minH: '100%',
    pos: 'fixed',
    top: '0px',
    left: '0px',
  },
};

export default HomeImage;
