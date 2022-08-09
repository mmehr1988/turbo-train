// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionLinkIcon } from '../../../../../components';

const ExternalIcons = (props) => {
  const theme = useTheme();

  // ==========================================
  // TRACKING RENDERING
  // ==========================================
  // const renders = React.useRef(0);
  // console.log(`EXTERNAL | LINKS | RE-RENDERED: ${renders.current++}`);

  // ==========================================================
  // PROPS DESTRUCTURED
  // ==========================================================

  const { title: CARD_TITLE, keyName, link, LINK_PROPS, ICON_PROPS } = props;

  const { className: LINK_CLASS_NAME, ...LINK_PROPS_REST } = LINK_PROPS;
  const { className: ICON_CLASS_NAME, ...ICON_PROPS_REST } = ICON_PROPS;

  // ==========================================================
  // INPUTS
  // ==========================================================
  const MOTION_KEY_LINK = `motion-link-footer-social-${keyName}-${CARD_TITLE}`;
  const MOTION_KEY_ICON = `motion-icon-footer-social-${keyName}-${CARD_TITLE}`;
  const FOCUS_NAME = `Portfolio project ${CARD_TITLE} ${keyName}`;
  const LINK_CLASS = `${LINK_CLASS_NAME}-${keyName}`;
  const ICON_CLASS = `${ICON_CLASS_NAME} app__icon-${keyName}`;
  const SCALE_RATIO = 40 / 24;
  const ICON_BASE_VIEW = [0, 0, 24, 24];
  const ICON_HEROKU_VIEW = [0, 0, 21.54, 24];

  const OTHER_STYLES_LINK = {
    p: '0px',
    m: '0px',
    bg: 'transparent',
    w:
      keyName === 'Heroku'
        ? `${SCALE_RATIO * ICON_HEROKU_VIEW[2]}px`
        : `${SCALE_RATIO * ICON_BASE_VIEW[2]}px`,
    h:
      keyName === 'Heroku'
        ? `${SCALE_RATIO * ICON_HEROKU_VIEW[3]}px`
        : `${SCALE_RATIO * ICON_BASE_VIEW[3]}px`,
  };

  const OTHER_STYLES_ICON = {
    rounded: theme.rounded.xs,
    color: keyName === 'Heroku' ? '' : theme.colors.bgPrimary,
    bg: keyName === 'Heroku' ? '' : theme.colors.color1,
    view: keyName === 'Heroku' ? ICON_HEROKU_VIEW : ICON_BASE_VIEW,
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
