import React from 'react';
import AboutImage from './AboutImage';
import AboutText from './AboutText';

const PageContent = (props) => {
  const { image, desc } = props;

  return (
    <>
      <AboutImage image={image} />
      <AboutText desc={desc} />
    </>
  );
};

export default PageContent;
