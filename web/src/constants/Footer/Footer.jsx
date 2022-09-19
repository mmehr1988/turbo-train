// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useRef, createRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import FlexContainer from '../FlexContainer/FlexContainer';
import ExternalIcons from './ExternalIcons/ExternalIcons';

import { useQueryGlobal } from '../../hooks';
import { SanityBlockContent, MotionDiv } from '../../components';
import { lodashMergeFilterArray } from '../../lib';

const Footer = (props) => {
  const { containerProps, queryProps, idName, iconContainerProps } = props;

  // ==========================================
  // REF
  // ==========================================
  const { className: containerClassName } = containerProps;
  const appFooterRef = useRef(createRef());
  // ==========================================
  // QUERY
  // ==========================================
  const {
    data: footerContent,
    isLoading,
    isError,
  } = useQueryGlobal(queryProps[0]);

  const {
    data: downloads,
    isLoading: isLoadingDownload,
    isError: isErrorDownload,
  } = useQueryGlobal(queryProps[1]);

  // ==========================================
  // CHECK
  // ==========================================

  if (isLoading || isLoadingDownload || isError || isErrorDownload) {
    return;
  }

  // ==========================================
  // DESTRUCTURING
  // ==========================================
  const [{ _id: motionKey, desc, footerLinks }] = footerContent;

  const keysToPick = ['link', 'title'];

  console.log(props);

  return (
    <motion.div
      key={`${containerClassName}-${idName}-${motionKey}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FooterContainer className={`${containerClassName} page-${idName}`}>
        <MotionDiv
          ref={appFooterRef}
          className='app__social-icons-container'
          {...iconContainerProps}
        >
          {lodashMergeFilterArray(footerLinks, downloads, keysToPick)?.map(
            ({ title: keyName, link }) => {
              return (
                <ExternalIcons
                  key={`app__social-icons-${keyName}`}
                  keyName={keyName}
                  link={link}
                />
              );
            }
          )}
        </MotionDiv>
        {desc && <SanityBlockContent blocks={desc} />}
      </FooterContainer>
    </motion.div>
  );
};

Footer.defaultProps = {
  containerProps: {
    className: 'app__footer',
  },
  queryProps: [
    {
      queryDoc: 'footer',
      queryName: 'footer-content',
    },
    {
      queryDoc: 'downloads',
      queryName: 'downloadable-files',
    },
  ],
  iconContainerProps: {
    d: 'flex',
    align: 'center',
    justify: 'center',
    gap: '10px',
  },
};

export default Footer;

const FooterContainer = styled(FlexContainer)`
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  height: var(--footer-height);
  margin-top: 4rem;

  p {
    font-size: var(--font-size-2);
    font-weight: 300;
    color: var(--color-2);
  }

  &.page-hero {
    margin-top: 0rem;
  }
`;
