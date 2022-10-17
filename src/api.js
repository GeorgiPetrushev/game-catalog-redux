const BASE_URL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_CATALOG}`;
const popularGames = `&dates=2021-10-17,2022-10-17&ordering=-rating&page_size=10`;
const upcomingGames = `&dates=2022-10-17,2023-10-17&ordering=-added&page_size=10`;
const newGames = `&dates=2021-10-17,2022-10-17&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const newGameURL = () => `${BASE_URL}${newGames}`;
export const upcomingGameURL = () => `${BASE_URL}${upcomingGames}`;

