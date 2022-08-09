import { useRef, createRef } from 'react';

import { MotionDiv } from '../../../../components';
import ExternalIcons from './ExternalIcons/ExternalIcons';

const CardFooter = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { containerProps, title: PROJECT_TITLE, external } = props;
  const { className: containerClassName, ...footer } = containerProps;

  // ==========================================
  // REFS
  // ==========================================
  const cardFooterRef = useRef(createRef());

  return (
    <MotionDiv
      ref={cardFooterRef}
      className={`${containerClassName} ${PROJECT_TITLE.replace(/ /g, '')}`}
      {...footer}
    >
      {external?.map(({ title: keyName, link, _key: key }) => {
        return (
          <ExternalIcons
            key={`${containerClassName}-${key}`}
            title={PROJECT_TITLE}
            keyName={keyName}
            link={link}
          />
        );
      })}
    </MotionDiv>
  );
};

CardFooter.defaultProps = {
  containerProps: {
    className: 'app__portfolio-card-footer-container',
    d: 'flex',
    gap: '0.65rem',
    m: { t: '0.5rem' },
  },
};

export default CardFooter;
