// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import computeButtonStyle from './Button.style';

const Button = forwardRef((props, ref) => {
  const output = computeButtonStyle(props, props.theme);
  const styleArray = output[1];

  const { data, children, className, ...rest } = output[0];

  return (
    <BasicButton
      ref={ref}
      className={className}
      {...rest}
      $styleArray={styleArray}
    >
      {children}
    </BasicButton>
  );
});

// ==========================================
// STYLED BUTTON
// ==========================================

const BasicButton = styled.button`
  ${(props) => ({
    ...props.$styleArray,
  })}

  touch-action: manipulation;
  letter-spacing: inherit;
  line-height: var(--font-lineheight-1);
`;

// ==========================================
// DEFAULT PROPS
// ==========================================
Button.defaultProps = {
  pos: 'relative',
  d: 'inline-block',
  cursor: 'pointer',

  // Size
  p: '0px',
  m: '0px',
  h: '2.5rem',
  w: '2.5rem',

  // Visual
  bg: 'transparent',
  color: '#fff',
  border: 'none',
  // Text
  textDecor: 'none',
  textAlign: 'center',
  textWeight: '700',
  fontFamily: 'inherit',

  // Disabled
  disableBg: 'color2lighter',
  disableShadow: '0',
  disableBorderColor: 'color2lighter',
  disableColor: 'color2dark',
};

export default withTheme(Button);
