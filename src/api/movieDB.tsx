import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '24237ff35c3702f6f93e2f4b86a484e8',
        language: 'es-ES'
    }
})

export default movieDB