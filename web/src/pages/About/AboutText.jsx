import { useRef, createRef } from 'react';
import { MotionDiv, SanityBlockContent } from '../../components';

const AboutText = (props) => {
  const { desc, ...rest } = props;

  const aboutTextContainer = useRef(createRef());

  return (
    <MotionDiv ref={aboutTextContainer} {...rest}>
      {desc && (
        <SanityBlockContent
          blocks={desc}
          className='app__sanity-block-content about-text'
        />
      )}
    </MotionDiv>
  );
};

AboutText.defaultProps = {
  className: 'app__about-text-container',
  tag: 'section',
  d: 'flex',
  flexDir: 'column',
  align: 'center',
  justify: 'center',
};

export default AboutText;
