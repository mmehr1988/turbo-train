// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionLinkIcon } from '../../../components';

const ExternalIcons = (props) => {
  const theme = useTheme();

  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  // const renders = React.useRef(0);
  // console.log(`EXTERNAL | LINKS | RE-RENDERED: ${renders.current++}`);
  // ==========================================
  // PROPS
  // ==========================================
  const { keyName, link, LINK_PROPS, ICON_PROPS } = props;
  // ==========================================================
  // PROPS DESTRUCTURED
  // ==========================================================

  const { className: LINK_CLASS_NAME, ...LINK_PROPS_REST } = LINK_PROPS;
  const { className: ICON_CLASS_NAME, ...ICON_PROPS_REST } = ICON_PROPS;

  // ==========================================================
  // INPUTS
  // ==========================================================
  const MOTION_KEY_LINK = `motion-link-footer-social-${keyName}`;
  const MOTION_KEY_ICON = `motion-icon-footer-social-${keyName}`;
  const FOCUS_NAME = `Footer ${keyName}`;
  const LINK_CLASS = `${LINK_CLASS_NAME}-${keyName}`;
  const ICON_CLASS = `${ICON_CLASS_NAME} app__icon-${keyName}`;
  const ICON_VIEW = [0, 0, 24, 24];

  const OTHER_STYLES_LINK = {
    p: '0px',
    m: '0px',
    w: '30px',
    h: '30px',
  };

  const OTHER_STYLES_ICON = {
    rounded: theme.rounded.xs,
    color: theme.colors.bgPrimary,
    bg: theme.colors.color1,
  };

  // ==========================================================
  // ==========================================================
  return (
    <MotionLinkIcon
      key={LINK_CLASS}
      motionProps={{
        className: LINK_CLASS,
        link: link,
        ...OTHER_STYLES_LINK,
        ...LINK_PROPS_REST,
      }}
      iconProps={{
        name: keyName,
        className: ICON_CLASS,
        view: ICON_VIEW,
        ...OTHER_STYLES_ICON,
        ...ICON_PROPS_REST,
      }}
      motionKeys={{
        motionlink: MOTION_KEY_LINK,
        motionIcon: MOTION_KEY_ICON,
      }}
      focusName={FOCUS_NAME}
    />
  );
};

ExternalIcons.defaultProps = {
  LINK_PROPS: {
    className: 'app__social-icons-links',
  },
  ICON_PROPS: {
    className: 'app__social-icons-svg',
  },
};

export default ExternalIcons;
