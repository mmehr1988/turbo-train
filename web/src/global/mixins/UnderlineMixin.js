import { css } from 'styled-components';

export const UnderlineMixin = {
  underLineCommon: ({ b, h, bg, w }) => css`
    content: '';
    position: absolute;
    left: 0;
    bottom: ${b ? b : `-2px`};
    height: ${h ? h : `1px`};
    width: ${w ? w : `100%`};
    background-color: ${bg ? bg : `var(--color-1)`};
    border-bottom-left-radius: var(--border-radius-2);
    border-bottom-right-radius: var(--border-radius-2);
    border-top-left-radius: var(--border-radius-2);
    border-top-right-radius: var(--border-radius-2);
  `,
};
