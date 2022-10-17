const BASE_URL=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`
const popularGames = `&dates=2021-09-30,2022-09-29&ordering=-rating&page_size=10`
const popularGamesURL = () => `${BASE_URL}${popularGames}`

console.log(popularGamesURL());