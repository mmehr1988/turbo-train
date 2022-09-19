import { forwardRef } from 'react';
import styled from 'styled-components';

import { MotionDiv } from '../../components';

const PageWrapper = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <>
      <Article
        ref={ref}
        className={`app__page-container ${className}`}
        {...rest}
      >
        {children}
      </Article>
    </>
  );
});

PageWrapper.defaultProps = {
  tag: 'article',
  d: 'flex',
  flexDir: 'column',
  align: 'center',
  justify: 'center',
  flexGrow: '1',
  maxW: '1440px',
  w: '100%',
  gap: { minXS: '2rem', minSM: '3rem' },
  p: { t: { maxMD: '7rem' } },
};

export default PageWrapper;

const Article = styled(MotionDiv)`
  padding-top: 7rem;

  &.app__page-home {
    padding-top: 0;
    min-height: calc(100vh - var(--footer-height) * 2);
  }
`;
