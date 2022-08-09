// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ========================================================
// ANIMATIONS
// ========================================================
const scrollableIconVariants = {
  hidden: {
    y: 0,
  },
  visible: (flipped) => ({
    y: flipped ? [0, 8, 0] : 0,
    transition: {
      repeat: 1,
      repeatType: 'mirror',
      duration: 0.7,
      delay: 1,
    },
  }),
};

// ===========================================
// COMPONENT
// ===========================================

const ScrollableIcon = (props) => {
  const theme = useTheme();

  const { cardsFlippedState, flippedKey, iconProps } = props;
  const { className: iconClassName, ...icon } = iconProps;

  return (
    <motion.svg
      key={`motion-icon-scrollable-${flippedKey}`}
      className={iconClassName}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      variants={scrollableIconVariants}
      animate={cardsFlippedState ? 'visible' : 'hidden'}
      custom={cardsFlippedState}
      {...icon}
    >
      <g className='svg-scrollable-grp' transform='translate(4 .5)'>
        <motion.path
          key={`v-mouse-${flippedKey}`}
          className='v-mouse'
          d='M18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V9Z'
          stroke={theme.colors.color1}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          vectorEffect='non-scaling-stroke'
        />
        <motion.path
          key={`v-circle-${flippedKey}`}
          className='v-circle'
          d='M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z'
          fill={theme.colors.color1}
          strokeLinecap='round'
          strokeLinejoin='round'
          vectorEffect='non-scaling-stroke'
          variants={scrollableIconVariants}
          animate={cardsFlippedState ? 'visible' : 'hidden'}
          custom={cardsFlippedState}
        />
      </g>
    </motion.svg>
  );
};

ScrollableIcon.defaultProps = {
  iconProps: {
    name: 'Scrollable',
    className: 'app__icon-scrollable',
    width: '40px',
    height: '40px',
  },
};

export default ScrollableIcon;
