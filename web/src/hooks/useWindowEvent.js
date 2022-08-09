import { useEffect } from 'react';

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export const useGlobalWindowResize = (callback) => {
  return useWindowEvent('resize', callback);
};

export const useGlobalWindowScrollEvent = (callback) => {
  return useWindowEvent('scroll', callback);
};

export const useGlobalKeyUpEvent = (callback) => {
  return useWindowEvent('keyup', callback);
};

export const useGlobalKeyDownEvent = (callback) => {
  return useWindowEvent('keydown', callback);
};

export const useGlobalPointerDownEvent = (callback) => {
  return useWindowEvent('pointerdown', callback);
};

export const useGlobalPointerUpEvent = (callback) => {
  return useWindowEvent('pointerup', callback);
};

export const useGlobalKeyPrevent = () => {
  useEffect(() => {
    window.addEventListener(
      'keydown',
      function (e) {
        const pathTo = e.target.attributes['data-path'];

        if (pathTo !== undefined && ['Space'].indexOf(e.code) > -1) {
          e.preventDefault();
        }
      },
      false
    );

    return () =>
      window.removeEventListener(
        'keydown',
        function (e) {
          const pathTo = e.target.attributes['data-path'];

          if (pathTo !== undefined && ['Space'].indexOf(e.code) > -1) {
            e.preventDefault();
          }
        },
        false
      );
  }, []);
};
