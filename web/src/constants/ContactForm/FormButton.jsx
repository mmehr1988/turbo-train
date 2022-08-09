// =============================================
// EXTERNAL IMPORTS
// =============================================
import React, { useState, useEffect, useCallback, memo } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

// =============================================
// INTERNAL IMPORTS
// =============================================
import { MotionDiv, Button } from '../../components';

import { lodashIsEqual } from '../../lib';
// import { useCountRenders } from '../../hooks';

const FormButton = (props) => {
  // =============================================
  // TRACKING RENDERS
  // =============================================
  // useCountRenders('Submit Button');

  // =====================================================
  // PROPS
  // =====================================================
  const { CONTAINER_PROPS, BUTTON_PROPS, disabled, isSubmitting } = props;

  const { className: CONTAINER_CLASSNAME, ...container } = CONTAINER_PROPS;
  const { className: BUTTON_CLASSNAME, ...button } = BUTTON_PROPS;

  // =====================================================
  // STATE
  // =====================================================
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateText, setAnimateText] = useState('Sending');

  // =====================================================
  // ANIMATION
  // =====================================================

  const sendingControls = useAnimation();

  const animate = useCallback(async () => {
    setIsAnimating(true);

    await sendingControls.start({
      x: 0,
      transition: { duration: 3 },
    });

    setAnimateText('Message Sent 🎶');
  }, [sendingControls]);

  // =====================================================
  // ANIMATION
  // =====================================================

  useEffect(() => {
    if (isSubmitting) {
      animate();
    }
  }, [isSubmitting, animate]);

  return (
    <Container className={CONTAINER_CLASSNAME} {...container}>
      <MotionButton
        className={BUTTON_CLASSNAME}
        {...button}
        onTap={(e) => e.target.blur()}
        disabled={disabled}
      >
        <motion.span className='app__form-submit-text send-message'>
          {isAnimating ? animateText : 'Send Message'}
        </motion.span>

        <motion.span
          className='app__form-submit-animation'
          animate={sendingControls}
          initial={{
            x: '-100%',
          }}
        />
      </MotionButton>
    </Container>
  );
};

FormButton.defaultProps = {
  CONTAINER_PROPS: {
    tag: 'div',
    className: 'app__form-button-container',
    d: 'flex',
  },
  BUTTON_PROPS: {
    className: 'app__form-button',
    type: 'submit',
    w: '100%',
    h: '48px',
    bg: 'color1',
    textColor: 'bgPrimary',
    rounded: 'md',
    cursor: 'pointer',
    textWeight: 900,
    disableBg: 'color2lighter',
    disableColor: 'bgPrimary',
  },
};

export default memo(FormButton, (prevProps, nextProps) => {
  if (!lodashIsEqual(prevProps, nextProps)) {
    return false;
  }

  return true;
});

const Container = styled(MotionDiv)``;

const MotionButton = styled(motion(Button))`
  overflow: hidden;
  border-radius: var(--F_roundedMD);
  border: 3px solid ${({ theme }) => theme.colors.color1};

  .app__form-submit-text {
    &.send-message {
      position: absolute;

      top: 25%;
      left: 0;

      width: 100%;
      height: 100%;

      z-index: 100;
    }
  }

  .app__form-submit-animation {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: hsl(8, 78%, 59%);

    display: flex;
    align-items: center;
    justify-content: center;

    /* border-radius: 5px; */
  }
`;
