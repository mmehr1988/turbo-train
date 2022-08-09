import { useRef, createRef } from 'react';
import styled from 'styled-components';
import { MotionDiv } from '../../components';
import { UnderlineMixin } from '../../global';

const PageTitle = (props) => {
  const { className, title, ...rest } = props;

  const motionDivRef = useRef(createRef());

  return (
    <TitleContainer ref={motionDivRef} className={className} {...rest}>
      <h1>{title}</h1>
    </TitleContainer>
  );
};

PageTitle.defaultProps = {
  tag: 'header',
  d: 'flex',
  align: 'center',
  justify: 'center',
  w: '100%',
  textAlign: 'center',
};

export default PageTitle;

const TitleContainer = styled(MotionDiv)`
  --title-shadow: ${({ theme }) => theme.textShadow.shadow13};

  h1 {
    position: relative;
    text-shadow: var(--title-shadow);
    :after {
      ${UnderlineMixin.underLineCommon}
      box-shadow: var(--title-shadow);
    }
  }

  @media screen and (max-width: 560px) {
    &.app__music-header {
      h1 {
        position: relative;

        :after {
          ${UnderlineMixin.underLineCommon({
            w: `90%`,
          })}
          transform: translateX(5%);
        }
      }
    }
  }
`;
