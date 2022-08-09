// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { forwardRef } from 'react';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionWrap, PageWrap } from '../../wrapper';
import { PageWrapper } from '../../constants';
import HomeImage from './HomeImage';
import HomeText from './HomeText';

const Home = forwardRef((props, ref) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { data: heroContent, pageWraoperProps } = props;

  const [{ title, desc, image }] = heroContent;

  return (
    <PageWrapper ref={ref} {...pageWraoperProps}>
      <HomeImage image={image} />
      <HomeText title={title} desc={desc} />
    </PageWrapper>
  );
});

Home.defaultProps = {
  queryProps: {
    queryDoc: 'hero',
    queryName: 'home-content',
  },
  pageWraoperProps: {
    className: 'app__page-home',
  },
};

export default MotionWrap(PageWrap(Home, 'hero'), 'Home');
