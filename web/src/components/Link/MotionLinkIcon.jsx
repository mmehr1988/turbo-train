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

import MotionDiv from '../MotionDiv/MotionDiv';
import Icon from '../Icons/Icon';

import {
  FocusOutlineMixin,
  motionBtnIconBtnVariants,
  motionBtnIconVariants,
  motionBtnIconTransition,
  BtnBaseVariables,
} from '../../global';

import { handleKeyClickExternal, handleAriaLabel } from '../../lib';

const MotionLinkIcon = (props) => {
  // ==========================================================
  // PROPS
  // ==========================================================
  const {
    MOTION_WRAPPER_PROPS,
    motionProps: LINK_PROPS,
    iconProps: ICON_PROPS,
    motionKeys: MOTION_KEYS,
    focusName: FOCUS_NAME,
  } = props;

  const { className: LINK_CLASS_NAME, link: HREF, ...external } = LINK_PROPS;

  // ==========================================================
  // STATE
  // ==========================================================
  const [isHovering, setIsHovering] = useState(0);
  const [isFocused, setIsFocused] = useState(0);
  const [isTapped, setIsTapped] = useState(0);

  // ==========================================================
  // REFS
  // ==========================================================
  const LINK_REF = useRef(createRef());
  const ICON_REF = useRef(createRef());

  // ==========================================================
  // OTHER STYLES  + ANIMATION
  // ==========================================================

  const OTHER_STYLES = {
    borderRadius: !ICON_PROPS.rounded ? 5 : ICON_PROPS.rounded,
    boxShadow: !LINK_PROPS.animation ? BtnBaseVariables.INITIAL_SHADOW : '',
    filter: 'contrast(1.1)',
  };

  const ANIMATE_TAP = isTapped && 'tap';
  const ANIMATE_HOVER_FOCUS = isHovering || isFocused ? 'hover' : 'rest';

  return (
    <Wrapper
      layout
      key={MOTION_KEYS.motionlink}
      ref={LINK_REF}
      href={HREF}
      {...MOTION_WRAPPER_PROPS}
      {...external}
      className={LINK_CLASS_NAME}
      onHoverStart={() => setIsHovering(1)}
      onHoverEnd={() => setIsHovering(0)}
      onFocus={() => setIsFocused(1)}
      onBlur={() => setIsFocused(0)}
      style={OTHER_STYLES}
      aria-label={handleAriaLabel(isFocused, FOCUS_NAME, 'link')}
      aria-live='polite'
      onTapStart={() => setIsTapped(1)}
      onTap={() => {
        setIsTapped(0);
        LINK_REF.current.blur();
      }}
      onKeyPress={(e) => handleKeyClickExternal(e, HREF)}
      variants={!LINK_PROPS.animation ? motionBtnIconBtnVariants : ''}
      initial={!LINK_PROPS.animation ? 'rest' : ''}
      animate={
        !LINK_PROPS.animation
          ? ANIMATE_TAP
            ? ANIMATE_TAP
            : ANIMATE_HOVER_FOCUS
          : ''
      }
      transition={!LINK_PROPS.animation ? motionBtnIconTransition : ''}
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

MotionLinkIcon.propTypes = {
  motionKeys: PropTypes.object.isRequired,
  focusName: PropTypes.string.isRequired,
};

MotionLinkIcon.defaultProps = {
  MOTION_WRAPPER_PROPS: {
    d: 'inline-flex',
    cursor: 'pointer',
  },
};

export default MotionLinkIcon;

const Wrapper = styled(motion(MotionDiv)).attrs((props) => ({
  tabIndex: 0,
  tag: 'a',
  role: 'link',
  target: '_blank',
  rel: 'noopener, noreferrer',
}))`
  -webkit-tap-highlight-color: transparent;
  ${FocusOutlineMixin}

  /* ================================================= */
  /* ICON SPECIFIC */
  /* ================================================= */

  /* HEROKU */
  .v-heroku {
    fill: ${({ theme }) => theme.colors.color2};
    stroke: ${({ theme }) => theme.colors.color2};
  }

  /* PDF BOX */
  .v-letter-d-rect,
  .v-letter-p-rect {
    fill: ${({ theme }) => theme.colors.color1};
  }
`;
