const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  store: { results: [] },
  trailer: { results: [] },
  isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        store: action.payload.store,
        trailer: action.payload.trailer,
        isLoading: false
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};
