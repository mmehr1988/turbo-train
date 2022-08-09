import React from 'react';
import MotionDiv from '../MotionDiv/MotionDiv';

const Label = React.forwardRef((props, ref) => {
  return <MotionDiv ref={ref} tag='label' {...props} />;
});

Label.defaultProps = {
  flexWrap: 'wrap',
  textSize: 'body',
  d: 'flex',
  align: 'flex-start',
  cursor: 'pointer',
  tabIndex: '0',
};

export default Label;
