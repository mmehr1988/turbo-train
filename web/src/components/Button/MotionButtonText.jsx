// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useState, useRef, createRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import PropTypes from 'prop-types';
// ==========================================
// INTERNAL IMPORTS
// ==========================================

import Button from './Button';
import {
  FocusOutlineMixin,
  ANIMATE_CHECK,
  BtnBaseVariables,
  motionBtnTextVariants,
  motionBtnTextTransition,
} from '../../global';

const MotionButtonText = (props) => {
  // ==========================================================
  // PROPS
  // ==========================================================
  const { buttonProps, children, motionKeys, onClick, ...rest } = props;

  const { className: buttonClassName, ...button } = buttonProps;

  // ==========================================================
  // STATE
  // ==========================================================
  const [isHovering, setIsHovering] = useState(0);
  const [isFocused, setIsFocused] = useState(0);
  const [isTapped, setIsTapped] = useState(0);

  // ==========================================================
  // TOGGLE REFS
  // ==========================================================
  const buttonRef = useRef(createRef());

  return (
    <ButtonIcon
      layout
      ref={buttonRef}
      {...button}
      {...rest}
      key={motionKeys.motionBtn}
      className={buttonClassName}
      onHoverStart={() => setIsHovering(1)}
      onHoverEnd={() => setIsHovering(0)}
      onFocus={() => setIsFocused(1)}
      onBlur={() => setIsFocused(0)}
      isFocused={isFocused}
      style={{
        borderRadius: 5,
        boxShadow: BtnBaseVariables.INITIAL_SHADOW,
      }}
      onTapStart={() => setIsTapped(1)}
      onTap={() => {
        setIsTapped(0);
        buttonRef.current.blur();
      }}
      onClick={onClick}
      variants={motionBtnTextVariants}
      initial='rest'
      animate={ANIMATE_CHECK(buttonClassName, isTapped, isHovering, isFocused)}
      transition={motionBtnTextTransition}
    >
      {children}
    </ButtonIcon>
  );
};

MotionButtonText.propTypes = {
  motionKeys: PropTypes.object.isRequired,
  focusName: PropTypes.string.isRequired,
};

export default MotionButtonText;

const ButtonIcon = styled(motion(Button))`
  ${FocusOutlineMixin}
`;
