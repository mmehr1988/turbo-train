// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionLinkIcon } from '../../../../components';

const BandcampLink = (props) => {
  const theme = useTheme();

  // ==========================================
  // PROPS
  // ==========================================
  const {
    title: CARD_TITLE,
    activeProject: CATEGORY,
    iconTitle: keyName,
    link,
    LINK_PROPS,
    ICON_PROPS,
  } = props;

  const { className: LINK_CLASS_NAME, ...LINK_PROPS_REST } = LINK_PROPS;
  const { className: ICON_CLASS_NAME, ...ICON_PROPS_REST } = ICON_PROPS;

  // ==========================================================
  // INPUTS
  // ==========================================================
  const MOTION_KEY_LINK = `motion-btn-portfolio-external-link-${CARD_TITLE}`;
  const MOTION_KEY_ICON = `motion-icon-portfolio-external-link-${CARD_TITLE}`;
  const FOCUS_NAME = `${CATEGORY} - ${CARD_TITLE} - ${keyName} external link`;

  const LINK_CLASS = `${LINK_CLASS_NAME}-${keyName}`;
  const ICON_CLASS = `${ICON_CLASS_NAME} app__icon-${keyName}`;
  const SCALE_RATIO = 110 / 109;
  const ICON_BANDCAMP_VIEW = [0, 0, 109, 24];

  const OTHER_STYLES_LINK = {
    className: LINK_CLASS,
    link: link,
    p: '0px',
    m: '0px',
    bg: 'transparent',
    w: `${SCALE_RATIO * ICON_BANDCAMP_VIEW[2]}px`,
    h: `${SCALE_RATIO * ICON_BANDCAMP_VIEW[3]}px`,
  };

  const OTHER_STYLES_ICON = {
    name: keyName,
    className: ICON_CLASS,
    view: ICON_BANDCAMP_VIEW,
    rounded: theme.rounded.xs,
    color: theme.colors.color2,
  };

  return (
    <MotionLinkIcon
      key={`${LINK_CLASS}-${keyName}`}
      motionProps={{
        ...OTHER_STYLES_LINK,
        ...LINK_PROPS_REST,
      }}
      iconProps={{
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

BandcampLink.defaultProps = {
  LINK_PROPS: {
    className: 'app__music-link',
    animation: 'underline',
  },
  ICON_PROPS: {
    className: 'app__portfolio-card-footer-external-icon',
  },
};

export default BandcampLink;
