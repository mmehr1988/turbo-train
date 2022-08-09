// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef } from 'react';
import styled from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../components';
import CardFront from './Card/CardFront';

const PageContent = (props) => {
  const { data, ...rest } = props;

  const gridContainerRef = useRef(createRef());

  return (
    <GridContainer
      ref={gridContainerRef}
      role='group'
      aria-label='portfolio cards'
      {...rest}
    >
      {data?.map((item) => {
        return <CardFront key={item._id} data={item} />;
      })}
    </GridContainer>
  );
};

PageContent.defaultProps = {
  tag: 'section',
  className: 'app__grid-portfolio-cards',
  d: 'grid',
  w: '100%',
  gridGap: '1.5rem',
  gridTempCols: 'repeat(auto-fit, minmax(300px, 350px))',
  placeContent: 'center',
};

export default PageContent;

const GridContainer = styled(MotionDiv)``;
