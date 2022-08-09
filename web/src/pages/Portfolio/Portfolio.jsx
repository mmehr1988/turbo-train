// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { forwardRef } from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionWrap, PageWrap } from '../../wrapper';

import { PageTitle, PageWrapper } from '../../constants';
import PageContent from './PortfolioPageContent';

const Portfolio = forwardRef((props, ref) => {
  const { data: portfolioProjects, pageWraoperProps, pageTitleProps } = props;

  return (
    <PageWrapper ref={ref} {...pageWraoperProps}>
      <PageTitle {...pageTitleProps} />
      <PageContent data={portfolioProjects} />
    </PageWrapper>
  );
});

Portfolio.defaultProps = {
  queryProps: {
    queryDoc: 'works',
    queryName: 'portfolio-projects',
    queryOptions: 'order(order)',
  },
  pageWraoperProps: {
    className: 'app__page-portfolio',
    p: '0.1rem',
  },
  pageTitleProps: {
    title: 'Portfolio',
    className: 'app__portfolio-header',
  },
};

export default MotionWrap(PageWrap(Portfolio, 'portfolio'), 'Portfolio');
