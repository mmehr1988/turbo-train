// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { FlexContainer, H3, H4 } from '../../../../constants';
import { SanityBlockContent } from '../../../../components';

const CardBody = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { containerProps, h3Props, h4Props, cardId, title, tags, desc } = props;
  const { className: containerClassName } = containerProps;

  return (
    <FlexContainer
      key={`${containerClassName}-${cardId}`}
      className={`${containerClassName} ${title}`}
    >
      <H3 className={`${h3Props.className}`}>{title}</H3>
      <H4 className={`${h4Props.className}`}>{tags}</H4>
      {desc && <SanityBlockContent blocks={desc} />}
    </FlexContainer>
  );
};

CardBody.defaultProps = {
  containerProps: {
    className: 'app__portfolio-card-front text-container',
  },
  h3Props: {
    className: 'h3-title',
  },
  h4Props: {
    className: 'h4-title',
  },
};

export default CardBody;
