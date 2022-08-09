// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, createRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv } from '../../../components';
import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';

const CardFront = (props) => {
  const theme = useTheme();
  // ==========================================
  // PROPS
  // ==========================================
  const { cardProps, data } = props;
  const { _id: cardId, title, desc, external, image, tags } = data;

  // ==========================================
  // REF
  // ==========================================
  const cardRef = useRef(createRef());

  return (
    <CardContainer
      ref={cardRef}
      bg={theme.colors.bgPrimary}
      shadow={theme.shadows[10]}
      whileHover={{ boxShadow: theme.shadows[11] }}
      {...cardProps}
    >
      <CardHeader cardId={cardId} image={image} alt={`Project ${title}`} />
      <CardBody cardId={cardId} title={title} tags={tags} desc={desc} />
      <CardFooter title={title} external={external} />
    </CardContainer>
  );
};

CardFront.defaultProps = {
  cardProps: {
    tag: 'div',
    position: 'relative',
    d: 'flex',
    flexDir: 'column',
    justify: 'flex-start',
    backfaceVisibility: 'hidden',
    p: '1rem',
  },
};

export default CardFront;

const CardContainer = styled(motion(MotionDiv))``;
