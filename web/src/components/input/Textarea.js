import { forwardRef } from 'react';

import Input from './Input';

const Textarea = forwardRef((props, ref) => {
  // =============================================
  // PROPS
  // =============================================
  const { TEXT_AREA_PROPS, ...rest } = props;
  // =============================================
  // PROPS DESTRUCT
  // =============================================

  return <Input ref={ref} {...TEXT_AREA_PROPS} {...rest} />;
});

Textarea.defaultProps = {
  TEXT_AREA_PROPS: {
    tag: 'textarea',
    d: 'flex',
    p: { x: '0.75rem', y: '0.5rem' },
    textSize: 'body',
    rounded: 'md',
    border: '1px solid',
    borderColor: 'gray500',
    h: '6.5rem',
    w: '100%',
    minW: '100%',
    bg: 'white',
    textColor: 'dark',
    textWeight: '500',
    focusBorderColor: 'gray700',
  },
};

export default Textarea;
