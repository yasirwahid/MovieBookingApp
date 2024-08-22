import ApiCaller from "../config/ApiCaller"
import Apis from "./Apis"


const GetMovies = async () => {
    try {
        let response = await ApiCaller.Get(Apis.GetMovieList)
        if (response?.status == 200)
            return response?.data
    }
    catch (e) {
        console.error(e)
    }
}
const GetMovieDetails = async (id) => {
    try {
        let response = await ApiCaller.Get(Apis.GetMovieDetails(id))
        if (response?.status == 200)
            return response?.data
    }
    catch (e) {
        console.error(e)
    }
}
const GetMovieVideos = async (id) => {
    try {
        let response = await ApiCaller.Get(Apis.GetVideos(id))
        if (response?.status == 200)
            return response?.data
    }
    catch (e) {
        console.error(e)
    }
}
const SearchMovie = async (query) => {
    try {
        let params = {
            api_key: "cc1c7bbeda93cd46a4ffbd5cd9833672",
            query: query,
            language: 'en-US',
            include_adult: false,
        }
        let response = await ApiCaller.Get(Apis.SearchMovie(), "", {}, params)
        if (response?.status == 200)
            return response?.data
    }
    catch (e) {
        console.error(e)
    }
}



export { GetMovies, GetMovieDetails, GetMovieVideos, SearchMovie }