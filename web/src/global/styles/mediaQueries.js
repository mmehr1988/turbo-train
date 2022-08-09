import { css } from 'styled-components';

export const MediaSizes = {
  xxs: 240,
  xs: 360,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1920,
};

export const MediaSizesPx = {
  xxs: `240px`,
  xs: `360px`,
  sm: `480px`,
  md: `768px`,
  lg: `1024px`,
  xl: `1440px`,
  xxl: `1920px`,
};

// ==========================================================
// MediaQueries | MIN
// ==========================================================

export const MediaMin = {
  xxs: `screen and (min-width: ${MediaSizesPx.xxs})`,
  xs: `screen and (min-width: ${MediaSizesPx.xs})`,
  sm: `screen and (min-width: ${MediaSizesPx.sm})`,
  md: `screen and (min-width: ${MediaSizesPx.md})`,
  lg: `screen and (min-width: ${MediaSizesPx.lg})`,
  xl: `screen and (min-width: ${MediaSizesPx.xl})`,
  xxl: `screen and (min-width: ${MediaSizesPx.xxl})`,
};

export const MediaQueriesMin = {
  xxs: (props) => css`
    @media ${MediaMin.xxs} {
      ${props}
    }
  `,
  xs: (props) => css`
    @media ${MediaMin.xs} {
      ${props}
    }
  `,
  sm: (props) => css`
    @media ${MediaMin.sm} {
      ${props}
    }
  `,
  md: (props) => css`
    @media ${MediaMin.md} {
      ${props}
    }
  `,
  lg: (props) => css`
    @media ${MediaMin.lg} {
      ${props}
    }
  `,
  xl: (props) => css`
    @media ${MediaMin.xl} {
      ${props}
    }
  `,
  xxl: (props) => css`
    @media ${MediaMin.xxl} {
      ${props}
    }
  `,
};

// ==========================================================
// MediaQueries | MIN
// ==========================================================

export const MediaMax = {
  xxs: `screen and (max-width: ${MediaSizesPx.xxs})`,
  xs: `screen and (max-width: ${MediaSizesPx.xs})`,
  sm: `screen and (max-width: ${MediaSizesPx.sm})`,
  md: `screen and (max-width: ${MediaSizesPx.md})`,
  lg: `screen and (max-width: ${MediaSizesPx.lg})`,
  xl: `screen and (max-width: ${MediaSizesPx.xl})`,
  xxl: `screen and (max-width: ${MediaSizesPx.xxl})`,
};

export const MediaQueriesMax = {
  xxs: (props) => css`
    @media ${MediaMax.xxs} {
      ${props}
    }
  `,
  xs: (props) => css`
    @media ${MediaMax.xs} {
      ${props}
    }
  `,
  sm: (props) => css`
    @media ${MediaMax.sm} {
      ${props}
    }
  `,
  md: (props) => css`
    @media ${MediaMax.md} {
      ${props}
    }
  `,
  lg: (props) => css`
    @media ${MediaMax.lg} {
      ${props}
    }
  `,
  xl: (props) => css`
    @media ${MediaMax.xl} {
      ${props}
    }
  `,
  xxl: (props) => css`
    @media ${MediaMax.xxl} {
      ${props}
    }
  `,
};
