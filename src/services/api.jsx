//Base da URL https://api.themoviedb.org/3/
// exp url: movie/now_playing?api_key=1716ccbe6a9c6627d366f995cf69015f&append_to_response=videos

import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default Api