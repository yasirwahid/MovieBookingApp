
export let baseUrl = `https://api.themoviedb.org/3` //will come from .env
export let imgaeUrl = `https://image.tmdb.org/t/p/original` //will come from .env
const apiKey = "cc1c7bbeda93cd46a4ffbd5cd9833672" //will come from .env


export default Apis = {
    GetMovieList: `${baseUrl}/movie/upcoming`,
    GetMovieDetails: (id) => `${baseUrl}/movie/${id}`,
    GetImages: (id) => `${baseUrl}/movie/${id}/images`,
    GetVideos: (id) => `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`,
    SearchMovie: () => `${baseUrl}/search/movie`
}