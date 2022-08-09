// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { AutoScrollComponent, Icon } from '../../../components';
import { useGlobalWindowScrollEvent, useScrollToTop } from '../../../hooks';

const LogoIconLink = (props) => {
  const theme = useTheme();
  // ==========================================
  // PROPS
  // ==========================================
  const { to, name, isHovering, isFocused, focusName, logoProps, otherStyle } =
    props;

  const [scrolling, setScrolling] = useState(0);
  const { scrollToElem } = useScrollToTop();

  // ==========================================
  // REF
  // ==========================================
  const logoLinkRef = useRef(null);

  // ==========================================
  // NAVIGATE HOOK
  // ==========================================

  const navigate = useNavigate();

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
      ref={logoLinkRef}
      to={to}
      className='app__nav-brand-logo'
      style={{
        ...otherStyle,
      }}
      aria-label={
        isFocused
          ? `${focusName} link focused`
          : `${focusName} link not focused`
      }
      aria-live='polite'
      scrollCallback={scrollCallback}
      scrolling={scrolling}
      keyPressCallback={keyPressCallback}
      data-path={to}
    >
      <Icon
        name={name}
        color={theme.colors.color2}
        initial={{ scale: 1 }}
        animate={{
          scale: isHovering || isFocused ? 1.125 : 1,
        }}
        {...logoProps}
        stroke={theme.colors.color2}
      />
    </AutoScrollComponent>
  );
};

LogoIconLink.defaultProps = {
  logoProps: {
    name: 'Casette',
    view: 'base',
    cursor: 'pointer',
    overflow: 'visible',
    strokeWidth: 0.4,
    opacity: 0.9,
  },
};

export default LogoIconLink;
