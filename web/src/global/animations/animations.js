export const ANIMATE_CHECK = (className, isTapped, isHovering, isFocused) => {
  if (className.includes('active' || 'disabled')) {
    return 'rest';
  } else if (!className.includes('active' || 'disabled')) {
    if (isTapped) {
      return 'tap';
    } else if (isHovering || isFocused) {
      return 'hover';
    } else {
      return 'rest';
    }
  }
};

// ==========================================
// MAIN STAGGER VARIANTS
// ==========================================

export const containerStaggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07, // duration
      delayChildren: 0.2,
    },
  },

  hidden: {
    transition: {
      staggerChildren: 0.05, // duration
      staggerDirection: -1,
      delayChildren: 0.17,
    },
  },
};

export const baseOpacityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ==========================================
// NAVBAR OVERLAY VARIANTS
// ==========================================

export const menuOverlayVariants = {
  hidden: {
    x: '100vw',
    transition: {
      delay: 1,
      duration: 1 / 4,
      ease: 'linear',
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 1 / 4,
      ease: 'linear',
    },
  },
};

// ==========================================
// BUTTON VARIANTS
// ==========================================

export const BtnBaseVariables = {
  INITIAL_SHADOW: `0px 1px 2px 0px rgba(60, 64, 67, 0.3)`,
  HOVER_SHADOW: `0px 60px 30px -7px rgba(60, 64, 67, 0.3)`,
  TAP_SHADOW: `0px 0px 0px 10px rgba(60, 64, 67, 0)`,
  BORDER_RADIUS: 5,
};

// BUTTON | TEXT VARIANTS

export const motionBtnTextVariants = {
  rest: {
    boxShadow: BtnBaseVariables.INITIAL_SHADOW,
  },
  hover: {
    scale: 1.05,
    boxShadow: BtnBaseVariables.HOVER_SHADOW,
  },
  tap: {
    scale: 0.8,
    boxShadow: `0px 10px 10px -7px rgba(60, 64, 67, 0.3)`,
    transition: {
      duration: 0.1,
    },
  },
};

export const motionBtnTextTransition = {
  type: 'tween',
  duration: 0.2,
};

// BUTTON | ICON VARIANTS
export const motionBtnIconBtnVariants = {
  rest: {
    borderRadius: BtnBaseVariables.BORDER_RADIUS,
    boxShadow: BtnBaseVariables.INITIAL_SHADOW,
  },
  hover: {
    borderRadius: BtnBaseVariables.BORDER_RADIUS,
    boxShadow: BtnBaseVariables.HOVER_SHADOW,
    filter: 'contrast(1.15)',
  },
  tap: {
    borderRadius: BtnBaseVariables.BORDER_RADIUS,
    boxShadow: BtnBaseVariables.TAP_SHADOW,
    transition: {
      boxShadow: {
        duration: 0,
      },
    },
  },
};

export const motionBtnIconVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.125,
  },
  tap: {
    scale: 0.9,
  },
};

export const motionBtnIconTransition = {
  type: 'tween',
  ease: [0.25, 1, 0.5, 1],

  boxShadow: {
    duration: 0.3,
  },
  filter: {
    duration: 0.1,
  },
  scale: {
    duration: 0.3,
  },
};

// ==========================================
// FORM VARIANTS
// ==========================================

const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

const randomDuration = () => Math.random() * 0.07 + 0.23;

export const formStaggerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // duration
      delayChildren: 0.15,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.2, // duration
      staggerDirection: -1,
      delayChildren: 0.15,
    },
  },
};

export const formVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const shakeVariants = {
  start: (i) => ({
    rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
    transition: {
      delay: getRandomDelay(),
      repeat: Infinity,
      duration: randomDuration(),
    },
  }),
  reset: {
    rotate: 0,
  },
};
