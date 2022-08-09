// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import computeInputStyle from './Input.style';
import MotionDiv from '../MotionDiv/MotionDiv';

const Input = forwardRef((props, ref) => {
  const output = computeInputStyle(props, props.theme);

  const styleArray = output[1];

  const { children, prefix, isLoading, suffix, order, tag, ...rest } =
    output[0];

  return (
    <MotionDiv
      pos='relative'
      d={rest.d}
      m={rest.m}
      w={rest.w}
      order={order}
      maxW={rest.maxW}
      minW={rest.minW}
      flexGrow={rest.flexGrow}
    >
      {prefix}
      <BasicInput ref={ref} {...rest} $as={tag} $styleArray={styleArray} />
      {suffix}
    </MotionDiv>
  );
});

export default withTheme(Input);

Input.defaultProps = {
  tag: 'input',
  d: 'flex',
  p: { x: '0.75rem' },
  textSize: 'body',
  rounded: 'md',
  border: '1px solid',
  borderColor: 'gray500',
  h: '2.5rem',
  w: '100%',
  bg: 'white',
  textColor: 'dark',
  textWeight: '500',
  focusBorderColor: 'gray900',
  placeholderTextColor: 'light',
  transition: 'true',
};

const BasicInput = styled.input`
  ${(props) => ({
    ...props.$styleArray,
  })}
`;
