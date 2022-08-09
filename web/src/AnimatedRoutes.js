import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './wrapper';
import { Music, Portfolio, About, Home, NotFound } from './pages';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes key={location.pathname} location={location}>
          <Route path='/music' element={<Music />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />

          {/* REDIRECT & PAGE NOT FOUND */}
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default AnimatedRoutes;
