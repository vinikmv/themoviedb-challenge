const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '77b1281113894ee7988fdf25bbbd3b1b',
  imagemOriginal: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  imagemW500: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};

export default apiConfig;
