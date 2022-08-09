import { motion } from 'framer-motion';
import { urlFor } from '../../sanity';

const MotionImage = ({
  imgUrl,
  imgWidth,
  imgHeight,
  alt,
  imgAspect,
  ...rest
}) => {
  return (
    <motion.img
      src={urlFor(imgUrl).width(imgWidth).height(imgHeight).auto('format')}
      alt={alt}
      loading='lazy'
      {...rest}
    />
  );
};

export default MotionImage;
