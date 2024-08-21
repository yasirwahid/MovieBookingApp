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
        console.log("response", response)
        if (response?.status == 200)
            return response?.data
    }
    catch (e) {
        console.error(e)
    }
}


export { GetMovies, GetMovieDetails }