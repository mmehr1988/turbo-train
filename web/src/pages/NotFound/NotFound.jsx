// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { forwardRef } from 'react';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionWrap } from '../../wrapper';
import { PageTitle, PageWrapper } from '../../constants';

const NotFound = forwardRef((props, ref) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { pageTitleProps, pageWraoperProps } = props;

  // ==========================================
  // DATA DESTRUCTURE
  // ==========================================

  return (
    <ContentContainer ref={ref} {...pageWraoperProps}>
      <PageTitle {...pageTitleProps} />
    </ContentContainer>
  );
});

NotFound.defaultProps = {
  pageWraoperProps: {
    className: 'app__page-not-found',
  },
  pageTitleProps: {
    title: 'Page Not Found',
    className: 'app__page-not-found-header',
  },
};

export default MotionWrap(NotFound, 'NotFound');

const ContentContainer = styled(PageWrapper)`
  max-width: 700px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  .app__page-not-found-header {
    h1 {
      :after {
        width: 0%;
      }
    }
  }
`;
