// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import React, { useRef, createRef, useMemo } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { useQueryGlobal } from '../hooks';
import { Footer, LoadingError } from '../constants';

const PageWrap = (Component, idName) =>
  function HOC() {
    const pageRef = useRef(createRef());

    // ==========================================
    // QUERY
    // ==========================================
    const { data, isLoading, isError, error } = useQueryGlobal(
      Component.defaultProps.queryProps
    );

    return useMemo(() => {
      return (
        <AnimatePresence initial={isLoading ? true : false}>
          <Wrapper
            className={`app__page-wrap page-wrap-${idName}`}
            key={`app__page-wrap`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {isLoading || isError ? (
              <LoadingError
                isLoading={isLoading}
                isError={isError}
                error={error}
              />
            ) : (
              <>
                <Component ref={pageRef} data={data} />
                <Footer idName={idName} />
              </>
            )}
          </Wrapper>
        </AnimatePresence>
      );
    }, [data, isLoading, isError, error]);
  };

PageWrap.propTypes = {
  idName: PropTypes.string.isRequired,
};

export default PageWrap;

const Wrapper = styled(motion.div)``;
