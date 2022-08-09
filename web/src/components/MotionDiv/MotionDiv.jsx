// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { forwardRef } from 'react';
import styled, { withTheme, css } from 'styled-components';
// ==========================================
// INTERNAL IMPORTS
// ==========================================

import computeDivStyle from './MotionDiv.style';
import { UnderlineMixin } from '../../global';

// ==========================================
// COMPONENT
// ==========================================

const MotionDiv = forwardRef((props, ref) => {
  const output = computeDivStyle(props, props.theme);
  const styleArray = output[1];
  const { children, className, animation, ...rest } = output[0];

  return (
    <MotionDivContainer
      ref={ref}
      $as={props.tag}
      className={className}
      $styleArray={styleArray}
      animation={animation}
      {...rest}
    >
      {children}
    </MotionDivContainer>
  );
});

const MotionDivContainer = styled.div`
  ${(props) => ({
    ...props.$styleArray,
  })}

  ${(props) => {
    switch (props.animation) {
      case 'underline':
        return css`
          position: relative;

          svg {
            /* This is for the space occupied by the underline */
            transform: translateY(3px);
          }

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

MotionDiv.defaultProps = {
  tag: 'div',
};

export default withTheme(MotionDiv);
