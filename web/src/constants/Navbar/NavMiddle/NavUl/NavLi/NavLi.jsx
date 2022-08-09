// ==========================================
// EXTERNAL IMPORTS
// ==========================================
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// ==========================================
// INTERNAL IMPORTS
// ==========================================

import { MotionDiv } from '../../../../../components';
import NavLinks from '../NavLinks/NavLinks';

import { useGlobalKeyPrevent } from '../../../../../hooks';

// ==========================================
// INTERNAL IMPORTS
// ==========================================
const NavItemData = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    id: 4,
    title: 'Music',
    link: '/music',
  },
];

const NavLi = (props) => {
  // ==========================================
  // PROPS
  // ==========================================
  const { liProps, menuType, ...rest } = props;
  const { className, ...listyles } = liProps;
  const { pathname } = useLocation();

  let navigate = useNavigate();

  const keyPressCallback = useCallback(
    (e) => {
      if (e.code === 'Space') {
        const pathTo = e.target.attributes['data-path'].nodeValue;
        e.target.blur();
        navigate(pathTo);
      }
    },
    [navigate]
  );

  useGlobalKeyPrevent();

  return NavItemData.map(({ title, link }) => {
    return (
      <NavLiItem
        key={`${className}-${menuType}-${title}`}
        className={`${className} ${menuType}`}
        {...listyles}
        {...rest}
      >
        <NavLinks
          title={title}
          href={link}
          keyPressCallback={keyPressCallback}
          data-path={link}
          underline={pathname === link && menuType === 'desktop'}
        />
      </NavLiItem>
    );
  });
};

NavLi.defaultProps = {
  liProps: {
    tag: 'li',
    className: 'app__nav-li',
  },
};

export default NavLi;

const NavLiItem = styled(motion(MotionDiv))`
  .active {
  }
`;
