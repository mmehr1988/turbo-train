import {
  makeResponsive,
  findDirection,
  arrayKeyMapToObject,
  findRoundedDirection,
  findBorder,
} from '../../lib/style-functions';

const computeImageStyle = (props, context) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    flexGrow,
    order,
    m,
    p,
    rounded,
    border,
    borderColor,
    h,
    maxH,
    minH,
    w,
    minW,
    maxW,
    cursor,
    shadow,
    transition,
    transform,
    transformOrigin,
    zIndex,
    opacity,
    hoverBorderColor,
    hoverShadow,
    theme,
    aspect,
    objectFit,
    objectPos,
    filter,
    ...rest
  } = props;

  const style = [
    findRoundedDirection(rounded, context.rounded),
    findDirection(m, 'margin'),
    findDirection(p, 'padding'),
    makeResponsive(d, 'display'),
    makeResponsive(pos, 'position'),
    makeResponsive(top, 'top'),
    makeResponsive(bottom, 'bottom'),
    makeResponsive(left, 'left'),
    makeResponsive(right, 'right'),
    makeResponsive(flexGrow, 'flex'),
    makeResponsive(order, 'order'),
    makeResponsive(h, 'height'),
    makeResponsive(maxH, 'max-height'),
    makeResponsive(minH, 'min-height'),
    makeResponsive(w, 'width'),
    makeResponsive(minW, 'min-width'),
    makeResponsive(maxW, 'max-width'),
    makeResponsive(cursor, 'cursor'),
    findBorder(border, borderColor, context.colors),
    makeResponsive(transform, 'transform'),
    makeResponsive(transformOrigin, 'transform-origin'),
    makeResponsive(shadow, 'box-shadow', context.shadows),
    makeResponsive(transition, 'transition', context.transition),
    makeResponsive(zIndex, 'z-index'),
    makeResponsive(opacity, 'opacity'),
    // ======================================================
    // NEW STYLES
    // ======================================================
    makeResponsive(aspect, 'aspect-ratio'),
    makeResponsive(objectFit, 'object-fit'),
    makeResponsive(objectPos, 'object-position'),
    makeResponsive(filter, 'filter'),

    {
      ':hover': {
        ...makeResponsive(hoverBorderColor, 'border-color', context.colors),
        ...makeResponsive(hoverShadow, 'box-shadow', context.shadows),
      },
    },
  ];

  return [rest, arrayKeyMapToObject(style)];
};

export default computeImageStyle;
