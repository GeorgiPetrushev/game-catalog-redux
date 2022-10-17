const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
