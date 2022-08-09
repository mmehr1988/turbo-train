// ===============================================================
// SCROLLBAR | HIDE & SHOW & RESET
// ===============================================================
// Using Framer Motion onAnimationStart & onAnimationComplete Callbacks
// The callbacks will be called with the triggering animation definition. If this is a variant, it'll be the variant name, and if a target object then it'll be the target object.

const elementQuery = (className) => document.querySelector(`.${className}`);

// native smooth scrolling for Chrome, Firefox & Opera
// @see: https://caniuse.com/#feat=css-scroll-behavior
const nativeSmoothScrollTo = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

// polyfilled smooth scrolling for IE, Edge & Safari
const smoothScrollTo = (offsetTop = 0, duration = 600) => {
  const target = document.scrollingElement || document.documentElement;
  const targetPosition = offsetTop;
  const startPosition = window.scrollY;
  const change = targetPosition - startPosition;
  const startDate = +new Date();

  // t = current time
  // b = start value
  // c = change in value
  // d = duration
  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animateScroll(_) {
    const currentDate = +new Date();
    const currentTime = currentDate - startDate;
    target.scrollTop = parseInt(
      easeInOut(currentTime, startPosition, change, duration)
    );

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      target.scrollTop = targetPosition;
    }
  }
  animateScroll();
};

// detect support for the behavior property in ScrollOptions
const supportsNativeSmoothScroll =
  'scrollBehavior' in document.documentElement.style;

// smooth scrolling stub
export const scrollToElem = () => {
  if (supportsNativeSmoothScroll) {
    nativeSmoothScrollTo();
  } else {
    smoothScrollTo();
  }
};

export const scrollElemHide = (className) => {
  elementQuery(className).classList.add('hide-scroll');
};

export const scrollElemShow = (className) => {
  elementQuery(className).classList.remove('hide-scroll');
};

export const scrollElemReset = (className) => {
  elementQuery(className).scrollTo({ top: 0 });
};
