// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import React from 'react';
// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MusicContextProvider } from '../../Context';

// ==========================================
// ANIMATIONS
// ==========================================
import MusicGridContainer from './Grid/MusicGridContainer';

// ==========================================
// CREATE CONTEXT API
// ==========================================

const PageContent = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { data, categories } = props;

  return (
    <MusicContextProvider>
      <MusicGridContainer data={data} categories={categories} />
    </MusicContextProvider>
  );
};

export default PageContent;
