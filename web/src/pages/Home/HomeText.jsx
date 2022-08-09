import { useRef, createRef } from 'react';
import styled from 'styled-components';
import { MotionDiv, SanityBlockContent } from '../../components';

const HomeText = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { title, desc, ...rest } = props;

  // ==========================================
  // REFS
  // ==========================================
  const homeTextContainerRef = useRef(createRef());
  const homeTextHeader = useRef(createRef());
  const homeSubHeader = useRef(createRef());

  return (
    <MotionDiv ref={homeTextContainerRef} {...rest}>
      <Article ref={homeTextHeader} className='app__hero-header' tag='article'>
        {title && (
          <SanityBlockContent
            blocks={title}
            className='app__sanity-block-content home-text'
          />
        )}
      </Article>
      <Article ref={homeSubHeader} className='app__hero-section' tag='article'>
        {desc && (
          <SanityBlockContent
            blocks={desc}
            className='app__sanity-block-content home-text'
          />
        )}
      </Article>
    </MotionDiv>
  );
};

HomeText.defaultProps = {
  className: 'app__hero-text-container',
  tag: 'section',
  pos: 'absolute',
  top: '50%',
  left: '50%',
  w: '100%',
  transform: 'translate(-50%, -50%)',
  d: 'flex',
  flexDir: 'column',
  align: 'center',
  justify: 'center',
  gap: '4rem',
  textAlign: 'center',
};

export default HomeText;

const Article = styled(MotionDiv)`
  &.app__hero-header {
    text-shadow: ${({ theme }) => theme.textShadow.shadow1};

    h1 {
      strong {
        color: var(--color-2);
      }
    }
  }

  &.app__hero-section {
    margin-bottom: 4rem;
    text-align: center;

    /* span {

    } */

    p,
    a {
      font-size: clamp(1.25rem, 0.75rem + 2.5vw, 3rem);
      font-weight: 400;
      text-shadow: ${({ theme }) => theme.textShadow.shadow9};
    }

    p {
      color: var(--color-2);
    }

    a {
      color: var(--color-1);
      text-underline-offset: 4px;
    }
  }
`;
