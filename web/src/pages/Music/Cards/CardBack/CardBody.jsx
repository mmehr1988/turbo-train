// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React from 'react';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { FlexContainer, H3 } from '../../../../constants';
import { ExternalLinkText, SanityBlockContent } from '../../../../components';

const CardBody = (props) => {
  const { containerProps, h3Props, cardId, title, desc, external } = props;

  const { className: containerClassName } = containerProps;

  return (
    <ScrollableContainer
      key={`${containerClassName}-container-${cardId}`}
      className={`${containerClassName} ${title.replace(/ /g, '')}`}
    >
      <H3 className={`${h3Props.className}`}>{title}</H3>

      <ExternalLinkText href={external.link} title={external.title} />

      {desc && (
        <SanityBlockContent
          blocks={desc}
          className='app__sanity-block-content music-card-back'
        />
      )}
    </ScrollableContainer>
  );
};

CardBody.defaultProps = {
  containerProps: {
    className: 'scroll-container',
  },
  h3Props: {
    className: 'h3-title',
  },
};

export default CardBody;

const ScrollableContainer = styled(FlexContainer)`
  a {
    font-size: var(--font-size-1);
    color: var(--color-2);
    text-transform: uppercase;
    font-weight: lighter;

    text-decoration: underline solid var(--color-1);
    -webkit-text-decoration: underline solid var(--color-1);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;

    letter-spacing: 0.3ch;

    transition: letter-spacing 0.3s var(--ease-5);

    &:hover {
      letter-spacing: 0.5ch;
    }
  }

  // ==========================================
  /* SANITY BLOCK CONTENT */
  // ==========================================

  p,
  blockquote {
    &:first-of-type {
      margin-top: var(--space-3);
    }

    &:not(:last-of-type) {
      margin-bottom: var(--space-2);
    }
  }

  blockquote {
    margin-bottom: 0.5rem;
  }

  span {
    a {
      text-transform: capitalize;
    }
  }
`;
