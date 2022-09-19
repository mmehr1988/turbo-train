import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalizeStyles';

export const GlobalStyles = createGlobalStyle`
    /* ============================================================= */
    /* NORMALIZE CSS */
    /* ============================================================= */

    ${normalize}

    /* ============================================================= */

    *, ::before, ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

   
    :root {
        /* ============================================================= */
        /* GLOBAL FONTS */
        /* ============================================================= */
        --font-base: 'Poppins', sans-serif;
        --font-size-base: 1rem; 
        --font-line-height-base: 1.5;
        --font-letter-spacing-base: 0.025em;

        /* ============================================================= */
        /* CSS VARIABLES */
        /* ============================================================= */

        --max-width: 1440px;
        --footer-height: 100px;
        
        /* =========================================== */
        /* BRAND COLORS */
        /* =========================================== */

        --bg-primary: hsl(0 0% 100%); // white
        --bg-secondary: hsl(228 89% 0%); // black

        --text-primary: hsl(0 0% 13%); // black
        --text-secondary: hsl(228 89% 100%); // white

        --color-1: hsl(264 52% 34%); // RED
        --color-2: hsl(200 18% 26%); // GREY DARK
        --color-2-dark: hsl(215 16% 23%); // GREY DARKER
        --color-2-light: hsl(223 5% 70%); // GREY LIGHT
        --color-2-lighter: hsl(220 4% 85%); // GREY LIGHTER
        --color-3: hsl(200 40% 32%);

        --border-1: 3px solid var(--color-2-lighter);

        --outline-style: 2px solid var(--color-2);

        /* ============================================================= */
        /* TYPOGRAPHY */
        /* ============================================================= */
        --font-lineheight-0: 1.25;
        --font-lineheight-1: var(--font-line-height-base);
        --font-lineheight-2: 1.75;
        --font-lineheight-3: 2;

        --font-letterspacing-0: -0.05em;
        --font-letterspacing-1: var(--font-letter-spacing-base);
        --font-letterspacing-2: 0.05em;
        --font-letterspacing-3: 0.075em;
        --font-letterspacing-4: 0.15em;
        --font-letterspacing-5: 0.5em;
        --font-letterspacing-6: 0.75em;
        --font-letterspacing-7: 1em;

        --font-size-00: 0.5rem;
        --font-size-0: 0.75rem;
        --font-size-1: var(--font-size-base);
        --font-size-2: 1.1rem;
        --font-size-3: 1.25rem;
        --font-size-4: 1.5rem;
        --font-size-5: 2rem;
        --font-size-6: 2.5rem;
        --font-size-7: 3rem;
        --font-size-8: 2rem;

        /* =========================================== */
        /* BRAND COLORS */
        /* =========================================== */

        --box-shadow-1: 0px 30px 60px -30px hsla(0, 0%, 0%, 0.3), 0px 50px 100px -20px hsla(240, 30%, 28%, 0.25), inset 0px -2px 6px hsla(210, 73%, 15%, 0.35);
        --box-shadow-2: hsla(0, 0%, 0%, 0.15) 1.95px 1.95px 2.6px;
        --box-shadow-3: hsla(240, 30.069930069930066%, 28.03921568627451%, 0.25) 0px 50px 100px -20px, hsla(0, 0%, 0%, 0.3) 0px 30px 60px -30px;
        --box-shadow-4: hsla(240, 30.069930069930066%, 28.03921568627451%, 0.25) 0px 13px 27px -5px, hsla(0, 0%, 0%, 0.3) 0px 8px 16px -8px;

        /* --box-shadow-4: hsla(0, 0%, 0%, 0.02) 0px 1px 3px 0px, hsla(193.33333333333334, 34.61538461538462%, 10.196078431372548%, 0.15) 0px 0px 0px 1px; */
        
        /* =================================================== */
        /* FLUID SIZING */
        /* =================================================== */
    
        /* 
            Start Width: Max Width 767px | sizes changes from | 22px or 1.375rem
            Min Width 320px | sizes changes to | 8px or 0.5rem
        */
        --fluid-size: clamp(0.5rem, -0.1264rem + 3.132vw, 1.375rem);

        @media screen and (min-width: 768px) {
        /* 
            Start Width: Max Width 1440px | sizes changes from | 32px or 2rem
            Min Width 768px | sizes changes to | 22px or 1.375rem
        */
            --fluid-size: clamp(1.375rem, 0.6607rem + 1.4881vw, 2rem);
        }


        /* =================================================== */
        /* BASE SIZING */
        /* =================================================== */

        --space-1: 0.25rem; 
        --space-2: 0.5rem; 
        --space-3: 1rem; 
        --space-4: 1.5rem; 
        --space-5: 2rem; 
        --space-6: 3rem; 
        --space-7: 4rem;

        --size-content-2: 45ch;
        --size-header-1: 20ch;
        --size-header-2: 25ch;


        /* ============================================================= */
        /* HEADER HEIGHT */
        /* ============================================================= */

        --header-height: 70px;

        /* ============================================================= */
        /* EASING */
        /* ============================================================= */
        --ease-1: cubic-bezier(0, 0, 1, 1);
        --ease-2: cubic-bezier(0.4, 0, 0.2, 1);
        --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
        --ease-4: cubic-bezier(0.25, 0.1, 0.25, 1.0);
        --ease-5: cubic-bezier(0.25, 0, 0.1, 1);
        --ease-6: cubic-bezier(0.42, 0, 0.58, 1);

        /* ============================================================= */
        /* BORDER STYLES */
        /* ============================================================= */
        --border-radius-2-1: 2px;
        --border-radius-2: 5px;
        --border-radius-2-3: 16px;
        --border-radius-2-4: 32px;
        --border-radius-3: 3px;

        /* ============================================================= */
        /* Z INDEX */
        /* ============================================================= */
        --z-index-10: 10;
        --z-index-50: 50;
        --z-index-100: 100;
        --z-index-200: 200;
        --z-index-300: 300;
        --z-index-400: 400;
        --z-index-500: 500;
        --z-index-important: 2147483647;
        --z-index-overlay: 2147483646;
    }


    html {
        block-size: 100%;
        scroll-behavior: smooth;
    }

    body {
        font-family: var(--font-base);
        font-size: var(--font-size-base);
        line-height: var(--font-line-height-base);
        letter-spacing: var(--font-letter-spacing-base);
        background-color: var(--bg-primary);
        color: var(--text-primary);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow:scroll;
    }


    h1, h2, h3, h4, h5 {
        line-height: var(--font-lineheight-0);
    }

    h1 {
        font-size: clamp(3.625rem, 2.9342rem + 3.6842vw, 6.25rem);
        /* font-size: clamp(4rem, 2.8857rem + 4.5714vw, 6rem); */
        /* font-size: 7rem; */
        /* font-size: clamp(4rem, 1.8571rem + 5.7143vw, 7rem); */
        /* IMPORTANT: Safari has issues with font-size clamp. To fix the issue,
            provide a min-height */
        min-height: 0vw;
        max-inline-size: var(--size-header-1); 
        color: var(--color-1);
    }

    h2 {
        font-weight: 700;
        font-size: var(--font-size-6); 
        max-inline-size: var(--size-header-2);
        color: var(--color-2);
    }

    h3 {
        font-weight: 600;
        font-size: var(--font-size-5);
        color: var(--color-2);
    }

    h4 {
        font-weight: 500;
        font-size: var(--font-size-4);   
        color: var(--color-gray-dark);
    }

    h5 {
        font-weight: 500;
        font-size: var(--font-size-3);
    }

    h6 {
        font-weight: 400;
        font-size: var(--font-size-2);
    }

    p {
        font-weight: 300;
        font-size: var(--font-size-2);
        letter-spacing: var(--font-letterspacing-2);
    }

    blockquote {
        
        --quote-space: -4px;
        --quote-size: 3em;
        --quote-color: var(--color-1);
        text-indent: 1rem;
        
        quotes: auto;

        &:before,
        &:after {
            font-family: Merriweather, serif;
            display: inline;
            position: relative;
            height: 0;
            line-height: 0;
        }
        
        &:before {
            content: open-quote;
            left: var(--quote-space);
            top: 1rem;
            color: var(--quote-color);
            font-size: var(--quote-size);
        }

        &:after {
            content: close-quote;
            left: var(--quote-space);
            top: 1rem;
            color: var(--quote-color);
            font-size: var(--quote-size);
        }
    }

    /* strong {
        pointer-events: none;
    } */

    /* =================================================================== */
    /* REUSABLE CLASSES */
    /* =================================================================== */

    .app__flex {
        display: flex;

        &.wrap {
            flex-wrap: wrap;
        }

        &.flex-column {
            flex-direction: column;
        }

        &.flex-center-center {
            align-items: center;
            justify-content: center;
        }

        &.flex-center-space-b {
            align-items: center;
            justify-content: space-between;
        }

        &.flex-center-space-a {
            align-items: center;
            justify-content: space-around;
        }

        &.flex-center-start {
            align-items: center;
            justify-content: flex-start;
        }

        &.flex-start-start {
            align-items:flex-start;
            justify-content: flex-start;
        }

        &.fluid-flex {
            flex-wrap: wrap;
            align-items: flex-start;
            place-content: center;
        }
    }

    .app__grid {
        display: grid;
        place-content: center;
    }

    .text-italic {
        font-style: italic;
    }

    /* =================================================================== */
    /* SCROLLING */
    /* =================================================================== */


    .hide-scroll::-webkit-scrollbar {
        /* IMPORTANT 
            [1] Using the display: none to hide the scrollbar from showing when 
            music cards are flipping back and forth. 
            For a split second, the scrollbar appears, and it's annoying to see.
            
            [2] Not using opacity or overflow as these properties will cause a layout shift 
            and that would require extra code.
        */
        display: none;
    /* visibility: hidden; */
    }

    body.scroll-hidden {
        height: 100%;
        overflow: hidden;
    }
`;
