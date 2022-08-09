import { css } from 'styled-components';

const OUTLINE_OFFSET_BASE = '6px';
const OUTLINE_WIDTH_BASE = '2px';

export const FocusOutlineMixin = css`
  --outline-width: ${OUTLINE_WIDTH_BASE};
  --outline-offset: ${OUTLINE_OFFSET_BASE};
  --outline-color: ${({ theme }) => theme.colors.color1};
  --outline-style: var(--outline-width) solid var(--outline-color);
  --border-radius: 0px;

  position: relative;

  &:focus {
    border-radius: var(--border-radius);
    outline: var(--outline-width) solid var(--outline-color);
    outline-offset: var(--outline-offset);
  }

  @supports selector(:focus-visible) {
    &:focus {
      border-radius: var(--border-radius);
      outline: none;
    }
  }

  &:focus-visible {
    border-radius: 0px;
    outline: var(--outline-width) solid var(--outline-color);
    outline-offset: var(--outline-offset);
  }
`;

export const ManualFocusOutlineMixin = css`
  --outline-width: ${OUTLINE_WIDTH_BASE};
  --outline-offset: ${OUTLINE_OFFSET_BASE};
  --outline-line-style: solid;
  --outline-color: ${({ theme }) => theme.colors.color1};
  --outline-style: OUTLINE_WIDTH_BASE solid var(--outline-color);
  --focus-outline: none;
  --pathHeight: 100%;
  --pathWidth: 100%;

  --top-calc: calc((100% - var(--pathHeight)) / 2);
  --left-calc: calc((100% - var(--pathWidth)) / 2);

  // =========================================================
  // =========================================================
  // =========================================================

  position: relative;

  &:focus {
    outline: var(--focus-outline);
    &:after {
      content: '';
      position: absolute;
      top: var(--top-calc);
      left: var(--left-calc);
      width: var(--pathWidth);
      height: var(--pathHeight);
      outline: var(--outline-width) var(--outline-line-style)
        var(--outline-color);
      outline-offset: var(--outline-offset);
    }
  }

  @supports selector(:focus-visible) {
    &:focus {
      outline: var(--focus-outline);

      &:after {
        outline: none;
      }
    }
  }

  &:focus-visible {
    outline: var(--focus-outline);
    &:after {
      content: '';
      position: absolute;
      top: var(--top-calc);
      left: var(--left-calc);
      width: var(--pathWidth);
      height: var(--pathHeight);
      outline: var(--outline-width) var(--outline-line-style)
        var(--outline-color);
      outline-offset: var(--outline-offset);
    }
  }
`;

export const ManualFocusTextOutLineMixin = css`
  ${ManualFocusOutlineMixin}
  --pathHeight: 70%;
  --pathTopText: 20%;

  &:focus {
    &:after {
      top: var(--pathTopText);
    }
  }

  &:focus-visible {
    &:after {
      top: var(--pathTopText);
    }
  }

  /* IMPORTANT: FOR SAFARI - To disable the outline for navlinks when clicked */
  &:hover {
    outline: none;

    &:after {
      outline: none;
    }
  }
`;
