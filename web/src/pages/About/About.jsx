// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { forwardRef } from 'react';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionWrap, PageWrap } from '../../wrapper';

import { PageTitle, PageWrapper } from '../../constants';

import PageContent from './AboutPageContent';

const About = forwardRef((props, ref) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { data: aboutContent, pageTitleProps, pageWraoperProps } = props;

  // ==========================================
  // DATA DESTRUCTURE
  // ==========================================
  const [{ desc, image }] = aboutContent;

  return (
    <ContentContainer ref={ref} {...pageWraoperProps}>
      <PageTitle {...pageTitleProps} />
      <PageContent image={image} desc={desc} />
    </ContentContainer>
  );
});

About.defaultProps = {
  queryProps: {
    queryDoc: 'abouts',
    queryName: 'abouts-content',
  },
  pageWraoperProps: {
    className: 'app__page-about',
  },
  pageTitleProps: {
    title: 'About',
    className: 'app__about-header',
  },
};

export default MotionWrap(PageWrap(About, 'about'), 'About');

const ContentContainer = styled(PageWrapper)`
  max-width: 700px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  .app__about-text-container {
    /* To create a little bit of a cushion from the max-width of the container */
    padding-inline: var(--space-2);

    p,
    strong {
      font-size: var(--font-size-3);
      text-shadow: ${({ theme }) => theme.textShadow.shadow14};
    }

    strong {
      font-weight: 500;
    }

    p {
      font-size: var(--font-size-3);
      color: var(--color-2);

      :not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }

    a {
      color: var(--color-1);
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    @media screen and (max-width: 768px) {
      strong,
      p {
        font-size: clamp(1rem, 0.8214rem + 0.8929vw, 1.25rem);

        :not(:last-of-type) {
          margin-bottom: 0.7rem;
        }
      }
    }
  }
`;
