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
import Icon from '../Icons/Icon';
import {
  FocusOutlineMixin,
  motionBtnIconBtnVariants,
  motionBtnIconVariants,
  motionBtnIconTransition,
  BtnBaseVariables,
} from '../../global';

import { handleAriaLabel } from '../../lib';

const MotionButtonIcon = (props) => {
  // ==========================================================
  // PROPS
  // ==========================================================
  const {
    MOTION_WRAPPER_PROPS,
    buttonProps: BTN_PROPS,
    iconProps: ICON_PROPS,
    motionKeys: MOTION_KEYS,
    focusName: FOCUS_NAME,
    onClick,
    ...rest
  } = props;

  const { className: BTN_CLASS_NAME, ...button } = BTN_PROPS;

  // ==========================================================
  // STATE
  // ==========================================================
  const [isHovering, setIsHovering] = useState(0);
  const [isFocused, setIsFocused] = useState(0);
  const [isTapped, setIsTapped] = useState(0);

  // ==========================================================
  // REFS
  // ==========================================================
  const BTN_REF = useRef(createRef());
  const ICON_REF = useRef(createRef());

  // ==========================================================
  // OTHER STYLES  + ANIMATION
  // ==========================================================

  const OTHER_STYLES = {
    borderRadius: !ICON_PROPS.rounded ? 5 : ICON_PROPS.rounded,
    boxShadow: !BTN_PROPS.animation ? BtnBaseVariables.INITIAL_SHADOW : '',
    filter: 'contrast(1.1)',
  };

  const ANIMATE_TAP = isTapped && 'tap';
  const ANIMATE_HOVER_FOCUS = isHovering || isFocused ? 'hover' : 'rest';

  return (
    <Wrapper
      layout
      key={MOTION_KEYS.motionBtn}
      ref={BTN_REF}
      {...button}
      {...rest}
      className={BTN_CLASS_NAME}
      onHoverStart={() => setIsHovering(1)}
      onHoverEnd={() => setIsHovering(0)}
      onFocus={() => setIsFocused(1)}
      onBlur={() => setIsFocused(0)}
      style={OTHER_STYLES}
      aria-label={handleAriaLabel(isFocused, FOCUS_NAME, 'button')}
      aria-live='polite'
      onTapStart={() => setIsTapped(1)}
      onTap={() => {
        setIsTapped(0);
        BTN_REF.current.blur();
      }}
      onClick={onClick}
      variants={!BTN_PROPS.animation ? motionBtnIconBtnVariants : ''}
      initial={!BTN_PROPS.animation ? 'rest' : ''}
      animate={
        !BTN_PROPS.animation
          ? ANIMATE_TAP
            ? ANIMATE_TAP
            : ANIMATE_HOVER_FOCUS
          : ''
      }
      transition={!BTN_PROPS.animation ? motionBtnIconTransition : ''}
    >
      <Icon
        layout
        key={MOTION_KEYS.motionIcon}
        ref={ICON_REF}
        {...ICON_PROPS}
        variants={motionBtnIconVariants}
        custom={isFocused}
        transition={motionBtnIconTransition}
      />
    </Wrapper>
  );
};

MotionButtonIcon.propTypes = {
  motionKeys: PropTypes.object.isRequired,
  focusName: PropTypes.string.isRequired,
};

MotionButtonIcon.defaultProps = {
  MOTION_WRAPPER_PROPS: {
    d: 'inline-flex',
    cursor: 'pointer',
  },
};

export default MotionButtonIcon;

const Wrapper = styled(motion(Button)).attrs((props) => ({
  tabIndex: 0,
  tag: 'button',
  role: 'button',
}))`
  ${FocusOutlineMixin}

  &.app__scroll-up-button {
    position: fixed !important;
  }
`;
