import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MoviewDBMoviesResponse } from "../interfaces/movieInterface"


interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upcoming: Movie[]
}

export const useMovies = () => {

    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MoviewDBMoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MoviewDBMoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MoviewDBMoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MoviewDBMoviesResponse>('/upcoming')

        const responses = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setmoviesState({
            nowPlaying: responses[0].data.results,
            popular: responses[1].data.results,
            topRated: responses[2].data.results,
            upcoming: responses[3].data.results,
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
