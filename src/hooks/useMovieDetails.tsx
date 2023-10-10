import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { FullMovieDetails, MoviewDBMoviesResponse } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from "../interfaces/creditsInterface"

interface MovieDetails {
    isLoading: boolean
    fullDetails?: FullMovieDetails
    cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        fullDetails: undefined,
        cast: []
    })


    const getMovieDetails = async () => {
        const movieDetailsPromise = await movieDB.get<FullMovieDetails>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailsResponse, castResponse] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ])

        setState({
            isLoading: false,
            fullDetails: movieDetailsResponse.data,
            cast: castResponse.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])


    return {
        ...state
    }
}
