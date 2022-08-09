// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, {
  useContext,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MenuContext } from '../../../../Context';
import { Button } from '../../../../components';
import { useGlobalWindowResize } from '../../../../hooks';

import { handleAriaLabel } from '../../../../lib';
import { ManualFocusOutlineMixin } from '../../../../global';

const menuToggleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ToggleButton = (props) => {
  // ==========================================
  // TRACKING RERENDERS
  // ==========================================
  // const renders = useRef(0);
  // console.log(`TOGGLE BUTTON Rendered: ${renders.current++}`);

  // ==========================================================
  // PROPS
  // ==========================================================
  const { BTN_PROPS, iconProps: ICON_PROPS } = props;
  const {
    className: buttonClassName,
    focusName: FOCUS_NAME,
    ...button
  } = BTN_PROPS;

  // ==========================================================
  // BODY LOCK HOOK
  // ==========================================================

  // ==========================================================
  // CONTEXT
  // ==========================================================
  const { isMenuOpen, dispatch } = useContext(MenuContext);

  // ==========================================================
  // STATE
  // ==========================================================
  const [menuType, setMenuType] = useState('');
  const [isHovering, setIsHovering] = useState(0);
  const [isFocused, setIsFocused] = useState(0);

  // ==========================================================
  // HANDLERS
  // ==========================================================
  const handleKeyPress = (e) => {
    e.preventDefault();

    if (e.code === 'Space') {
      dispatch({ type: 'TOGGLE_MENU' });
      e.target.blur();
    }
  };

  // ==========================================
  // HANDLE MENU TYPE
  // ==========================================

  // [1] ON MOUNT / BEFORE DOM PAINT
  useLayoutEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setMenuType('desktop');
      } else {
        setMenuType('mobile');
      }
    };
    handleWindowResize();
  }, []);

  // [2] ON RESIZE
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      if (isMenuOpen) {
        dispatch({ type: 'CLOSE_MENU' });
        setMenuType('desktop');
      } else {
        setMenuType('desktop');
      }
    } else {
      setMenuType('mobile');
    }
  }, [isMenuOpen, dispatch]);

  // ==========================================
  // GLOBAL RESIZE EVENT LISTENER
  // ==========================================

  useGlobalWindowResize(handleResize);

  // ==========================================
  // ON MENU TOGGLE
  // ==========================================
  // [1] ON MOUNT / BEFORE DOM PAINT
  useLayoutEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        setMenuType('desktop');
      } else {
        setMenuType('mobile');
      }
    };
    handleWindowResize();
  }, []);

  // ==========================================
  // ON MENU STATUS CHANGE
  // ==========================================
  useLayoutEffect(() => {
    const handleMenuToggle = () => {
      if (isMenuOpen) {
        document.body.classList.add('scroll-hidden');
        dispatch({ type: 'OPEN_MENU' });
      } else {
        document.body.removeAttribute('class');
        dispatch({ type: 'CLOSE_MENU' });
      }
    };
    handleMenuToggle();
  }, [isMenuOpen, dispatch]);

  return (
    <AnimatePresence initial={true}>
      <Toggle
        {...button}
        onHoverStart={() => setIsHovering(1)}
        onHoverEnd={() => setIsHovering(0)}
        onFocus={() => setIsFocused(1)}
        onBlur={() => setIsFocused(0)}
        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
        onTap={(e) => e.target.blur()}
        onKeyUp={(e) => handleKeyPress(e)}
        aria-label={handleAriaLabel(isFocused, FOCUS_NAME, 'button')}
        aria-live='polite'
        variants={menuToggleVariants}
        animate={menuType === 'mobile' ? 'visible' : 'hidden'}
        exit='hidden'
      >
        <svg viewBox={ICON_PROPS.view} fill='none' focusable='false'>
          <motion.path
            className={`top ${isMenuOpen ? 'open' : 'closed'}`}
            d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
            animate={{
              y: !isMenuOpen && (isHovering || isFocused) ? -8 : 0,
            }}
          />
          <motion.path
            className={`middle ${isMenuOpen ? 'open' : 'closed'}`}
            d='M 20,50 H 80'
          />
          <motion.path
            className={`bottom ${isMenuOpen ? 'open' : 'closed'}`}
            d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
            animate={{
              y: !isMenuOpen && (isHovering || isFocused) ? 8 : 0,
            }}
          />
        </svg>
      </Toggle>
    </AnimatePresence>
  );
};

ToggleButton.defaultProps = {
  BTN_PROPS: {
    className: 'app__toggle-button',
    tag: 'button',
    d: { minMD: 'none', maxMD: 'block' },
    w: '60px',
    h: '60px',
    bg: 'transparent',
    p: '6px',
    m: '0px',
    focusName: 'menu toggle',
    shadow: 'none',
    hoverShadow: 'none',
  },
  iconProps: {
    view: [0, 0, 100, 100],
    d: 'block',
    w: '100%',
    h: '100%',
  },
};

export default ToggleButton;

const Toggle = styled(motion(Button))`
  // ==========================================
  /* FOR FOCUS OUTLINE */
  // ==========================================

  ${ManualFocusOutlineMixin}
  --pathWidth: 57.5%;
  --pathHeight: 57.5%;

  &:focus {
    &:after {
      border-radius: 3px;
    }
  }

  /* ============================================ */
  /* ANIMATION */
  /* ============================================ */

  svg {
    --transition-time: 0.4s;
    --transition-easing: var(--ease-4);
    --transition: var(--transition-time) var(--transition-easing);

    path {
      stroke: var(--color-1);
      stroke-width: 9;
      stroke-linecap: round;
      stroke-linejoin: round;

      transition: stroke-dasharray var(--transition),
        stroke-dashoffset var(--transition);

      /* PATH WHEN CLOSED */
      &.closed {
        &.top,
        &.bottom {
          stroke-dasharray: 60 207;
        }

        &.middle {
          stroke-dasharray: 35;
        }
      }

      /* PATH WHEN OPEN */
      &.open {
        &.top,
        &.bottom {
          stroke-dasharray: 90 207;
          stroke-dashoffset: -134;
        }

        &.middle {
          stroke-dasharray: 1 60;
          stroke-dashoffset: -30;
        }
      }
    }
  }
`;
