// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import AutoScrollComponent from '../AutoScrollComponent/AutoScrollComponent';
import {
  useGlobalWindowScrollEvent,
  useScrollToTop,
  useGlobalKeyPrevent,
} from '../../hooks';

const SanityInternalLink = (props) => {
  const { to, children } = props;

  const [scrolling, setScrolling] = useState(0);

  const { scrollToElem } = useScrollToTop();

  // ==========================================
  // REF
  // ==========================================
  const sanityLinkRef = useRef(null);
  // ==========================================
  // NAVIGATE HOOK
  // ==========================================
  const navigate = useNavigate();

  useGlobalKeyPrevent();
  // ==========================================
  // CALLBACK #1: OnClick Event Callback
  // ==========================================

  const scrollCallback = useCallback(
    (e, scrollState) => {
      e.preventDefault();

      if (window.scrollY !== 0) {
        setScrolling(scrollState);
        scrollToElem();
      } else {
        setScrolling(0);
        navigate(to);
      }
    },
    [setScrolling, navigate, to, scrollToElem]
  );

  const scrollCheckNavigate = useCallback(() => {
    if (scrolling === 1 && window.scrollY === 0) {
      setScrolling(0);
      navigate(to);
    }
  }, [scrolling, to, navigate]);

  const keyPressCallback = useCallback(
    (e, scrollState) => {
      if (e.code === 'Space') {
        scrollCallback(e, scrollState);
      }
    },
    [scrollCallback]
  );

  // ==========================================
  // GLOBAL SCROLLING EVENT LISTENER
  // ==========================================

  useGlobalWindowScrollEvent(scrollCheckNavigate);

  return (
    <AutoScrollComponent
      ref={sanityLinkRef}
      to={to}
      scrollCallback={scrollCallback}
      scrolling={scrolling}
      keyPressCallback={keyPressCallback}
      data-path={to}
    >
      {children}
    </AutoScrollComponent>
  );
};

export default SanityInternalLink;
