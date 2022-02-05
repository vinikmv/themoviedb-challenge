const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: API_KEY,
  imagemOriginal: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  imagemW500: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};

export default apiConfig;
