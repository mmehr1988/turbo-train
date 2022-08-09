// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { urlFor } from '../../sanity';
import PropTypes from 'prop-types';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import computeImageStyle from './Image.style';

const Image = forwardRef((props, ref) => {
  const output = computeImageStyle(props, props.theme);
  const { imgUrl, alt, imgWidth, imgHeight, ...rest } = output[0];

  const imgSrc = (url) =>
    urlFor(url).width(imgWidth).height(imgHeight).auto('format');

  return (
    <BaseImg
      ref={ref}
      src={imgSrc(imgUrl)}
      alt={alt}
      {...rest}
      $styleArray={output[1]}
    />
  );
});

const BaseImg = styled.img`
  ${(props) => ({
    ...props.$styleArray,
  })}
`;

Image.defaultProps = {
  tag: 'img',
  w: '100%',
  objectFit: 'cover',
  objectPos: 'center',
  d: 'block',
};

Image.propTypes = {
  className: PropTypes.string.isRequired,
  imgUrl: PropTypes.object.isRequired || PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  aspect: PropTypes.number.isRequired,
};

export default withTheme(Image);
