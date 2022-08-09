// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useContext } from 'react';
import { useTheme } from 'styled-components';

// ==========================================
// CONTEXT
// ==========================================
import { ContactContext } from '../../../../Context';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionButtonIcon } from '../../../../components';

const ContactButton = (props) => {
  const theme = useTheme();
  // ==========================================================
  // PROPS
  // ==========================================================
  const { buttonProps, iconProps } = props;

  // ==========================================================
  // PROPS DESTRUCTURED
  // ==========================================================
  const { className: buttonClassName, w, scaleRatio, ...button } = buttonProps;
  const { className: iconClassName, ...icon } = iconProps;

  // ==========================================================
  // BUTTON REFS
  // ==========================================================

  const { dispatch } = useContext(ContactContext);

  return (
    <MotionButtonIcon
      buttonProps={{
        className: buttonClassName,
        w: `${w}px`,
        h: `${w / scaleRatio}px`,
        ...button,
      }}
      iconProps={{
        className: iconClassName,
        bg: theme.colors.color1,
        color: theme.colors.bgPrimary,
        rounded: theme.rounded.md,
        ...icon,
      }}
      motionKeys={{
        motionBtn: `motion-btn-${buttonClassName}`,
        motionIcon: `motion-icon-${iconClassName}`,
      }}
      focusName={'contact'}
      onClick={() => dispatch({ type: 'TOGGLE_CONTACT_FORM' })}
    />
  );
};

ContactButton.defaultProps = {
  buttonProps: {
    className: 'app__contact-button',
    w: 42,
    scaleRatio: 24 / 19.2,
    focusName: 'contact',
  },
  iconProps: {
    name: 'Email',
    className: 'app__svg-contact',
    view: [0, 0, 24, 7.5],
  },
};

export default ContactButton;
