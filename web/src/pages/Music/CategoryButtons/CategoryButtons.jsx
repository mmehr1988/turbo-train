// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import React, { useContext, useRef, createRef } from 'react';
import { useTheme } from 'styled-components';

// ==========================================
// CONTEXT
// ==========================================
import { MusicContext } from '../../../Context';
// ==========================================
// INTERNAL IMPORTS
// ==========================================
import { MotionDiv, MotionButtonText } from '../../../components';

const CategoryButtons = (props) => {
  const theme = useTheme();
  // ==========================================
  // PROPS
  // ==========================================
  const { categories: data, containerProps, buttonProps } = props;
  const { className: buttonClassName, ...button } = buttonProps;
  // ==========================================
  // CONTEXT
  // ==========================================
  const { activeProject, dispatch } = useContext(MusicContext);

  // ==========================================
  // REF
  // ==========================================

  const buttonsContainerRef = useRef(createRef());

  // ==========================================
  // HANDLERS
  // ==========================================

  return (
    <MotionDiv ref={buttonsContainerRef} {...containerProps}>
      {data?.map((category, i) => {
        return (
          <MotionButtonText
            key={`${buttonClassName}-${category}`}
            motionKeys={{
              motionBtn: `motion-btn-${buttonClassName}-${category}`,
            }}
            buttonProps={{
              className: `${buttonClassName} ${
                activeProject === category ? 'active' : ''
              }`,
              cursor: activeProject === category ? 'auto' : 'pointer',
              bg:
                activeProject === category
                  ? theme.colors.color2
                  : theme.colors.bgPrimary,
              textColor:
                activeProject === category
                  ? theme.colors.bgPrimary
                  : theme.colors.color2,
              ...button,
            }}
            onClick={() =>
              dispatch({ type: 'SET_CATEGORY', category: category })
            }
            focusName={category}
          >
            {category}
          </MotionButtonText>
        );
      })}
    </MotionDiv>
  );
};

CategoryButtons.defaultProps = {
  containerProps: {
    tag: 'section',
    className: 'app__music-category-buttons',
    d: 'flex',
    gap: '20px',
  },
  buttonProps: {
    className: 'app__music-category-button',
    w: '144px',
    h: '48px',
    textWeight: '900',
    border: '2px solid',
    borderColor: 'color2',
    textSize: 'size3',
  },
};

export default CategoryButtons;
