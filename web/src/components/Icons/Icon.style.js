import { makeResponsive, findDirection, arrayKeyMapToObject } from '../../lib';

const computeIconStyle = (props, context) => {
  const {
    d,
    height,
    width,
    m,
    p,
    pos,
    transform,
    transformOrigin,
    transformStyle,
    order,
    top,
    bottom,
    left,
    right,
    cursor,
    rounded,
    name,
    bg,
    color,
    hoverColor,
    zIndex,
    opacity,
    transition,

    // =================================================
    userSelect,
    pointerEvents,
    stroke,
    strokeLinecap,
    strokeLinejoin,
    strokeWidth,
    inlineSize,
    blockSize,
    overflow,
    ...rest
  } = props;

  const style = [
    { boxSizing: 'border-box' },
    findDirection(m, 'margin'),
    findDirection(p, 'padding'),
    findDirection(height, 'height'),
    findDirection(width, 'width'),
    findDirection(width, 'min-width'),
    findDirection(height, 'min-height'),
    makeResponsive(d, 'display'),
    makeResponsive(pos, 'position'),
    makeResponsive(top, 'top'),
    makeResponsive(bottom, 'bottom'),
    makeResponsive(left, 'left'),
    makeResponsive(right, 'right'),
    makeResponsive(order, 'order'),
    makeResponsive(cursor, 'cursor'),
    makeResponsive(bg, 'background'),
    makeResponsive(rounded, 'border-radius'),
    makeResponsive(transform, 'transform'),
    makeResponsive(transformOrigin, 'transform-origin'),
    makeResponsive(transformStyle, 'transform-style'),
    makeResponsive(zIndex, 'z-index'),
    makeResponsive(opacity, 'opacity'),

    // =================================================
    // NEW STYLES
    // =================================================
    makeResponsive(userSelect, 'user-select'),
    makeResponsive(pointerEvents, 'pointer-events'),
    makeResponsive(stroke, 'stroke'),
    makeResponsive(strokeLinecap, 'stroke-linecap'),
    makeResponsive(strokeLinejoin, 'stroke-linejoin'),
    makeResponsive(strokeWidth, 'stroke-width'),
    makeResponsive(inlineSize, 'inline-size'),
    makeResponsive(blockSize, 'block-size'),
    makeResponsive(overflow, 'overflow'),
  ];

  return [rest, arrayKeyMapToObject(style)];
};

export default computeIconStyle;
