export const handleHoverStatus = (motionState, motionKey) => {
  if (
    motionState['motionKey'] === motionKey &&
    motionState['motionHover'] === 1
  ) {
    return 'hover';
  } else {
    return '';
  }
};

export const handleFocusStatus = (motionState, motionKey) => {
  if (
    motionState['motionKey'] === motionKey &&
    motionState['motionFocus'] === 1
  ) {
    return 'focus';
  } else {
    return '';
  }
};

export const handleTapStatus = (motionState, motionKey) => {
  if (
    motionState['motionKey'] === motionKey &&
    motionState['motionTap'] === 1
  ) {
    return 'tap';
  } else {
    return '';
  }
};
