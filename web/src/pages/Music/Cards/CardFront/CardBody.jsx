// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { FlexContainer, H3, H4 } from '../../../../constants';

const CardBody = (props) => {
  const { containerProps, h3Props, h4Props, cardId, title, releaseType, year } =
    props;

  const { className: containerClassName } = containerProps;

  return (
    <FlexContainer
      key={`${containerClassName}-${cardId}`}
      className={`${containerClassName} ${title.replace(/ /g, '')}`}
    >
      <H3 className={`${h3Props.className}`}>{title}</H3>
      <H4 className={`${h4Props.className}`}>
        {releaseType} | {year}
      </H4>
    </FlexContainer>
  );
};

CardBody.defaultProps = {
  containerProps: {
    className: 'app__music-card-front text-container',
  },
  h3Props: {
    className: 'h3-title',
  },
  h4Props: {
    className: 'h4-title',
  },
};

export default CardBody;
