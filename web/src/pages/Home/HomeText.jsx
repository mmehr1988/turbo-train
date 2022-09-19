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
  // const homeSubHeader = useRef(createRef());

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
    </MotionDiv>
  );
};

HomeText.defaultProps = {
  className: 'app__hero-text-container',
  tag: 'section',
  pos: 'fixed',
  top: '45%',
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
    strong {
      color: var(--color-2);
    }
  }
`;
