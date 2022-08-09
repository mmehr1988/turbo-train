// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { forwardRef } from 'react';
import styled, { css, withTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { UnderlineMixin } from '../../global';

import computeTextStyle from './Text.style';

// ==========================================
// COMPONENT
// ==========================================

const Text = forwardRef((props, ref) => {
  const output = computeTextStyle(props, props.theme);
  const { animation, ...rest } = output[0];
  const styleArray = output[1];

  return (
    <BasicText
      ref={ref}
      $as={props.tag}
      {...rest}
      $styleArray={styleArray}
      animation={animation}
    />
  );
});

// ==========================================
// STYLED P
// ==========================================

const BasicText = styled.p`
  ${(props) => ({
    ...props.$styleArray,
  })}

  /* ========================================= */
  /* FOR UNDERLINE ANIMATION */
  /* ========================================= */

  &:focus {
    outline-offset: 5px;
  }

  ${(props) => {
    switch (props.animation) {
      case 'underline':
        return css`
          position: relative;

          &:after {
            ${UnderlineMixin.underLineCommon({
              b: `-3px`,
              h: `1px`,
            })}

            transition: width 0.25s ease;
            width: 0%;
          }

          &:hover,
          &:focus {
            :after {
              width: 100%;
            }
          }
        `;
      case 'letterSpacing':
        return css`
          position: relative;

          &:hover,
          &:focus {
            letter-spacing: 0.5ch; // textSpacing
          }
        `;
      default:
        return;
    }
  }}
`;

// ==========================================
// DEFAULT PROPS
// ==========================================

Text.defaultProps = {
  textSize: '1rem',
  tag: 'p',
  m: '0',
  p: '0',
  rounded: 0,
  border: 'none',
};

export default withTheme(Text);
