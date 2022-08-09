import { useRef } from 'react';

export const useCountRenders = (name) => {
  const renders = useRef(0);
  console.log(`${name} renders: `, renders.current++);
};
