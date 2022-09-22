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

  return (
    <Section ref={homeTextContainerRef} {...rest}>
      <Article ref={homeTextHeader} className='app__hero-header' tag='article'>
        {title && (
          <SanityBlockContent
            blocks={title}
            className='app__sanity-block-content home-text'
          />
        )}
      </Article>
    </Section>
  );
};

HomeText.defaultProps = {
  className: 'app__hero-text-container',
  tag: 'section',
};

export default HomeText;

const Section = styled(MotionDiv)`
  z-index: 1;
`;

const Article = styled(MotionDiv)`
  &.app__hero-header {
    text-align: center;
    text-shadow: ${({ theme }) => theme.textShadow.shadow1};
  }
`;
