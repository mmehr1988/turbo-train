export const reducerLibrary = (state, action) => {
  switch (action.type) {
    // ==================================================
    // MOBILE MENU TOGGLER REDUCER
    // ==================================================
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        isMenuOpen: false,
      };
    case 'OPEN_MENU':
      return {
        ...state,
        isMenuOpen: true,
      };
    // ==================================================
    // CONTACT FORM REDUCER
    // ==================================================
    case 'TOGGLE_CONTACT_FORM':
      return {
        ...state,
        isFormVisible: !state.isFormVisible,
      };

    case 'CLOSE_CONTACT_FORM':
      return {
        ...state,
        isFormVisible: false,
      };

    // ==================================================
    // SCROLL REDUCER
    // ==================================================
    case 'SET_CLIENTSCROLL_Y':
      return {
        ...state,
        clientScrollY: action.scrollPosition,
      };
    case 'SET_NAV_CLIENT_BOUNDING':
      return {
        ...state,
        navClientBounding: action.navBounding,
      };
    case 'SET_SCROLL_TO_TOP_FALSE':
      return {
        ...state,
        scrollToTop: false,
      };
    case 'SET_SCROLL_TO_TOP_TRUE':
      return {
        ...state,
        scrollToTop: true,
      };

    // ==================================================
    // MUSIC CONTEXT
    // ==================================================

    case 'SET_CATEGORY':
      return {
        ...state,
        activeProject: action.category,
      };

    // ==================================================
    // MUSIC CONTEXT
    // ==================================================

    case 'SET_FLIPPED_TRUE':
      return {
        ...state,
        flippedState: [
          ...state.flippedState,
          { ...action.cardObj, flipped: true },
        ],
      };

    case 'TOGGLE_FLIPPED':
      return {
        ...state,
        flippedState: state.flippedState.map((card) =>
          card.id === action.cardId
            ? { ...card, flipped: card.flipped === true ? false : true }
            : card
        ),
      };

    case 'RESET_FLIPPED_STATE':
      return {
        ...state,
        flippedState: [],
      };

    default:
      return state;
  }
};
