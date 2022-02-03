import axiosClient from './axiosClient'

const params = {params: {}}

const tmdbApi = {
  getPopularMovies: () => {
    const url = 'movie/popular';
    return axiosClient.get(url, {params})
  },

  getMovieVideos: (id, params) => {
    const url = `movie/${id}/videos`;
    return axiosClient.get(url, params)
  },

  getMovieGenres: (params) => {
    const url = `/genre/movie/list`;
    return axiosClient.get(url, params)
  },

  getMovieDetails: (id, params) => {
    const url = `movie/${id}`;
    return axiosClient.get(url, params)
  },

  getMovieCredits: (id) => {
    const url = `movie/${id}/credits`;
    return axiosClient.get(url, {params})
  },

  getMovieRecommendations: (id, params) => {
    const url = `movie/${id}/recommendations`;
    return axiosClient.get(url, params)
  },

  
  getMovieReleaseDates: (id) => {
    const url = `movie/${id}/release_dates`;
    return axiosClient.get(url, {params})
  },
}

export default tmdbApi;