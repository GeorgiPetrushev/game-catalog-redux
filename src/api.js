const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_CATALOG}`;
const popularGames = `&dates=2021-10-17,2022-10-17&ordering=-rating&page_size=10`;
export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
