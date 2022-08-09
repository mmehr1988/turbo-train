// ==========================================
// EXTERNAL IMPORTS
// ==========================================

import { BrowserRouter as Router } from 'react-router-dom';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global/styles/globalStyles';
import { lightTheme } from './global/styles/theme';

import AnimatedRoutes from './AnimatedRoutes';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
