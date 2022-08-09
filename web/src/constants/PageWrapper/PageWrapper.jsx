import { forwardRef } from 'react';
import { MotionDiv } from '../../components';

const PageWrapper = forwardRef((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <MotionDiv
      ref={ref}
      className={`app__page-container ${className}`}
      {...rest}
    >
      {children}
    </MotionDiv>
  );
});

PageWrapper.defaultProps = {
  tag: 'article',
  d: 'flex',
  flexDir: 'column',
  align: 'center',
  justify: 'flex-start',
  flexGrow: '1',
  maxW: '1440px',
  w: '100%',
  gap: { minXS: '2rem', minSM: '3rem' },
  m: { t: { minMD: '10rem', maxMD: '8rem' } },
};

export default PageWrapper;
