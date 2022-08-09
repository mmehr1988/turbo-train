// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import React from 'react';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import Span from '../Span/Span';

const LoadingError = (props) => {
  const { containerProps, isLoading, isError, error } = props;

  return (
    <Span {...containerProps}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError && error !== null ? (
        <h1>{error.message}</h1>
      ) : (
        <h1>Please refresh. Unexpected error.</h1>
      )}
    </Span>
  );
};

LoadingError.defaultProps = {
  containerProps: {
    className: 'app__loading-error-container',
    d: 'flex',
    maxW: '1440px',
    w: '100%',
    m: { t: { minMD: '10rem', maxMD: '8rem' } },
    align: 'center',
    justify: 'center',
    textAlign: 'center',
    textShadow: 'shadow13',
  },
};

export default LoadingError;
